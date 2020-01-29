import React from "react";
import './SearchBar';
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import {lista} from './datos.json';

class FilterableProductTable extends React.Component{
    constructor(props){
        super(props);
        this.state={
            lista
        };

    }

    render(){
        return(
            <div className="container mt-4">
                <SearchBar className="my-3"/>
                <ProductTable products={this.state.lista}/>
            </div>
        );
    }

}

export default FilterableProductTable;