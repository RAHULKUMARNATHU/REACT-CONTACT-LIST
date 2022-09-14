import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";

class CreateContact extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       content: '',
  //     };
  //   }
  //   handleOnClick =()=>{
  //     //   dispatch an action
  //     this.props.dispatch(createPost(this.state.content))
  //   }
  //   handleChange = (e) =>{
  //       this.setState({
  //           content : e.target.value,

  //       })
  //   }

   
  render() {
    return (
      <div className="contact-dropdown-container" tabindex="-1 " >
        <div className="add-user">
          <img
            src="https://cdn-icons-png.flaticon.com/512/747/747968.png"
            alt="add-contact"
          />
          <div className="dropdown-contact">
            <div className="dropdown-list-contact">
              <div className="name-box">
                <label>Name</label>
                <input type="text" placeholder="Name" />
              </div>
              <div className="contact-box">
                <label>Contact</label>
                <input type="text" placeholder="Contact" onChange={1} />
              </div>
              <div className="add-btn">
                <Button id="add-post-btn" variant="success" onClick={this.handleOnClick}>
                  Add Contact
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(CreateContact);
