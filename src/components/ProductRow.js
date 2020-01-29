import React from "react";


class ProductRow extends React.Component{
    render(){
        const product=this.props.product;
        return(
            <tr>
                <td className={product.stocked? '' : 'text-danger'}>{product.name}</td>
                <td>{product.prices}</td>
            </tr>
                
            
        );
    }
    
}
export default ProductRow;