import React, { useState } from 'react';
import Modal from '../Modal/modal';
import "./item.css"


const Item = ({ contact, editContact, deleteContact }) => {
    const [isModalOpen, setModalOpen] = useState(false);


    const Edite = (updatedContact) => {
        editContact(contact.id, updatedContact);
        setModalOpen(false);
    };
   
    return (
        
        <li className='listaContatos'>
            <span>{contact.name}</span>
            <button onClick={() => setModalOpen(true)}>Ver</button>
            <button onClick={() => deleteContact(contact.id)}>Deletar</button>
            {isModalOpen && (
                <Modal
                    contact={contact} 
                    onClose={() => setModalOpen(false)} 
                    onEdit={Edite} 
                />
            )}
            
        </li>
        
    );
}
export default Item;
