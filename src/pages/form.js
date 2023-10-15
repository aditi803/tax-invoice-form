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
  const [notes, setNotes] = useState("Notes");
  const [notesDesc, setNotesDesc] = useState(
    "It was great doing business with you."
  );
  const [condition, setCondition] = useState("Terms & Conditions");
  const [conditionDesc, setConditionDesc] = useState(
    "Please make the payment by the due date."
  );

  const [billingSelectedCountry, setBillingSelectedCountry] = useState("India");
  const [billingSelectedState, setBillingSelectedState] = useState("");

  const [billing, setBilling] = useState([
    {
      id: 1,
      desc: "brochure",
      subDesc: "",
      qty: 2,
      rate: "100.00",
      sgst: "6",
      cgst: "6",
      cess: "0",
    },
    {
      id: 2,
      desc: "",
      subDesc: "",
      qty: 1,
      rate: "0.00",
      sgst: "0",
      cgst: "0",
      cess: "0",
    },
    {
      id: 3,
      desc: "",
      subDesc: "",
      qty: 1,
      rate: "0.00",
      sgst: "0",
      cgst: "0",
      cess: "0",
    },
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

  const addBillingDetail = () => {
    setBilling([
      ...billing,
      {
        desc: "",
        subDesc: "",
        qty: 1,
        rate: "0.00",
        sgst: "0",
        cgst: "0",
        cess: "0",
      },
    ]);
  };

  const removeBillingItem = (index) => {
    const updatedBilling = [...billing];
    updatedBilling.splice(index, 1);
    setBilling(updatedBilling);
  };

  const handleInputChange = (index, field, value) => {
    const updatedBilling = [...billing];
    updatedBilling[index][field] = value;
    setBilling(updatedBilling);
  };

  console.log(billing, "billing ");

  return (
    <div className="container invoice-form">
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
              <table className="table">
                <thead className="table-dark">
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
                  {billing.map((row, index) => (
                    <>
                      <tr key={row.id}>
                        <td>
                          {" "}
                          <textarea
                            placeholder="Enter description "
                            value={row.desc}
                            className="form-control"
                            onChange={(e) =>
                              handleInputChange(index, "desc", e.target.value)
                            }
                          />
                          <br />
                          <input
                            type="text"
                            value={row.subDesc}
                            placeholder="HSN/SAC"
                            className="form-control"
                            onChange={(e) =>
                              handleInputChange(
                                index,
                                "subDesc",
                                e.target.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={row.qty}
                            className="form-control"
                            onChange={(e) =>
                              handleInputChange(index, "qty", e.target.value)
                            }
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={row.rate}
                            className="form-control"
                            onChange={(e) =>
                              handleInputChange(index, "rate", e.target.value)
                            }
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={row.sgst}
                            className="form-control"
                            onChange={(e) =>
                              handleInputChange(index, "sgst", e.target.value)
                            }
                          />
                          <br />
                          <p>{row.qty * row.sgst}.00</p>
                        </td>
                        <td>
                          <input
                            type="number"
                            value={row.cgst}
                            className="form-control"
                            onChange={(e) =>
                              handleInputChange(index, "cgst", e.target.value)
                            }
                          />
                          <br />
                          <p>{row.qty * row.cgst}.00</p>
                        </td>
                        <td>
                          <input
                            type="number"
                            value={row.cess}
                            className="form-control"
                            onChange={(e) =>
                              handleInputChange(index, "cess", e.target.value)
                            }
                          />
                          <br />
                          <p>{row.qty * row.cess}.00</p>
                        </td>
                        <td>
                          <p>{row.qty * row.rate}.00</p>
                          {billing.length > 0 ? (
                            <button
                              className="btn"
                              onClick={() => removeBillingItem(index)}
                            >
                              Remove
                            </button>
                          ) : (
                            ""
                          )}
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
              <p className="form-footer" onClick={addBillingDetail}>
                Add Line Item
              </p>
              <p className="form-footer">Total</p>
            </div>
            <div className="Form-footer">
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => {
                    setNotes(e.target.value);
                  }}
                  className="form-control"
                />
              <textarea
                value={notesDesc}
                onChange={(e) => setNotesDesc(e.target.value)}
                className="form-control"
              />
              
                <input
                  type="text"
                  value={condition}
                  onChange={(e) => {
                    setCondition(e.target.value);
                  }}
                  className="form-control"
                />
             
              <textarea
                value={conditionDesc}
                onChange={(e) => setConditionDesc(e.target.value)}
                className="form-control"
              />
            </div>

           
          </form>
        </div>
        <div className="col-md-2">
        </div>
      </div>
    </div>
  );
};

export default MyForm;
