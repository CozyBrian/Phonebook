import React,{useState, useContext} from "react";
import { ContactContext } from "../services/contacts/contacts.context";

export const Contact = ({contact}) => {
  const [showInfo, setShowInfo] = useState(false);
  const {onDelete} = useContext(ContactContext)

  return (
    <div className='card card-body mb-3'>
      <h4>{contact.name}
        <i onClick={() => setShowInfo(!showInfo)} className="fas fa-sort-down" style={{cursor: "pointer", paddingLeft: 6}}/>
        <i onClick={() => onDelete(contact.id)} className="fas fa-times" style={{cursor: "pointer", float: "right", color: "red"}}/>
      </h4>
      {showInfo ? (
        <ul className='list-group'>
          <li className='list-group-item'>Phone: {contact.phone}</li>
        </ul>
        )  : null
      }
    </div>
  )
}

export default Contact;