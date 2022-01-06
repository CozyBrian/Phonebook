import React, { useState, useContext } from "react";
import classnames from "classnames";
import { useNavigate } from "react-router-dom";
import { ContactContext } from "../services/contacts/contacts.context";

const AddContact = ({ history }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState({});

  const { onAdd } = useContext(ContactContext);

  let navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    if (name === "") {
      setError({ name: "Name is Required!" });
      return;
    }

    if (phone === "") {
      setError({ phone: "Phone is required" });
      return;
    }

    const contact = {
      name: name,
      phone: phone,
    };
    onAdd(contact);

    setName("");
    setPhone("");
    setError({});
    navigate("/");
  };

  return (
    <div className="card mb-3">
      <div className="card-header">Add Contact</div>
      <div className="card-body">
        <form onSubmit={(e) => onSubmit(e)} className="needs-validation">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className={classnames("form-control form-control-lg", {
                "is-invalid": error.name,
              })}
              placeholder="Enter Name..."
              value={name}
              onChange={(name) => setName(name.target.value)}
            />
            <div className="invalid-feedback">Name is required</div>
          </div>
          <div className="form-group">
            <label htmlFor="name">Phone</label>
            <input
              type="text"
              name="phone"
              className={classnames("form-control form-control-lg", {
                "is-invalid": error.phone,
              })}
              placeholder="Enter Phone..."
              value={phone}
              onChange={(phone) => setPhone(phone.target.value)}
            />
            <div className="invalid-feedback">Phone is required</div>
          </div>
          <input
            type="submit"
            value="Add Contact"
            className="btn btn-light btn block"
            style={{ float: "right", marginTop: 16 }}
          />
        </form>
      </div>
    </div>
  );
};

export default AddContact;
