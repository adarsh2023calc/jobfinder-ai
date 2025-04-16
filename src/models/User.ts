import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  skills: [String],
  experience: [{
    role: String,
    company: String,
    years: Number,
    description: String,
  }],
  preferredRoles: [String],
  preferredLocations: [String],
  industries: [String],
  salary: {
    min: Number,
    max: Number,
    currency: {
      type: String,
      default: 'USD',
    },
  },
  workType: {
    type: String,
    enum: ['remote', 'hybrid', 'on-site'],
    default: 'remote',
  },
  summary: String,
  availability: {
    type: String,
    enum: ['immediate', 'two_weeks', 'one_month', 'other'],
    default: 'two_weeks',
  },
  education: [{
    degree: String,
    institution: String,
    year: Number,
  }],
  certifications: [String],
  linkedinUrl: String,
  portfolioUrl: String,
  githubUrl: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Update the timestamp before saving
UserSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

export default mongoose.models.User || mongoose.model('User', UserSchema); 