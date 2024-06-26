'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { v4 as uuid } from 'uuid';
import { projectCategories } from '@/constants';
import Input from '../ui/common/Input';
import Textarea from '../ui/common/Textarea';
import Button from '../ui/common/Button';
import Select from '../ui/common/Select';
import FileUploadField from '../ui/common/FileUploadField';
import MultiSelect from '../ui/common/MultiSelect';
import FeatureForm from './FeatureForm';
import Chip from '../ui/common/Chip';
import NoDataMessage from '../ui/common/NoDataMessage';
import CredentialsForm from './CredentialsForm';
import { createProject, updateProject } from '@/lib/actions/project.actions';

interface ProjectFormProps {
  technologies: any[];
  projectToUpdate?: {
    _id: string;
    name: string;
    summary: string;
    imageUrl: string;
    category: string;
    technologies: string[];
    features: {
      title: string;
      description: string;
      featureImageUrl: string;
    }[];
    credentials: {
      title: string;
      description: string;
    }[];
    previewUrl?: string;
    repoFrontend?: string;
    repoBackend?: string;
  };
}

interface ProjectForm {
  name: string;
  summary: string;
  imageUrl: string;
  category: string;
  technologies: string[];
  features: {
    title: string;
    description: string;
    featureImageUrl: string;
  }[];
  credentials: {
    title: string;
    description: string;
  }[];
  previewUrl?: string;
  repoFrontend?: string;
  repoBackend?: string;
}

interface Feature {
  title: string;
  description: string;
  featureImageUrl: string;
}

interface Credential {
  title: string;
  description: string;
}

const ProjectForm: React.FC<ProjectFormProps> = ({ technologies, projectToUpdate }) => {
  const router = useRouter();
  const pathname = usePathname();

  const technologiesList = technologies.map(tech => ({ label: tech.title, value: tech.title }));

  const { 
    register,
    handleSubmit, 
    setValue,
    setError, 
    getValues, 
    control, 
    formState: { errors, isSubmitSuccessful, isSubmitting },
    reset 
  } = useForm<ProjectForm>();

  const [features, setFeatures] = useState<Feature[]>([]);
  const [credentials, setCredentials] = useState<Credential[]>([]);

  const handleAddFeature = (newFeature: any) => {
    const addedFeatures = getValues().features;
    setValue('features', [...addedFeatures, newFeature]);
    setFeatures([...features, newFeature]);
  }

  const handleFeatureDelete = (title: string) => {
    const addedFeatures = getValues().features;
    const updatedFeaturesList = addedFeatures.filter(feature => feature.title !== title);
    setValue('features', updatedFeaturesList);
    setFeatures(updatedFeaturesList);
  }

  const handleAddCredential = (newCredential: any) => {
    const addedCredentials = getValues().credentials;
    setValue('credentials', [...addedCredentials, newCredential]);
    setCredentials([...credentials, newCredential]);
  }

  const handleCredentialsDelete = (title: string) => {
    const addedCredentials = getValues().credentials;
    const updatedCredentialsList = addedCredentials.filter(credential => credential.title !== title);
    setValue('credentials', updatedCredentialsList);
    setCredentials(updatedCredentialsList);
  }

  const handleFormSubmit = async (data: any) => {
    if(projectToUpdate) {
      await updateProject({ 
        id: projectToUpdate._id, 
        data, 
        pathname 
      });
    } else {
      await createProject({
        name: data.name,
        summary: data.summary,
        imageUrl: data.imageUrl,
        category: data.category,
        technologies: data.technologies,
        features: data.features,
        credentials: data.credentials,
        previewUrl: data.previewUrl,
        repoFrontend: data.repoFrontend,
        repoBackend: data.repoBackend,
        pathname
      })
    }

    reset();
    setFeatures([]);
    setCredentials([]);
  }

  useEffect(() => {
    register('features');
    register('credentials');
    setValue('features', []);
    setValue('credentials', []);
    
    if(projectToUpdate) {
      reset({
        name: projectToUpdate.name,
        summary: projectToUpdate.summary,
        category: projectToUpdate.category,
        technologies: projectToUpdate.technologies,
        features: projectToUpdate.features,
        credentials: projectToUpdate.credentials,
        previewUrl: projectToUpdate.previewUrl,
        repoFrontend: projectToUpdate.repoFrontend,
        repoBackend: projectToUpdate.repoBackend
      });
      setFeatures(projectToUpdate.features);
      setCredentials(projectToUpdate.credentials);
    }
  }, []);

  useEffect(() => {
    if(isSubmitSuccessful) {
      toast.success('Done!');
      router.push('/admin/projects');
    }
  }, [isSubmitSuccessful])

  return (
    <div className='relative w-full flex justify-between gap-6'>
      <form 
        onSubmit={handleSubmit(handleFormSubmit)} 
        className='relative w-full flex flex-col items-center gap-3 form'
      >
        <Input 
          name='name' 
          label='Name' 
          register={register} 
          registerOptions={{ required: 'Name is required!' }} 
          error={errors.name} 
        />
        <Textarea 
          name='summary' 
          label='Summary' 
          register={register} 
          registerOptions={{ required: 'Summary is required!' }} 
          minLength={3} 
          maxLength={1500}
          error={errors.summary}
        />
        <Select 
          name='category' 
          label='Category' 
          control={control} 
          options={projectCategories} 
        />
        <FileUploadField 
          name='imageUrl'
          label='Project Image'
          control={control}
          setValue={setValue}
          setError={setError}
        />
        <MultiSelect 
          name='technologies' 
          label='Technologies' 
          control={control} 
          options={technologiesList} 
        />
        <Input 
          name='previewUrl' 
          label='Preview link' 
          register={register}  
          error={errors.previewUrl} 
        />
        <Input 
          name='repoFrontend' 
          label='Frontend repository link' 
          register={register}  
          error={errors.repoFrontend} 
        />
        <Input 
          name='repoBackend' 
          label='Backend repository link' 
          register={register}  
          error={errors.repoBackend} 
        />
        <fieldset className='w-full'>
          <label>Features</label>
          <div className='pt-2 w-full flex flex-wrap gap-3'>
            {features.length > 0 ? features.map(feature => (
              <div key={uuid()}>
                <Chip 
                  title={feature.title} 
                  maxLength={20}
                  onClose={() => handleFeatureDelete(feature.title)} 
                />
              </div>
            )) : (
              <NoDataMessage message='No available features' />
            )}
          </div>
        </fieldset>
        <fieldset className='w-full'>
          <label>Credentials</label>
          <div className='pt-2 w-full flex flex-wrap gap-3'>
            {credentials.length > 0 ? credentials.map(credential => (
              <div key={uuid()}>
                <Chip 
                  title={credential.title} 
                  maxLength={20}
                  onClose={() => handleCredentialsDelete(credential.title)} 
                />
              </div>
            )) : (
              <NoDataMessage message='No available credentials' />
            )}
          </div>
        </fieldset>
        <Button type='submit' title={isSubmitting ? 'Loading...' : projectToUpdate ? 'Update' : 'Create'} />
      </form>
      <div className='py-3 flex flex-col gap-3'>
        <FeatureForm setFeatures={handleAddFeature} />
        <CredentialsForm setCredentials={handleAddCredential} />
      </div>
    </div>
  )
}

export default ProjectForm