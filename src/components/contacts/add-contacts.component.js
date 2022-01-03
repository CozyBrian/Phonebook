import React,{useState, useContext} from "react";
import {v4 as uuidv4} from "uuid";
import { ContactContext } from "../services/contacts/contacts.context";

const AddContact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const {onAdd} = useContext(ContactContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const contact = {
      id: uuidv4(),
      name: name,
      phone: phone
    }
    console.log(contact);
    onAdd(contact);

    setName(""); setPhone("");
  }

  return (
    <div className="card mb-3">
      <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-control form-control-lg"
                placeholder="Enter Name..."
                value={name}
                onChange={(name) => setName(name.target.value)}
                />
            </div>
            <div className="form-group">
              <label htmlFor="name">Phone</label>
              <input
                type="text"
                name="phone"
                className="form-control form-control-lg"
                placeholder="Enter Phone..."
                value={phone}
                onChange={(phone) => setPhone(phone.target.value)}
                />
            </div>
            <input
              type="submit"
              value="Add Contact"
              className="btn btn-light btn block"
              style={{float: "right", marginTop: 16}}
            />
          </form>
        </div>
    </div>
  )
}

export default AddContact;