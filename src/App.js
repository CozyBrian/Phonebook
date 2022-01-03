import Header from './components/layout/header.component';
import Contacts from './components/contacts/contacts.component'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header branding="Phone Book"/>
      <div className="container">
        <Contacts />
      </div>
    </div>
  );
}

export default App;
