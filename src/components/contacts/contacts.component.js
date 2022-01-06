import React, { useContext } from "react";
import Contact from "./contact.component";
import { ContactContext } from "../services/contacts/contacts.context";

const Contacts = () => {
  const { contacts } = useContext(ContactContext);

  return (
    <div>
      {contacts.map((contacts) => (
        <Contact key={contacts.id} contact={contacts} />
      ))}
    </div>
  );
};

export default Contacts;
