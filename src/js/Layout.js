import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Contact } from "../views/Contact";
import { AddContact } from "../views/AddContact";

const Layout = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Contact />} />
                <Route path="/add" element={<AddContact />} />
                <Route path="/edit/:id" element={<AddContact />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Layout;

