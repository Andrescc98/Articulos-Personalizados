import React from "react";


class List extends React.Component{
    constructor(props) {
      super(props);
      this.state={
        error:null,
        isLoaded:false,
        lists:[]
      };
    }
    componentDidMount(){
      fetch('http://localhost:2000/articulo')
      .then(res=>res.json())
      .then((data)=>{
        this.setState({
          isLoaded:true,
          lists:data
        });
      },
      (error)=>{
        this.setState({
          isLoaded:true,
          error
        });
      }
      )
      
    }
  
    render(){
      const{error,isLoaded,lists}=this.state;
      if(error){
        return <div  className="container mt-4">error: {error.message}</div>
      }else if(!isLoaded){
        return <div className="container mt-4 text-center">
            <div className="spinner-grow text-info" role="status"></div>
            <p className="text-muted">Loading...</p>
        </div>
      }else{
        return(
          <div className="container mt-4">
            <ul className="list-group">
              {lists.map(list=>(
                <li className="list-group-item" key={list.id_articulo.toString()}>
                  {list.titulo}
                </li>
              ))}
            </ul>
          </div>
        )
      }
      }
      
  
  }

  export default List