import './CodeInputField.css'

export default function CodeInputField(props: {name: string, value: string, type: string, onChange: (e: any) => void, textarea: boolean }) {
  const field = !props.textarea ? <input className='field code-look' type={props.type} onChange={props.onChange} value={props.value}></input> : <textarea className='big field code-look' onChange={props.onChange} value={props.value}></textarea>;
  
  return (
    <div className='entry'>
      <label  className='key-word code-look'>{props.name}</label>
      {field}
      <label className='key-word code-look'><span className='grey'>/</span>{props.name}</label>
    </div>
  );
}

CodeInputField.defaultProps = {
  textarea: false,
  type: ''
}