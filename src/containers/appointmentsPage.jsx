import React, {useState} from 'react';
import AppointmentForm from '../components/appointmentForm';
import TileList from '../components/tileList';

function AppointmentsPage({contacts, appointments, addAppointments}){

    const [name, setName] = useState("");
    const [contact, setContact] = useState();
    const [date, setDate] = useState(""); 
    const [time, setTime] = useState("");

    function handleSubmit(e){
        e.preventDefault()

        const newAppointment = {
            name: name,
            contact: contact,
            date: date,
            time: time
        }

        addAppointments(newAppointment);

        setName("");
        setContact({});
        setDate("");
        setTime("");
    }

    return(
        <div>
            <h2>Add Appointment</h2>
            <AppointmentForm name={name} setName={setName} contacts={contacts} contact={contact} setContact={setContact} 
            date={date} setDate={setDate} time={time} setTime={setTime} handleSubmit={handleSubmit} />
            <h2>Appointments: </h2>
            <TileList list={appointments} />
        </div>
    )
}

export default AppointmentsPage;