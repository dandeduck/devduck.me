import './CodeInputField.css'

export default function CodeInputField(props: {name: string, value: string, onChange: (e: any) => void, textarea: boolean}) {
  return (
    <div className='entry'>
      <label  className='key-word code-look'>{props.name}</label>
      <input className='field code-look' onChange={props.onChange} value={props.value}></input>
      <label className='key-word code-look'><span className='grey'>/</span>{props.name}</label>
    </div>
  );
}