import React, { Component } from "react";
import "../index.css";
import CreateContact from "./CreateContact";
import Button from "react-bootstrap/Button";
export default class Home extends Component {
  constructor(){
    super();
    this.state ={
      name :"",
      contact :"",
      id:null
    }

  }


  render() {
    const { users } = this.props;

    return (
      <div>
        <div className="text-area">
          <h2>Contact Lists</h2>
        </div>
        <div className="create-contact">
          <CreateContact />
        </div>
        <div className="list-container">
          <div className="main-container">
            
            {users.map((element) => (
              <div className="container">
                <span>{element.name}</span>
                <span>{element.phone}</span>
                <span>
                  <div className="menu-nav">
                    <div className="dropdown-container" tabindex="-1 ">
                      <div className="three-dots"></div>
                      <div className="dropdown">
                        <div className="dropdown-list">
                          <div className="Buttons">
                          <div className="edit-button">
                            <Button variant="primary"  onClick={() =>
            this.setState({
              id: this.user.id,
              value: { name: this.user.name , contact: this.user.contact },
            })
          } >Edit</Button>
                          </div>

                          <div>
                            <Button variant="danger">Delete</Button>
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
