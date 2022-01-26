import './Quote.css';

export default function Quote(props: {sentence: string, source: string}) {
    return (
        <h1 className='typewriter'>{props.sentence}<h2 className='source'>{props.source}</h2></h1>
    );
}
