import React from "react";
import {lista} from './datos.json';



class List extends React.Component{
    constructor(props) {
      super(props);
      this.state={

        lists:lista
      };
      console.log(this.state.lists);
    }
    
    render(){
      const {lists}=this.state;

        return(
          <div className="container mt-4">
            <table className="table table-bordered">
              <thead>
                <th>Name</th>
                <th>Price</th>
              </thead>
              <tbody>
                <tr>
                  <th colSpan="2">Sporting Goods</th>
                </tr>
                
                {lists.map(list=>(<tr>
                  <td className={list.stocked? '':'text-danger'}>{list.name}</td>
                  <td>{list.prices}</td>
                </tr>))}
              </tbody>
            </table>
          </div>
        )
      
      }
      
  
  }

  export default List