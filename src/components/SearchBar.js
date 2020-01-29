import React from "react";

class SearchBar extends React.Component{
    handleChanges(e){
        console.log(e.target.value);
    }
    render(){
        return(
            <form onChange={this.handleChanges} >
                <div className="form-group">                    
                        <input type="search" name="buscar" id="buscar" placeholder="¿Que buscas?" className="form-control"/>                    
                </div>
                <div className="form-group">
                    <input type="checkbox" name="stock" id="stock" />
                    <label htmlFor="stock">solo productos en stock</label>
                </div>
            </form>
        )
    }
    
}

export default SearchBar;