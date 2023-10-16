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
import ForgetPasswordVerification from "./pages/auth/forgotPasswordVerification";
import ResetPassword from "./pages/auth/resetPassword";
import Changepassword from "./pages/user/changePassword";
import UserInfo from "./pages/user";
import ViewInvoice from "./pages/viewInvoice";
import EditInvoice from "./pages/editInvoice";
import Listing from "./pages/listing";


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<InvoiceForm />} />
              <Route path="/forgot-password" element={<ForgetPassword />} />
              <Route path="/forgot-password-verification" element={<ForgetPasswordVerification />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path="/change-password" element={<Changepassword />} />
              <Route path="/user-info" element={<UserInfo />} />
              <Route path="/view-invoice" element={<ViewInvoice />} />
              <Route path="/edit-invoice" element={<EditInvoice />} />
              <Route path="/all-documents" element={<Listing />} />
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
      <ToastContainer />
    </div>
  );
}

export default App;
