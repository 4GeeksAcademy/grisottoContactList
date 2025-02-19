import React from "react";

const DeleteModal = ({ show, onClose, onConfirm, contactName }) => {
    if (!show) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h3>Delete Contact</h3>
                <p>Are you sure you want to delete <strong>{contactName}</strong>?</p>
                <button onClick={onConfirm} className="btn btn-danger">Yes, Delete</button>
                <button onClick={onClose} className="btn btn-secondary">Cancel</button>
            </div>
        </div>
    );
};

export default DeleteModal;
