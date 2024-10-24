import React, { useState, useEffect } from 'react';
import Form from './From/from';
import List from './lista/lista';
import "./App.css"

const App = () => {
    const [contacts, setContacts] = useState([]);


    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

    const addContact = (contact) => {
        setContacts([...contacts, contact]);
    };

    const editContact = (id, updatedContact) => {
        setContacts(contacts.map(contact => (contact.id === id ? updatedContact : contact)));
    };

    const deleteContact = (id) => {
        setContacts(contacts.filter(contact => contact.id !== id));
    };

    return (
        <div>
            <h1>Gerenciamento de Contatos</h1>
            <Form addContact={addContact} />
            {contacts.length === 0 ? (
                <p>Sem contatos.</p>
            ) : (
                <List contacts={contacts} editContact={editContact} deleteContact={deleteContact} />
            )}
        </div>
    );
};

export default App
