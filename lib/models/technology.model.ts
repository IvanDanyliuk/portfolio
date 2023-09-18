import mongoose from 'mongoose';

const technologylSchema = new mongoose.Schema({
  title: { type: String, required: true }
});

const Technology = mongoose.models.Technology || mongoose.model('Technology', technologylSchema);

export default Technology;