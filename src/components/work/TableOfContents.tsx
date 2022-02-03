import './TableOfContents.css';

export default function TableOfContents(props: {title: string, sections: string[]}) {
    const onClick = (e: React.MouseEvent, id: string) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({behavior: 'smooth', block: "start"});
    };

    return (
        <div className='table code-look'>
            <p className='table-title'>{props.title}</p>
            <div className='sections'>
                {props.sections.map((section, i) => <a href='/' key={i} onClick={(e) => onClick(e, section)} className='section'>{section}</a>)}
            </div>
        </div>
    );
}