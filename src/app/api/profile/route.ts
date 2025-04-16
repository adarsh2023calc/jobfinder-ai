import { NextRequest, NextResponse } from "next/server";
import { clerkClient } from "@clerk/nextjs";
import { getAuth } from "@clerk/nextjs/server";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import { userProfileSchema } from "@/lib/validations";

export async function POST(req: NextRequest) {
  try {
    const { userId } = getAuth(req);
    
    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // Parse and validate the request body
    const body = await req.json();
    const validatedData = userProfileSchema.parse(body);

    // Connect to the database
    await connectDB();

    // Check if user profile already exists
    let user = await User.findOne({ clerkId: userId });

    if (user) {
      // Update existing user
      user = await User.findOneAndUpdate(
        { clerkId: userId },
        { 
          ...validatedData,
          updatedAt: new Date() 
        },
        { new: true }
      );
    } else {
      // Create new user
      user = await User.create({
        clerkId: userId,
        ...validatedData,
      });
    }

    return NextResponse.json(
      { message: "Profile saved successfully", user },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error saving profile:", error);
    
    // Handle validation errors
    if (error.name === "ZodError") {
      return NextResponse.json(
        { error: "Validation error", details: error.errors },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: "Failed to save profile", message: error.message },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const { userId } = getAuth(req);
    
    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // Connect to the database
    await connectDB();

    // Find user profile
    const user = await User.findOne({ clerkId: userId });

    if (!user) {
      return NextResponse.json(
        { error: "Profile not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error: any) {
    console.error("Error fetching profile:", error);
    
    return NextResponse.json(
      { error: "Failed to fetch profile", message: error.message },
      { status: 500 }
    );
  }
} 