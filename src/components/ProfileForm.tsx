"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { userProfileSchema } from "@/lib/validations";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { JOB_ROLES, INDUSTRIES, LOCATIONS, WORK_TYPE_OPTIONS, AVAILABILITY_OPTIONS } from "@/constants";
import { toast } from "sonner";
import { useUser } from "@clerk/nextjs";

// Create a type from the zod schema
type ProfileFormValues = z.infer<typeof userProfileSchema>;

export default function ProfileForm() {
  const [activeTab, setActiveTab] = useState("personal");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useUser();

  // Initialize the form with default values
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(userProfileSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      skills: [],
      preferredRoles: [],
      preferredLocations: [],
      industries: [],
      workType: "remote",
      summary: "",
      availability: "two_weeks",
      linkedinUrl: "",
      portfolioUrl: "",
      githubUrl: "",
    },
  });

  // Load user profile data
  useEffect(() => {
    async function loadUserProfile() {
      try {
        const response = await fetch('/api/profile');
        
        if (response.ok) {
          const data = await response.json();
          
          // Update form values with fetched data
          form.reset({
            name: data.name || user?.fullName || "",
            email: data.email || user?.primaryEmailAddress?.emailAddress || "",
            phone: data.phone || "",
            skills: data.skills || [],
            preferredRoles: data.preferredRoles || [],
            preferredLocations: data.preferredLocations || [],
            industries: data.industries || [],
            workType: data.workType || "remote",
            summary: data.summary || "",
            availability: data.availability || "two_weeks",
            linkedinUrl: data.linkedinUrl || "",
            portfolioUrl: data.portfolioUrl || "",
            githubUrl: data.githubUrl || "",
          });
        } else if (response.status !== 404) {
          // If it's not a 404 (user not found), it's an actual error
          throw new Error("Failed to load profile");
        } else {
          // If user not found, but we have Clerk user data, pre-fill with it
          if (user) {
            form.setValue("name", user.fullName || "");
            form.setValue("email", user.primaryEmailAddress?.emailAddress || "");
          }
        }
      } catch (error) {
        console.error("Error loading profile:", error);
        toast.error("Failed to load profile data");
      } finally {
        setIsLoading(false);
      }
    }

    if (user) {
      loadUserProfile();
    } else {
      setIsLoading(false);
    }
  }, [user, form]);

  // Form submission handler
  async function onSubmit(data: ProfileFormValues) {
    setIsSubmitting(true);
    try {
      // Submit to the API
      const response = await fetch('/api/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to save profile");
      }
      
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[400px]">
        <div className="flex flex-col items-center gap-2">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-r-transparent"></div>
          <p className="text-muted-foreground">Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Complete Your Profile</h1>
      
      <Tabs defaultValue="personal" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="personal">Personal Info</TabsTrigger>
          <TabsTrigger value="skills">Skills & Experience</TabsTrigger>
          <TabsTrigger value="preferences">Job Preferences</TabsTrigger>
        </TabsList>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <TabsContent value="personal" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>
                    Enter your basic details to help employers get to know you.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="john.doe@example.com" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number (WhatsApp)</FormLabel>
                        <FormControl>
                          <Input placeholder="+1 123 456 7890" {...field} />
                        </FormControl>
                        <FormDescription>
                          This will be used to send you job notifications via WhatsApp.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="summary"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Professional Summary</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="A brief summary of your professional background and career goals..."
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Write a short professional bio that describes your expertise and what you're looking for.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="ghost"
                    type="button"
                    disabled
                  >
                    Back
                  </Button>
                  <Button 
                    type="button" 
                    onClick={() => setActiveTab("skills")}
                  >
                    Next
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="skills" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Skills & Experience</CardTitle>
                  <CardDescription>
                    Add your skills, work experience and links to your professional profiles.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="skills"
                      render={() => (
                        <FormItem>
                          <FormLabel>Skills</FormLabel>
                          <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
                            {["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python", "Java", "C#", "AWS", "Docker"].map((skill) => (
                              <FormField
                                key={skill}
                                control={form.control}
                                name="skills"
                                render={({ field }) => {
                                  const value = field.value || [];
                                  return (
                                    <FormItem
                                      key={skill}
                                      className="flex flex-row items-start space-x-3 space-y-0"
                                    >
                                      <FormControl>
                                        <Checkbox
                                          checked={value.includes(skill)}
                                          onCheckedChange={(checked) => {
                                            return checked
                                              ? field.onChange([...value, skill])
                                              : field.onChange(
                                                  value.filter(
                                                    (val) => val !== skill
                                                  )
                                                )
                                          }}
                                        />
                                      </FormControl>
                                      <FormLabel className="text-sm font-normal">
                                        {skill}
                                      </FormLabel>
                                    </FormItem>
                                  )
                                }}
                              />
                            ))}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <FormField
                      control={form.control}
                      name="linkedinUrl"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>LinkedIn Profile</FormLabel>
                          <FormControl>
                            <Input placeholder="https://linkedin.com/in/username" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="githubUrl"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>GitHub Profile</FormLabel>
                          <FormControl>
                            <Input placeholder="https://github.com/username" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="portfolioUrl"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Portfolio/Website</FormLabel>
                          <FormControl>
                            <Input placeholder="https://yourwebsite.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  {/* Work experience would normally be a dynamic form array */}
                  <div>
                    <h3 className="text-sm font-medium mb-2">Work Experience</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      You'll be able to add work experience after saving your profile.
                    </p>
                  </div>
                  
                  {/* Education would normally be a dynamic form array */}
                  <div>
                    <h3 className="text-sm font-medium mb-2">Education</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      You'll be able to add education details after saving your profile.
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="ghost"
                    type="button"
                    onClick={() => setActiveTab("personal")}
                  >
                    Back
                  </Button>
                  <Button 
                    type="button" 
                    onClick={() => setActiveTab("preferences")}
                  >
                    Next
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="preferences" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Job Preferences</CardTitle>
                  <CardDescription>
                    Tell us about the type of jobs you're looking for.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="preferredRoles"
                    render={() => (
                      <FormItem>
                        <FormLabel>Preferred Job Roles</FormLabel>
                        <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
                          {JOB_ROLES.slice(0, 9).map((role) => (
                            <FormField
                              key={role}
                              control={form.control}
                              name="preferredRoles"
                              render={({ field }) => {
                                const value = field.value || [];
                                return (
                                  <FormItem
                                    key={role}
                                    className="flex flex-row items-start space-x-3 space-y-0"
                                  >
                                    <FormControl>
                                      <Checkbox
                                        checked={value.includes(role)}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([...value, role])
                                            : field.onChange(
                                                value.filter(
                                                  (val) => val !== role
                                                )
                                              )
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="text-sm font-normal">
                                      {role}
                                    </FormLabel>
                                  </FormItem>
                                )
                              }}
                            />
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="industries"
                    render={() => (
                      <FormItem>
                        <FormLabel>Industries of Interest</FormLabel>
                        <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
                          {INDUSTRIES.slice(0, 9).map((industry) => (
                            <FormField
                              key={industry}
                              control={form.control}
                              name="industries"
                              render={({ field }) => {
                                const value = field.value || [];
                                return (
                                  <FormItem
                                    key={industry}
                                    className="flex flex-row items-start space-x-3 space-y-0"
                                  >
                                    <FormControl>
                                      <Checkbox
                                        checked={value.includes(industry)}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([...value, industry])
                                            : field.onChange(
                                                value.filter(
                                                  (val) => val !== industry
                                                )
                                              )
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="text-sm font-normal">
                                      {industry}
                                    </FormLabel>
                                  </FormItem>
                                )
                              }}
                            />
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="preferredLocations"
                    render={() => (
                      <FormItem>
                        <FormLabel>Preferred Locations</FormLabel>
                        <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
                          {LOCATIONS.slice(0, 9).map((location) => (
                            <FormField
                              key={location}
                              control={form.control}
                              name="preferredLocations"
                              render={({ field }) => {
                                const value = field.value || [];
                                return (
                                  <FormItem
                                    key={location}
                                    className="flex flex-row items-start space-x-3 space-y-0"
                                  >
                                    <FormControl>
                                      <Checkbox
                                        checked={value.includes(location)}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([...value, location])
                                            : field.onChange(
                                                value.filter(
                                                  (val) => val !== location
                                                )
                                              )
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="text-sm font-normal">
                                      {location}
                                    </FormLabel>
                                  </FormItem>
                                )
                              }}
                            />
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="workType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Work Type</FormLabel>
                          <div className="space-y-2">
                            {WORK_TYPE_OPTIONS.map((option) => (
                              <FormItem
                                key={option.value}
                                className="flex flex-row items-start space-x-3 space-y-0"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value === option.value}
                                    onCheckedChange={() => field.onChange(option.value)}
                                  />
                                </FormControl>
                                <FormLabel className="text-sm font-normal">
                                  {option.label}
                                </FormLabel>
                              </FormItem>
                            ))}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="availability"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Availability</FormLabel>
                          <div className="space-y-2">
                            {AVAILABILITY_OPTIONS.map((option) => (
                              <FormItem
                                key={option.value}
                                className="flex flex-row items-start space-x-3 space-y-0"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value === option.value}
                                    onCheckedChange={() => field.onChange(option.value)}
                                  />
                                </FormControl>
                                <FormLabel className="text-sm font-normal">
                                  {option.label}
                                </FormLabel>
                              </FormItem>
                            ))}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="ghost"
                    type="button"
                    onClick={() => setActiveTab("skills")}
                  >
                    Back
                  </Button>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Saving..." : "Save Profile"}
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </form>
        </Form>
      </Tabs>
    </div>
  );
} 