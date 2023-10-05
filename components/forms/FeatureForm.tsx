import { useForm } from 'react-hook-form';
import Input from '../ui/common/Input';
import Textarea from '../ui/common/Textarea';
import FileUploadField from '../ui/common/FileUploadField';
import Button from '../ui/common/Button';

interface FeatureFormProps {
  setFeatures: (newFeature: any) => void;
}

interface Feature {
  title: string;
  description: string;
  featureImageUrl: string;
}

const FeatureForm: React.FC<FeatureFormProps> = ({ setFeatures }) => {
  const { 
    register,
    handleSubmit, 
    setValue, 
    setError,
    control, 
    formState: { errors },
    reset 
  } = useForm<Feature>();

  const handleFormSubmit = async (data: any) => {
    setFeatures(data)
    reset();
  }

  return (
    <form 
      onSubmit={handleSubmit(handleFormSubmit)} 
      className='relative px-3 py-4 w-full h-fit flex flex-col items-center gap-3 border border-gray-100 rounded form'
    >
      <label className='text-base font-semibold'>Add a new project feature</label>
      <Input 
        name='title' 
        label='Title' 
        register={register} 
        registerOptions={{ required: 'Title is required!' }} 
        error={errors.title} 
      />
      <Textarea 
        name='description' 
        label='Description' 
        register={register} 
        registerOptions={{ required: 'Description is required!' }} 
        minLength={3} 
        maxLength={1500}
        error={errors.description}
      />
      <FileUploadField 
        name='featureImageUrl'
        label='Feature Image'
        control={control}
        setValue={setValue}
        setError={setError}
      />
      <Button type='submit' title='Add' />
    </form>
  )
}

export default FeatureForm