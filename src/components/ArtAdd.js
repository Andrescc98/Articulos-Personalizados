import React, { Component } from 'react'
import FormArt from './partials/FormArt';
import {Redirect} from 'react-router-dom';

export default class ArtAdd extends Component {
    constructor(props){
        super(props);
        this.state={
            add:''
        };
        this.formSubmit=this.formSubmit.bind(this);
    }
    
   async formSubmit(obj){
        console.log(obj);
        try{const res=await fetch('http://localhost:2000/articulo/crear',{
            method:'POST',
            body:JSON.stringify(obj),
            headers:{'Content-Type':'application/json'}
        });
        const data=await res.json();
        if(data.estado){
            return this.setState({
                add:'ok'
            });
            
        }else{
            console.log(data);
        }}
        catch(error){
            console.log(error);
        }
        

    }
    render() {
        if(this.state.add==='ok'){
            return <Redirect from="/articulo/add" to='/'/>

        }
        return (
            <div className="container">
                <div className="card">
                    <div className="card-content">
                        <FormArt formSubmit={this.formSubmit} />
                    </div>
                </div>
            </div>
        )
    }
}
