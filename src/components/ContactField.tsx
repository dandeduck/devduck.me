import './ContactField.css'

export default function ContactField(props: {name: string, value: string, onChange: (e: any) => void, textarea: boolean}) {
  const Input = () => {
    if (props.textarea) 
      return  <textarea id='field' className='big field code-look' onChange={props.onChange} value={props.value}></textarea>;
    return <input id='field' className='field code-look' onChange={props.onChange} value={props.value}></input>;
  }

  return (
    <div className='entry'>
      <label htmlFor='field' className='key-word code-look'>{props.name}</label>
      <Input/>
      <label htmlFor='field' className='key-word code-look'><span className='grey'>/</span>{props.name}</label>
    </div>
  );
}