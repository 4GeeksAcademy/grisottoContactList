const getState = ({ getStore, getActions, setStore }) => {
    const API_URL = "https://playground.4geeks.com/contact/agendas";
    const AGENDA_SLUG = "my_agenda";

    return {
        store: {
            contacts: [],
        },
        actions: {
            loadSomeData: async () => { 
                try {
                    const response = await fetch(`${API_URL}/${AGENDA_SLUG}/contacts`);
                    if (!response.ok) throw new Error("Failed to fetch contacts");
                    const data = await response.json();
                    setStore({ contacts: data });
                } catch (error) {
                    console.error("Error loading contacts:", error);
                }
            },
            addContact: async (contact) => {
                try {
                    await fetch(`${API_URL}/${AGENDA_SLUG}/contacts`, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(contact),
                    });
                    getActions().loadSomeData(); 
                } catch (error) {
                    console.error("Error adding contact:", error);
                }
            },
            updateContact: async (id, updatedContact) => {
                try {
                    const response = await fetch(`https://playground.4geeks.com/contact/contacts/${id}`, {
                        method: "PUT",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(updatedContact),
                    });
                    if (!response.ok) throw new Error("Failed to update contact");
                    getActions().loadSomeData(); 
                } catch (error) {
                    console.error("Error updating contact:", error);
                }
            },
            deleteContact: async (id) => {
                try {
                    await fetch(`https://playground.4geeks.com/contact/contacts/${id}`, {
                        method: "DELETE",
                    });
                    getActions().loadSomeData();
                } catch (error) {
                    console.error("Error deleting contact:", error);
                }
            }
        },
    };
};

export default getState;
