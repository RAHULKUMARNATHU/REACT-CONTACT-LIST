import React from "react";
import { fetchContacts } from "../actions/contacts";
import { connect } from 'react-redux';
import Home from "./Home";

import '../index.css'

class App extends React.Component{

    componentDidMount(){
        this.props.dispatch(fetchContacts());

    }
   
    render(){
    
       const{users}=this.props;
        return(
            <div>   
               <Home users = {users}/> 
             
            </div>
        )
    }



}





function mapStateToProps(state){
    return{
        users : state.contacts
    }
}


export default connect(mapStateToProps)(App);




