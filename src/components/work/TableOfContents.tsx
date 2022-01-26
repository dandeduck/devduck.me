import './TableOfContents.css';

export default function TableOfContents(props: {title: string, sections: string[]}) {
    const onClick = (e: React.MouseEvent, id: string) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({behavior: 'smooth', block: "start"});
    };

    return (
        <div className='table'>
            <p className='title code-look'>{props.title}</p>
            <div className='sections'>
                {props.sections.map(section => <a href='/' onClick={(e) => onClick(e, section)} className='section code-look'>{section}</a>)}
            </div>
        </div>
    );
}