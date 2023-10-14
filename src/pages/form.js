import React, { useEffect, useState } from "react";
import "../styles/form.css";
import { useDispatch } from "react-redux";
import { allCountries } from "../redux/slices/invoice";
import {
  CountryDropdown,
  RegionDropdown,
  CityDropdown,
} from "react-country-region-selector";
import DatePicker from "react-datepicker";

const MyForm = () => {
  // const dispatch = useDispatch()
  const [selectedCountry, setSelectedCountry] = useState("India");
  const [selectedState, setSelectedState] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDueDate, setSelectedDueDate] = useState(null);
  const [selectedCity, setSelectedCity] = useState("");

  const [billingSelectedCountry, setBillingSelectedCountry] = useState("India");
  const [billingSelectedState, setBillingSelectedState] = useState("");

  const [billing, setBilling] = useState([
    {
      id: 1,
      desc: "brochure",
      qty: 2,
    },
    {
      id: 2,
      desc: "",
      qty: 1,
    },
    {
      id: 3,
      desc: "",
      qty: 1,
    }
]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleDueDateChange = (date) => {
    setSelectedDueDate(date);
  };

  // const getCountryData = (e) => {
  //     dispatch(allCountries({
  //         cb(res) {
  //             if (res) {
  //                 setCountry(res)
  //             }
  //             else {

  //             }
  //         }
  //     }))
  // }

  // console.log(country, "country");

  console.log(selectedCountry, "selected country");

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <form className="invoice-generator">
            <div className="row">
              <div className="col-7">
                <div className="row">
                  <div className="col-3">
                    <label className="add-logo">
                      <input type="file" className="input-file" />
                      <span className="add-logo-label">
                        {/* <img src={Images.uploadIcon} alt="upload-img" /> */}

                        <div>Upload</div>
                      </span>
                    </label>
                  </div>
                  <div className="col-4 logo-text">
                    <span>Upload Logo</span>
                    <p>
                      240 x 240pixels@72 DPI <br />
                      Maximum size of 1MB.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-5 left-inv-header">
                <p>TAX INVOICE</p>
              </div>
            </div>
            <div className="inv-personal-details">
              <div className="form-group" style={{ width: "50%" }}>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your Company"
                />
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                />
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Company's GSTIN"
                />
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Company's Address"
                />
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="City"
                />
                {selectedCountry === "India" ? (
                  <RegionDropdown
                    id="state"
                    className="form-control"
                    country={selectedCountry}
                    value={selectedState}
                    onChange={(val) => setSelectedState(val)}
                    placeholder="State"
                  />
                ) : (
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="State"
                  />
                )}

                <CountryDropdown
                  id="country"
                  className="form-control"
                  value={selectedCountry}
                  onChange={(val) => setSelectedCountry(val)}
                />
              </div>
            </div>

            <div className="billing-peosonal-details mt-5">
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Your Client's Company"
                    />
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Client's GSTIN"
                    />
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Client's Address"
                    />
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Company's Address"
                    />
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="City"
                    />
                    {billingSelectedCountry === "India" ? (
                      <RegionDropdown
                        id="state"
                        className="form-control"
                        country={billingSelectedCountry}
                        value={billingSelectedState}
                        onChange={(val) => setBillingSelectedState(val)}
                        placeholder="State"
                      />
                    ) : (
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="State"
                      />
                    )}

                    <CountryDropdown
                      id="country"
                      className="form-control"
                      value={billingSelectedCountry}
                      onChange={(val) => setBillingSelectedCountry(val)}
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="col-3">
                    <label className="billing-head">Invoice #</label>
                    <label className="billing-head">Invoice Date</label>
                    <label className="billing-head">Due Date</label>
                  </div>
                  <div className="col-3">
                    <div className="invoice-date">
                      <label className="billing-head">
                        Select Invoice Date:
                      </label>
                      <DatePicker
                        selected={selectedDate}
                        onChange={handleDateChange}
                        dateFormat="dd/MM/yyyy" // Customize the date format
                      />
                    </div>
                    <div className="due-date">
                      <label className="billing-head">Select Due Date:</label>
                      <DatePicker
                        selected={selectedDueDate}
                        onChange={handleDueDateChange}
                        dateFormat="dd/MM/yyyy" // Customize the date format
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="billing-details mt-5">
              <table>
                <thead>
                  <tr>
                    <th>Item Description</th>
                    <th>Qty</th>
                    <th>Rate</th>
                    <th>SGST</th>
                    <th>CGST</th>
                    <th>Cess</th>
                    <th>Amount</th>
                    
                  </tr>
                </thead>
                <tbody>
                  {billing.map((row) => (
                    <tr key={row.id}>
                      <td>{row.desc}</td>
                      <td>{row.qty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyForm;
