import './Page.css';

export default function Page(props: {html :(JSX.Element)}) {
  return (
    <div className='page'>
      <div className='content'>
        {props.html}
      </div>
    </div>
  );
}