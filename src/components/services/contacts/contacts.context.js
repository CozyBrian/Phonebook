import React,{createContext,useState} from "react";

export const ContactContext = createContext();

const con = [
  {id: 1, name: "George Kofi", phone: "4447778989"},
  {id: 2, name: "John Doe", phone: "3334445555"},
  {id: 3, name: "Ichigo Tesla", phone: "4447778989"}
]

const ContextProvider = ({children}) => {
  const [contacts, setContacts] = useState(con);

  const onDelete = (id) => {
    const newContacts = contacts.filter(con => con.id !== id);
    setContacts(newContacts);
  }

  const onAdd = (contact) => {
    setContacts([contact, ...contacts]);
  }

  return (
    <ContactContext.Provider value={{contacts,onDelete, onAdd}} >
      {children}
    </ContactContext.Provider>
  )
}

export default ContextProvider;