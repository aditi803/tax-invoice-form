import React from 'react'

const form = () => {
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
                            <div class="form-group">
                                <label for="name"></label>
                                <input type="text" class="form-control" id="name" placeholder="Your Company" />
                                <input type="text" class="form-control" id="name" placeholder="Your Company" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" class="form-control" id="name" placeholder="Your Name" />
                        </div>
                        <div class="form-group">
                            <label for="email">Email address</label>
                            <input type="email" class="form-control" id="email" placeholder="Enter your email" />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>

                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" class="form-control" id="password" placeholder="Password" />
                        </div>

                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="rememberMe" />
                            <label class="form-check-label" for="rememberMe">Remember me</label>
                        </div>

                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default form

