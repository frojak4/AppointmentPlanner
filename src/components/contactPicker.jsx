import React, {useEffect} from 'react';

function ContactPicker(props){
    return(
        <select name={props.name} value={props.value} onChange={props.onChange}>
            <option default value="">No Contact Selected</option>
            {props.contacts.map((contact, index) => 
            <option value={contact.name}>{contact.name}</option>)}
        </select>
    )
}

export default ContactPicker;