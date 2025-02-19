import React from "react";
import { Link } from "react-router-dom";

const ContactCard = ({ contact, onDelete }) => {
    return (
        <div className="contact-card">
            <h3>{contact.name}</h3>
            <p>Email: {contact.email}</p>
            <p>Phone: {contact.phone}</p>
            <p>Address: {contact.address}</p>
            <div>
                <Link to={`/edit/${contact.id}`} className="btn btn-primary">Edit</Link>
                <button className="btn btn-danger" onClick={onDelete}>Delete</button>
            </div>
        </div>
    );
};

export default ContactCard;
