import './Quote.css';

export default function Quote(props: {sentence: string, source: string}) {
    return (
        <div className='quote-container'>
            <blockquote className='quote'>{props.sentence}</blockquote>
            <span className='source'>- {props.source}</span>
        </div>
    );
}
