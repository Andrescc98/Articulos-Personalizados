import React from "react";

class SearchBar extends React.Component{
    handleChanges(e){
        
        this.props.callback(e.target.name, e.target.value);
    }
    render(){
        return(
            <form  >
                <div className="form-group">                    
                        <input type="search" onChange={(e)=>this.handleChanges(e)} name="buscar" id="buscar" placeholder="¿Que buscas?" className="form-control"/>                    
                </div>
                <div className="form-group">
                    <input type="checkbox" onChange={(e)=>this.handleChanges(e)} name="stock" id="stock" />
                    <label htmlFor="stock">solo productos en stock</label>
                </div>
            </form>
        )
    }
    
}

export default SearchBar;