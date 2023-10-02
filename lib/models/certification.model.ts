import mongoose from 'mongoose';

const certificationSchema = new mongoose.Schema({
  imageUrl: { type: String, required: true },
  verificationUrl: { type: String }
}, {
  timestamps: true
});

const Certification = mongoose.models.Certification || mongoose.model('Certification', certificationSchema);

export default Certification;