import React, {useState} from 'react';
import ContactForm from '../components/contactForm';
import TileList from '../components/tileList';

function ContactsPage({contacts, addContact}){


    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        const newContact = {
            name: name,
            phone: phone,
            email: email
        }
        addContact(newContact);
        setName("");
        setPhone("");
        setEmail("");
    }

    return(
        <div>
            <h2>Add Contact</h2>
            <ContactForm name={name} setName={setName} phone={phone} setPhone={setPhone} email={email} setEmail={setEmail} 
            handleSubmit={handleSubmit}/>
            <h2>Contacts:</h2>
            <TileList list={contacts}/>
        </div>
    )
}

export default ContactsPage;