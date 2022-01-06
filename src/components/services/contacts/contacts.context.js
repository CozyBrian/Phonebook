import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ContactContext = createContext();

const ContextProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);

  const GetContacts = () => {
    axios
      .get("http://jsonplaceholder.typicode.com/users")
      .then((res) => setContacts(res.data));
  };

  const onDelete = (id) => {
    axios
      .delete(`http://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        const newContacts = contacts.filter((con) => con.id !== id);
        setContacts(newContacts);
      });
  };

  const onAdd = (contact) => {
    axios
      .post("http://jsonplaceholder.typicode.com/users", contact)
      .then((res) => {
        setContacts([res.data, ...contacts]);
      });
  };

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
