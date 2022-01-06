import Header from "./components/layout/header.component";
import Contacts from "./components/contacts/contacts.component";
import AddContact from "./components/contacts/add-contacts.component";
import EditContact from "./components/contacts/edit-contacts.component";
import NotFound from "./components/pages/NotFound";
import ContextProvider from "./components/services/contacts/contacts.context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <ContextProvider>
      <Router>
        <div className="App">
          <Header branding="Phone Book" />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Contacts />} />
              <Route exact path="/contacts/add" element={<AddContact />} />
              <Route
                exact
                path="/contacts/edit/:id"
                element={<EditContact />}
              />
              <Route element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ContextProvider>
  );
}

export default App;
