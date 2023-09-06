import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  id: { type: String, required: true },
  greeting: { type: String, required: true },
  bio: { type: String, required: true },
  skills: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Technology' }],
  education: [{
    institution: { type: String, required: true },
    degree: { type: String },
    periodFrom: { type: String, required: true },
    periodTo: { type: String, required: true },
  }],
  experience: [{
    company: { type: String, required: true },
    position: { type: String, required: true },
    periodFrom: { type: String, required: true },
    periodTo: { type: String, required: true },
  }],
  certifications: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Certification' }]
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;