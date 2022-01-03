import React from 'react'
import Contact from './contact.component'

const con = [
  {name: "George Kofi", phone: "4447778989"},
  {name: "John Doe", phone: "3334445555"},
  {name: "Ichigo Tesla", phone: "4447778989"}]

const Contacts = () => {
  return (
    <div>
      {con.map(con => (<Contact name={con.name} phone={con.phone}/>))}
    </div>
  )
}

export default Contacts;
