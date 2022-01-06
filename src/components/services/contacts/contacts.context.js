import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ContactContext = createContext();

const ContextProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);

  //Getting Contacts from our backend...but in this case it's a placeholder backend
  const GetContacts = () => {
    axios
      .get("http://jsonplaceholder.typicode.com/users")
      .then((res) => setContacts(res.data));
  };

  //Sending Delete Requests
  const onDelete = (id) => {
    axios
      .delete(`http://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        const newContacts = contacts.filter((con) => con.id !== id);
        setContacts(newContacts);
      });
  };

  //sending Post/Add Requests
  const onAdd = (contact) => {
    axios
      .post("http://jsonplaceholder.typicode.com/users", contact)
      .then((res) => {
        setContacts([res.data, ...contacts]);
      });
  };

  //sending Update Request
  const onUpdate = (id, contact) => {
    axios
      .put(`http://jsonplaceholder.typicode.com/users/${id}`, contact)
      .then(({ data }) => {
        const Contacts = contacts.map((contact) =>
          contact.id === data.id ? (contact = data) : contact
        );
        console.log(data);
        console.log(contacts);
        setContacts(Contacts);
      });
  };

  useEffect(() => {
    GetContacts();
  }, []);

  return (
    <ContactContext.Provider value={{ contacts, onDelete, onAdd, onUpdate }}>
      {children}
    </ContactContext.Provider>
  );
};

export default ContextProvider;
