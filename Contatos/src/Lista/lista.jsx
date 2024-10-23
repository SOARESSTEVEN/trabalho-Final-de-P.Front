import React from 'react';
import Item from '../ItemContact/Item';


const List = ({ contacts, editContact, deleteContact }) => {
    return (
        <ul>
            {contacts.map(contact => (
                <Item
                    key={contact.id} 
                    contact={contact} 
                    editContact={editContact} 
                    deleteContact={deleteContact} 
                />
            ))}
        </ul>
    );
};

export default List;