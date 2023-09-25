import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  summary: { type: String, required: true },
  imageUrl: { type: String, required: true },
  category: { type: String, required: true },
  technologies: [{ type: String }],
  features: [{
    title: { type: String, required: true },
    description: { type: String, required: true },
    featureImageUrl: { type: String, required: true },
  }],
  credentials: [{
    title: { type: String, required: true },
    description: { type: String, required: true },
  }],
  previewUrl: { type: String },
  repoFrontend: { type: String },
  repoBackend: { type: String },
})

const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);

export default Project;