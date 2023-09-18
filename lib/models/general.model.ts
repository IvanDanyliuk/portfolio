import mongoose from 'mongoose';

const generalSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  biography: { type: String, required: true },
  photoUrl: { type: String },
});

const General = mongoose.models.General || mongoose.model('General', generalSchema);

export default General;