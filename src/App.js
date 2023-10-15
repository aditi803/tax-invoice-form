import logo from "./logo.svg";
import "./App.css";
import "react-datepicker/dist/react-datepicker.css"; // Import the styles
import InvoiceForm from "./pages/form";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "./redux";
import { persistor } from "./redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Signup from "./pages/auth/signup";
import Login from "./pages/auth/login";
import ForgetPassword from "./pages/auth/forgotPassword";


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Header />
            <Routes>
              {/* <Router /> */}
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<InvoiceForm />} />
              <Route path="/forgot-password" element={<ForgetPassword />} />
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
      <ToastContainer />
    </div>
  );
}

export default App;
