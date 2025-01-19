const HeadTitle = (props) => {
    return (
        <div 
            className="head-title xs:text-3xl text-5xl font-bold" 
            aria-label={`Section title: ${props.title}`}
        >
            <p className="main-text" aria-hidden="true">{props.title}</p>
        </div>
    );
};

export default HeadTitle;