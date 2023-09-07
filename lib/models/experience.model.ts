import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema({
  company: { type: String, required: true },
  position: { type: String, required: true },
  periodFrom: { type: String, required: true },
  periodTo: { type: String, required: true },
});

const Experience = mongoose.models.Experience || mongoose.model('Experience', experienceSchema);

export default Experience;