const Loading = () =>{
    return(
        <div className="text-center m-3" >
        <div className="spinner-border"  role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow"   role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
        </div>
        
    )
};

export default Loading;