import React, { useState } from 'react';
import "./form.css"

const Form = ({ addContact }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [company, setCompany] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newContact = { id: Date.now(), name, email, phone, company };
        addContact(newContact);
        setName('');
        setEmail('');
        setPhone('');
        setCompany('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Adicionar Contato</h2>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome" required />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Telefone" required />
            <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Empresa" required />
            <button type="submit">Adicionar</button>
        </form>
    );
};

export default Form;