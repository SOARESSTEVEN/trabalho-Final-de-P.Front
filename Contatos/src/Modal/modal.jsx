import React, { useState } from 'react';
import "./modal.css"

const Modal = ({ contact, onClose, onEdit }) => {
    const [name, setName] = useState(contact.name);
    const [email, setEmail] = useState(contact.email);
    const [phone, setPhone] = useState(contact.phone);
    const [company, setCompany] = useState(contact.company);

    const Submit = (e) => {
        e.preventDefault();
        onEdit({ ...contact, name, email, phone, company });
    };

    return (
        <div className="modal">
            <form onSubmit={Submit} className='form'>
                <h2>Editar Contato</h2>
                <label htmlFor="#">Nome</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome" required />
                <label htmlFor="#">E-mail</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                <label htmlFor="#">Tel.</label>
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Telefone" required />
                <label htmlFor="#">Empresa</label>
                <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Empresa" required />
                <button type="submit">Salvar</button>
                <button type="button" onClick={onClose}>Cancelar</button>
            </form>
        </div>
    );
};

export default Modal;