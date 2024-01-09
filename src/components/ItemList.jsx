import Item from "./Item";

const ItemList = ({items}) =>{
    return(
                
            <div className="row m-1">
                {items.map(item=>(
                        <div className="col-md-3"  key={item.index}>
                            <Item item={item}/>
                        </div>
                    ))}
   
            </div>
                
            
        
    );

};

export default ItemList;