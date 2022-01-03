import Header from './components/layout/header.component';
import Contacts from './components/contacts/contacts.component';
import AddContact from './components/contacts/add-contacts.component';
import ContextProvider from './components/services/contacts/contacts.context';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Header branding="Phone Book"/>
        <div className="container">
          <AddContact />
          <Contacts />
        </div>
      </div>
    </ContextProvider>
  );
}

export default App;
