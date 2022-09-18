import "../index.css";
import CreateContact from "./CreateContact";
import { connect } from "react-redux";
import { editedContact, removeContact } from "../actions/contacts";
import { useState } from "react";
import { Button } from "react-bootstrap";

function Home(props) {
  const [edit, setEdit] = useState({ editId: null, name: "", phone: "" });

  const { users } = props;
  const { editId } = edit;

  const handleEdit = (contact) => {
    console.log("Edit Contact");
    props.dispatch(editedContact(contact));
    setEdit({ editId: null, name: "", phone: "" });
  };
  const handleDelete = (contact) => {
    props.dispatch(removeContact(contact));
  };

  const handleNameChange = (e) =>
    setEdit((prev) => ({ ...prev, name: e.target.value }));

  const handlePhoneChange = (e) =>
    setEdit((prev) => ({ ...prev, phone: e.target.value }));


  return (
    <>
      <div className="text-area">
        <h2>Contact Lists</h2>
      </div>
      <div className="create-contact">
        <CreateContact />
      </div>
      <div className="list-container">
        <div className="main-container">
          {users.map((element) => 
          
          editId === element.id ? (
            <div className="container" key={element.id}>
              <input
                type="text"
                name="name"
                value={edit.name}
                onChange={handleNameChange}
              />
              <input
                type="text"
                name="phone"
                value={edit.phone}
                onChange={handlePhoneChange}
              />
              <Button
                variant="primary"
                onClick={() =>
                  handleEdit({
                    id: element.id,
                    name: edit.name,
                    phone: edit.phone,
                  })
                }
              >
                Save Contact
              </Button>
            </div>
          ) :
          
          
          
          
          (
            <div className="container" key ={element.id}>
              <span>{element.name}</span>
              <span>{element.phone}</span>
              
              <div >
              <span style={{paddingRight:"15px"}}>
             
                <img
                 onClick={() =>
                  setEdit({
                    editId: element.id,
                    name: element.name,
                    phone: element.phone,
                  })
                }
                  src="https://cdn-icons-png.flaticon.com/512/1160/1160758.png"
                  alt="edit"
                  style={{ maxWidth: "30px", cursor: "pointer" }}
                />
               
             </span>
             <span>
                <img
                  onClick={() => handleDelete(element)}
                  src="https://cdn-icons-png.flaticon.com/512/3177/3177433.png"
                  alt="delete"
                  style={{ maxWidth: "30px", cursor: "pointer" }}
                />
                
              </span>
              </div>
             
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default connect()(Home);
