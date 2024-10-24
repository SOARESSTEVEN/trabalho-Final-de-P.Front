import React, { useState } from 'react';
import "./modal.css"

const Modal = ({ contact, onClose, onEdit }) => {
    const [nome, setNome] = useState(contact.nome);
    const [email, setEmail] = useState(contact.email);
    const [telefone, setTelefone] = useState(contact.telefone);
    const [empreza, setEmpreza] = useState(contact.empreza);

    const Submit = (e) => {
        e.preventDefault();
        onEdit({ ...contact, nome, email, telefone, empreza });
    };

    return (
        <div className="modal">
            <form onSubmit={Submit} className='form'>
                <h2>Editar Contato</h2>
                <label htmlFor="#">Nome</label>
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome" required />
                <label htmlFor="#">E-mail</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                <label htmlFor="#">Tel.</label>
                <input type="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)} placeholder="Telefone" required />
                <label htmlFor="#">Empresa</label>
                <input type="text" value={empreza} onChange={(e) => setEmpreza(e.target.value)} placeholder="Empresa" required />
                <button type="submit">Salvar</button>
                <button type="button" onClick={onClose}>Cancelar</button>
            </form>
        </div>
    );
};

export default Modal;