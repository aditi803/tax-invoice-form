import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { MuiOtpInput } from 'mui-one-time-password-input'
import { userForgetPassword } from '../../redux/slices/auth';
import { useAuthSelector } from '../../redux/selector/auth';
import { Button } from 'bootstrap';


const ForgetPassword = () => {
    const authSelector = useAuthSelector()
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const [email, setEmail] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) {
            toast.error("Please enter email");
            return;
        }
        else if (email && !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            toast.error("Please enter valid email address");
            return;
        }

        let params = {
            email: email
        }
        dispatch(userForgetPassword({
            ...params, cb(res) {
                if (res.status) {
                    navigate("/forgetPasswordVerify", { state: { email: email } })
                }

            }
        }))

    }

    useEffect(() => {
        document.title = "forgetPassword";
    }, []);

    return (
        <>
            <div className='login'>
                <div className="row justify-content-center">
                    <div className="col-md-7 ">
                        <div className="detailsContainer">
                            <h3 className="headTxt mt-3 mb-4 text-center">Forgot Password </h3>
                            <form onSubmit={(e) => handleSubmit(e)} className='signupForm row justify-content-center'>
                                <div className='form-group col-md-12 mb-3'>
                                    <label className='postopportunity_label'>Email Address</label>
                                    <input value={email} name="email" type='email' className='customFormControl' placeholder='Enter Email Address' onChange={(e) => setEmail(e.target.value)} />
                                </div>

                                <div className=' mt-3 mb-3 text-center'>
                                    <button className='primaryBtn  mt-2' type="submit" >
                                        {authSelector.loading && (
                                            <span className="spinner-border spinner-border-sm"></span>
                                        )}
                                        <span> Submit </span>
                                    </button>

                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ForgetPassword