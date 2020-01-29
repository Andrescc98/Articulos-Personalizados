import React from "react";
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from "./ProductRow";


class ProductTable extends React.Component{

    render(){
        const row=[];
        let lastCategory=null;
        this.props.products.forEach(product => {
            if(product.category!==lastCategory){
                row.push(
                    <ProductCategoryRow category={product.category} key={product.index}/>
                );
            }
            row.push(
                <ProductRow product={product} key={product.index}/>
            );
            lastCategory=product.category;
            
        });
        return(
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Prices</th>
                    </tr>
                </thead>
                <tbody>
                    {row}
                </tbody>
            </table>
        );
    }
    
}

export default ProductTable;