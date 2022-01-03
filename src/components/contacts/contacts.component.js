import React,{useState} from 'react'
import Contact from './contact.component'

const con = [
  {id: 1, name: "George Kofi", phone: "4447778989"},
  {id: 2, name: "John Doe", phone: "3334445555"},
  {id: 3, name: "Ichigo Tesla", phone: "4447778989"}]

  
const Contacts = () => {
  const [contacts, setContacts] = useState(con);
  
  const onDelete = (id) => {
    const newContacts = contacts.filter(con => con.id !== id);
    setContacts(newContacts);
  }

  return (
    <div>
      {contacts.map(contacts => (<Contact contact={contacts} onDelete={onDelete}/>))}
    </div>
  )
}

export default Contacts;
