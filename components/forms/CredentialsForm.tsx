import { useForm } from 'react-hook-form';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import Button from '../ui/Button';

interface CredentialsFormProps {
  setCredentials: (newFeature: any) => void;
}

interface Credential {
  title: string;
  description: string;
}

const CredentialsForm: React.FC<CredentialsFormProps> = ({ setCredentials }) => {
  const { 
    register,
    handleSubmit, 
    formState: { errors },
    reset 
  } = useForm<Credential>();

  const handleFormSubmit = async (data: any) => {
    setCredentials(data)
    reset();
  }

  return (
    <form 
      onSubmit={handleSubmit(handleFormSubmit)} 
      className='relative px-3 py-4 w-full h-fit flex flex-col gap-3 border border-gray-100 rounded form'
    >
      <label className='text-base font-semibold'>Add credentials</label>
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
      <Button type='submit' title='Add' />
    </form>
  )
}

export default CredentialsForm