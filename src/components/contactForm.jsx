import React, {useState} from 'react';

function ContactForm(props){
    return(
        <form className="form" onSubmit={props.handleSubmit}>
            <input value={props.name} onChange={(e) => props.setName(e.target.value)} type="text" placeholder="Name" />
            <input value={props.phone} onChange={(e) => props.setPhone(e.target.value)} pattern="[0-9]{8}" placeholder="Phone"/>
            <input value={props.email} onChange={(e) => props.setEmail(e.target.value)} type="text" placeholder="Email"/>
            <button type="submit">Submit Contact</button>
        </form>
    )
}

export default ContactForm;