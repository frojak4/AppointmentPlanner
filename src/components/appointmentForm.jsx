import React, {useState} from 'react';
import ContactPicker from './contactPicker';

function AppointmentForm(props){

    

    return(
        <form onSubmit={props.handleSubmit}>
            <input type="text" placeholder="Name" 
            value={props.name} onChange={(e) => props.setName(e.target.value)} />
            <input type="date" placeholder='Date' value={props.date} 
            onChange={(e) => props.setDate(e.target.value)}/>
            <input type="time" placeholder="Time" value={props.time}
            onChange={(e) => props.setTime(e.target.value)} />
            <ContactPicker contacts={props.contacts} value={props.contact} name="name" 
            onChange={(e) => props.setContact(e.target.value)} />
            <button type="submit">Submit</button>
            
        </form>
    )
}

export default AppointmentForm;