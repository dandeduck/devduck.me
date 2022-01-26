import './TableOfContents.css';

export default function TableOfContents(props: {name: string}) {
    return (
        <div className='table'>
            <p className='name'>{props.name}</p>
        </div>
    );
}