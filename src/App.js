import React, {useState} from 'react';
import './App.css';
import ContactsPage from './containers/contactsPage';
import AppointmentsPage from './containers/appointmentsPage';

function App() {

const [contacts, setContacts] = useState([]);
const [appointments, setAppointments] = useState([]);

function addContact(newContact){
  setContacts(c => [...c, newContact])
}

function addAppointments(newAppointment){
  setAppointments(a => [...a, newAppointment]);
}

  return (
    <div>
      <ContactsPage contacts={contacts} addContact={addContact}/>
      <AppointmentsPage contacts={contacts} appointments={appointments} addAppointments={addAppointments} />
    </div>
  );
}

export default App;
