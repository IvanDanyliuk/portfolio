import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema({
  title: { type: String, required: true },
  isAdditional: { type: Boolean }
});

const Skill = mongoose.models.Skill || mongoose.model('Skill', skillSchema);

export default Skill;