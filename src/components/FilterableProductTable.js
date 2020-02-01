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
        // this.handleForm=this.handleForm.bind(this);

    }
    handleForm(event, result){
        console.log(event, result);
        console.log(this.state.lista)
        console.log(lista.filter());
        // this.setState({
        //     lista:)
        // })
    }
    render(){
        return(
            <div className="container mt-4">
                <div>
                    <SearchBar callback={this.handleForm.bind(this)} className="my-3"/>
                </div>
                <ProductTable products={this.state.lista}/>
            </div>
        );
    }

}

export default FilterableProductTable;