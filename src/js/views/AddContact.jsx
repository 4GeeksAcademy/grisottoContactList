import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/ContextProvider";
import { useNavigate, useParams } from "react-router-dom";

export const AddContact = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const { id } = useParams();
    const [contact, setContact] = useState({ full_name: "", email: "" });

    useEffect(() => {
        if (id) {
            const existingContact = store.contacts.find(c => c.id == id);
            if (existingContact) {
                setContact(existingContact);
            }
        }
    }, [id, store.contacts]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id) {
            actions.updateContact(id, contact);
        } else {
            actions.addContact(contact);
        }
        navigate("/");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={contact.full_name} 
                onChange={e => setContact({...contact, full_name: e.target.value})} />
            <input type="email" placeholder="Email" value={contact.email} 
                onChange={e => setContact({...contact, email: e.target.value})} />
            <button type="submit">{id ? "Update Contact" : "Add Contact"}</button>
        </form>
    );
};
