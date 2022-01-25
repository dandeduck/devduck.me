import './Comment.css';

export default function Comment(props: {value: string}) {
  return <span className='comment'>{props.value}</span>;
}