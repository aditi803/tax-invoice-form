import logo from './logo.svg';
import './App.css';
import 'react-datepicker/dist/react-datepicker.css'; // Import the styles
import InvoiceForm from './pages/form';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux'
import store from './redux';
import { persistor } from './redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from "react-router-dom";
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
            {/* <Router /> */}
            <Header />
            <InvoiceForm />
          </BrowserRouter>
      </PersistGate>
      </Provider>
      <ToastContainer
      />
    </div>
  );
}

export default App;
