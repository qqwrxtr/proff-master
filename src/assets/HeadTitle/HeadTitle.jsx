const HeadTitle = (props) => {
    return ( 
        <div className="head-title xs:text-3xl text-5xl font-bold">
            <p className="main-text ">{props.title}</p>
        </div>
     );
}
 
export default HeadTitle;