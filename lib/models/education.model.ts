import mongoose from 'mongoose';

const educationSchema = new mongoose.Schema({
  institution: { type: String, required: true },
  degree: { type: String },
  periodFrom: { type: String, required: true },
  periodTo: { type: String, required: true },
});

const Education = mongoose.models.Education || mongoose.model('Education', educationSchema);

export default Education;