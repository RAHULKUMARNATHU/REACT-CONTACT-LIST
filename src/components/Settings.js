import React, { useState } from 'react'

 function Settings({
    edit ,

 }) {
    const [name, setName] = useState(edit ? edit.value.name : "");
  const [contact, setContact] = useState(edit ? edit.value.contact : "");
 
  return (
    <div><ul className="list-group mb-4">
    {edit ? (
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Contact</th>
           
          </tr>
          <tr>
            <td></td>
            <td>
              <input
                placeholder="Update user name"
                value={name}
                onChange={handleNameChange}
                name="name"
                className="user-input edit"
              />
            </td>
            <td>
              <input
                placeholder="Update user email"
                value={contact}
                onChange={handleContactChange}
                name="contact"
                className="user-input edit"
              />
            </td>
           
            <td>
              <button onClick={handleSubmit} className="user-button edit">
                Update User
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    ) : (
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Contact</th>
          </tr>
          <User
            users={users}
            onSelectdelete={onSelectdelete}
            updateUser={updateUser}
          />
         
        </tbody>
      </table>
    )}
  </ul></div>
  )
}

export default Settings