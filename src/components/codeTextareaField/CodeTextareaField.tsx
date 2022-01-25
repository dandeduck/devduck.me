import './CodeTextareaField.css'

export default function CodeTextareaField(props: {name: string, value: string, onChange: (e: any) => void}) {
  return (
    <div className='entry'>
      <label  className='key-word code-look'>{props.name}</label>
      <textarea className='big field code-look' onChange={props.onChange} value={props.value}></textarea>
      <label className='key-word code-look'><span className='grey'>/</span>{props.name}</label>
    </div>
  );
}