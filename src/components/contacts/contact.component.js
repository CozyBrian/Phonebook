import React,{useState} from "react";

export const Contact = ({contact, onDelete}) => {
  const [showInfo, setShowInfo] = useState(false);

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