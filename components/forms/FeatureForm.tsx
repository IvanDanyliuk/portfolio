import { useForm } from 'react-hook-form';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import FileUploadField from '../ui/FileUploadField';
import Button from '../ui/Button';

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
      className='relative w-full flex flex-col gap-3 form'
    >
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