import React, { useCallback, useEffect, useState } from "react";
import "../styles/form.css";
import { useDispatch } from "react-redux";
import {
  CountryDropdown,
  RegionDropdown,
} from "react-country-region-selector";
import DatePicker from "react-datepicker";
import ReactDOMServer from 'react-dom/server';
import { useDropzone } from 'react-dropzone';
// import * as Images from "../../utilities/images";
// import * as Images from '../utilities/images'
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import Template from "../components/Template";
import Listing from "./listing";
import { uploadImage } from "../redux/slices/auth";
import { addInvoice, invoiceData } from "../redux/slices/invoice";
import { useNavigate } from "react-router";

const MyForm = () => {
  const [showListing, setshowListing] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [data, setData] = useState({
    company: "",
    name: "",
    companyGST: "",
    companyAddress: "",
    city: "",
    region: "",
    country: "",
    clientCompany: "",
    clientGST: "",
    clientAddress: "",
    clientCompanyAddress: "",
    clientCity: "",
    clientRegion: "",
    clientCountry: "",
    invoiceDate: "",
    dueDate: "",
    ques1: "Notes",
    ans1: "It was great doing business with you.",
    ques2: "Terms & Conditions",
    ans2: "Please make the payment by the due date.",
    image: ""
  });

  const handleDataChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({
      ...data,
      [name]: value,
    });
  };

  console.log(data, ">>>>> data");

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
    setData({
      ...data,
      invoiceDate: date,
    });
  };

  const handleDueDateChange = (date) => {
    setSelectedDueDate(date);
    setData({
      ...data,
      dueDate: date,
    });
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

  //onDrop
  const onDrop = useCallback(acceptedFiles => {
    const imageFile = acceptedFiles[0];
    // if (!imageFile.name.match(/\.(jpg|jpeg|png|gif|svg)$/)) {
    //     toast.error("Please select a valid image.");
    //     return false;
    // }
    // if (!imageFile.name.match(/\.(jpg|jpeg|png|gif|svg|pdf)$/i)) {
    //     toast.error("Please select a valid image or PDF file.");
    //     return false;
    // }

    console.log(imageFile, 'image file');
    let params = {
      photo: imageFile,
    }

    dispatch(uploadImage({
      ...params, cb(res) {
        if (res.status) {
          console.log(res, "response of images");
          // setPhotoUpload(res?.data?.payload?.url);
          // setPhotoInfo(res?.data?.payload)
          setData({
            ...data,
            image: res?.data?.data?.imageurl
          })
        }
        else {
          console.log("Error in dispatch");
        }
      }
    }))

  }, [])

  const { getRootProps, getInputProps } =

    useDropzone({
      onDrop,
      accept: {
        'image/jpeg': [],
        'image/jpg': [],
        'image/png': [],
      }
    });

  const downloadPdfDocument = (e) => {
    e.preventDefault()
    console.log(typeof document.getElementById('hhh'))
    const div = document.createElement('div');
    const staticElement = ReactDOMServer.renderToStaticMarkup(<Template data={data} />)
    div.innerHTML = staticElement
    console.log(div)
    document.body.appendChild(div);
    html2canvas(div).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      pdf.save('Invoice.pdf')
    });
    document.body.removeChild(div)
  };

  console.log(data.image, "image uploaded received");

  const savePdfDocument = (e) => {
    e.preventDefault()
    let params = {
      data: data,
    }
    console.log(params, "params ");
    console.log("Hello function");
    dispatch(addInvoice({
      ...params, cb(res) {
        if (res.status) {
          console.log(res, "response of images");
          // setPhotoUpload(res?.data?.payload?.url);
          // setPhotoInfo(res?.data?.payload)
          setData()
        }
        else {
          console.log("Error in dispatch");
        }
      }
    }))
  };
  const handleDocuments = () => {
    // setshowListing(true)
    navigate("/all-documents")
  }

  return (
    <div className="container" id="hhh">

      <div className="row">
        <div className="col-md-2">
          <p onClick={() => handleDocuments()}>Saved Documents</p>
        </div>
        <div className="col-md-8">
          <form className="invoice-generator">
            <div className="row">
              <div className="col-7">
                <div className="row">
                  <div className="col-3">
                    <label className="add-logo">
                      <div {...getRootProps({ className: "dropzone" })}>
                        <input {...getInputProps()} />
                        <span className="add-logo-label">
                          <div>Upload</div>
                        </span>
                      </div>

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
                  name="company"
                  onChange={handleDataChange}
                  placeholder="Your Company"
                />
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  onChange={handleDataChange}
                  placeholder="Your Name"
                />
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  onChange={handleDataChange}
                  name="companyGST"
                  placeholder="Company's GSTIN"
                />
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  onChange={handleDataChange}
                  name="companyAddress"
                  placeholder="Company's Address"
                />
                <input
                  type="text"
                  name="city"
                  onChange={handleDataChange}
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
                      onChange={handleDataChange}
                      id="name"
                      name="clientCompany"
                      placeholder="Your Client's Company"
                    />
                    <input
                      type="text"
                      className="form-control"
                      onChange={handleDataChange}
                      name="clientGST"
                      id="name"
                      placeholder="Client's GSTIN"
                    />
                    <input
                      type="text"
                      onChange={handleDataChange}
                      className="form-control"
                      name="clientAddress"
                      id="name"
                      placeholder="Client's Address"
                    />
                    <input
                      type="text"
                      onChange={handleDataChange}
                      className="form-control"
                      name="clientCompanyAddress"
                      id="name"
                      placeholder="Company's Address"
                    />
                    <input
                      type="text"
                      onChange={handleDataChange}
                      name="clientCity"
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
              <button onClick={savePdfDocument}>
                Save
              </button>
              <button onClick={downloadPdfDocument}>
                Download
              </button>
              <p className="form-footer">
                Total :{" "}
                {billing.reduce(
                  (total, { qty, rate }) => total + qty * rate * 1,
                  0
                )}{" "}
              </p>
            </div>
            <div className="Form-footer">
              <input
                type="text"
                // value={notes}
                name="ques1"
                value={data.ques1}
                onChange={handleDataChange}
                // onChange={(e) => {
                //   setNotes(e.target.value);
                // }}
                className="form-control"
              />
              <textarea
                name="ans1"
                value={data.ans1}
                onChange={handleDataChange}
                // value={notesDesc}
                // onChange={(e) => setNotesDesc(e.target.value)}
                className="form-control"
              />

              <input
                type="text"
                name="ques2"
                value={data.ques2}
                onChange={handleDataChange}
                // value={condition}
                // onChange={(e) => {
                //   setCondition(e.target.value);
                // }}
                className="form-control"
              />

              <textarea
                name="ans2"
                onChange={handleDataChange}
                value={data.ans2}
                // value={conditionDesc}
                // onChange={(e) => setConditionDesc(e.target.value)}
                className="form-control"
              />
            </div>
          </form>
        </div>
        <div className="col-md-2"></div>
      </div>

    </div>
  );
};

export default MyForm;
