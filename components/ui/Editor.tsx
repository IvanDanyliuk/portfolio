// 'use client'

import dynamic from 'next/dynamic'
import { Control, Controller, FieldError, RegisterOptions, UseFormRegister } from 'react-hook-form'
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })
import 'react-quill/dist/quill.snow.css'

interface EditorProps {
  name: string;
  label?: string;
  control: Control<any>;
  register: UseFormRegister<any>;
  registerOptions?: RegisterOptions;
  error?: FieldError;
  [x: string]: any;
}

const Editor: React.FC<EditorProps> = ({ name, label, control, register, registerOptions, error, ...props }) => {
  const modules = {
    toolbar: [
      // [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      // ['bold', 'italic', 'underline','strike', 'blockquote'],
      // [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      // ['link', 'image'],
      // ['clean']
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],

      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction

      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],

      ['clean']
    ],
  };
  
  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ];
  
  return (
    <div>
      {label && <label className='field-label'>{label}</label>}
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <ReactQuill 
            theme='snow'
            onChange={(name) => onChange(name)}
            value={value}
            modules={modules}
            formats={formats}
          />
        )}
      />
    </div>
  )
}

export default Editor