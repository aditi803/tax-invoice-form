import React, { useEffect, useState } from 'react'
import "../styles/form.css"
import { useDispatch } from 'react-redux'
import { allCountries } from '../redux/slices/invoice'

const MyForm = () => {

    const dispatch = useDispatch()
    const [country, setCountry] = useState("")

    const getCountryData = (e) => {
        dispatch(allCountries({
            cb(res) {
                if (res) {
                    setCountry(res)
                }
                else {

                }
            }
        }))
    }

    useEffect(() => {
        getCountryData()
    },[])

    console.log(country, "country");

    return (
        <div className="container">
            <div className='row'>
                <div className='col-md-8'>
                    <form className='invoice-generator'>
                        <div className='row'>
                            <div className='col-7'>
                                <div className='row'>
                                    <div className='col-3'>
                                        <label className='add-logo'>
                                            <input type='file' className='input-file' />
                                            <span className='add-logo-label'>
                                                {/* <img src={Images.uploadIcon} alt="upload-img" /> */}

                                                <div>Upload</div>
                                            </span>
                                        </label>
                                    </div>
                                    <div className='col-4 logo-text'>
                                        <span>
                                            Upload Logo
                                        </span>
                                        <p>240 x 240pixels@72 DPI <br />Maximum size of 1MB.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-5 left-inv-header' >
                                <p>TAX INVOICE</p>
                            </div>
                        </div>
                        <div className='inv-personal-details'>
                            <div className="form-group" style={{width:"50%"}}>
                                <label for="name"></label>
                                <input type="text" class="form-control" id="name" placeholder="Your Company" />
                                <input type="text" class="form-control" id="name" placeholder="Your Name" />
                                <input type="text" class="form-control" id="name" placeholder="Company's GSTIN" />
                                <input type="text" class="form-control" id="name" placeholder="Company's Address" />
                                <input type="text" class="form-control" id="name" placeholder="City" />
                                <select type="text" class="form-control" id="name">
                                    <option>State</option>
                                    <option>Uttaplk;ojhkguy</option>
                                    <option>Uttaplk;ojhkguy</option>
                                    <option>Uttaplk;ojhkguy</option>
                                    <option>Uttaplk;ojhkguy</option>
                                </select>
                                <select type="text" class="form-control" id="name">
                                    <option>
                                       India
                                    </option>
                                </select>
                            </div>
                        </div>

                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default MyForm

