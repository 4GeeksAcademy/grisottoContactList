import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/ContextProvider";
import ContactCard from "../components/ContactCard";
import DeleteModal from "../components/DeleteModal";

export const Contact = () => {
    const { store, actions } = useContext(Context);
    const [selectedContact, setSelectedContact] = useState(null);

    useEffect(() => {
        actions.loadSomeData();
    }, []);

    return (
        <div>
            <h1>Contact List</h1>
            {store.contacts.length === 0 ? (
                <p>No contacts available</p>
            ) : (
                store.contacts.map(contact => (
                    <ContactCard 
                        key={contact.id} 
                        contact={contact} 
                        onDelete={() => setSelectedContact(contact)} 
                    />
                ))
            )}

            {/* Delete Confirmation Modal */}
            <DeleteModal
                show={!!selectedContact}
                contactName={selectedContact?.full_name}
                onClose={() => setSelectedContact(null)}
                onConfirm={() => {
                    actions.deleteContact(selectedContact.id);
                    setSelectedContact(null);
                }}
            />
        </div>
    );
};
