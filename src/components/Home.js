import "../index.css";
import CreateContact from "./CreateContact";
import { connect } from "react-redux";
import { removeContact } from "../actions/contacts";

function Home(props) {
  const { users } = props;

  const handleDelete = (contact) => {
    props.dispatch(removeContact(contact));
  };

  const handleEdit = () => {};
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
          {users.map((element) => (
            <div className="container">
              <span>{element.name}</span>
              <span>{element.phone}</span>
              <span>
                <img
                  onclick={handleEdit}
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
          ))}
        </div>
      </div>
    </>
  );
}

export default connect()(Home);
