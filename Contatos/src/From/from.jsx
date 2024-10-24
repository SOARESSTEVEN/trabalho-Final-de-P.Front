import React, { useState } from 'react';
import "./form.css"

const Form = ({ addContact }) => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [empreza, setEmpreza] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newContact = { id: Date.now(), nome, email, telefone, empreza };
        addContact(newContact);
        setNome('');
        setEmail('');
        setTelefone('');
        setEmpreza('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Adicionar Contato</h2>
            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome" required />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)} placeholder="Telefone" required />
            <input type="text" value={empreza} onChange={(e) => setEmpreza(e.target.value)} placeholder="Empresa" required />
            <button type="submit">Adicionar</button>
        </form>
    );
};

export default Form;