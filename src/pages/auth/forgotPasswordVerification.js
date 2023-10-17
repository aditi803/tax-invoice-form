import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { MuiOtpInput } from 'mui-one-time-password-input'
import { forgetPasswodVerifyOtp,resendOtp,resetPassword,userForgetPassword, userVerifyOtp, verifyEmail } from '../../redux/slices/auth';
import { useAuthSelector } from '../../redux/selector/auth';
import { Button } from 'bootstrap';


const ForgotPasswordVerification = () => {

    const email = localStorage.getItem('email');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const authSelector = useAuthSelector()
    // let email = location?.state?.email;
    const [otp, setOtp] = useState('');

    //onchange otp
    const handleChangePin = (newValue) => {
        setOtp(newValue)
    }

    //form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!otp) {
            toast.error("Please enter OTP");
            return;
        }
        let params = {
            email: email,
            otp: parseInt(otp),
            type:"1"
        }
        dispatch(verifyEmail({
            ...params, cb(res) {
                if (res.status) {
                    navigate("/")
                }
                else {
                    toast.error("Error Occured");
                }   
            }
        }))
    }

    const handleResendOtp = () => {
        let params = {
            email: email
        }
        dispatch(resendOtp({
            ...params, cb(res) {
                if (res) {
                    toast.success("OTP send successfully")
                }

            }
        }))

    }

    
    useEffect(() => {
        document.title = "Verification";
    }, []);

    return (
        <div className='verification'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-8 text-center'>
                        <div className='detailsContainer'>
                            <h3 className='headTxt mt-3 mb-4 text-center'>
                                Forget Password Verification
                            </h3>
                            <p className='innerSubtext'>
                                Enter the verification code that we just sent you on your email address.
                            </p>
                            <form onSubmit={(e) => { handleSubmit(e) }} className="form_horizontal">
                                <div className='input-groups'>
                                    <MuiOtpInput className='input_digits_' length={4} value={otp} onChange={handleChangePin} />
                                    <br></br>
                                </div>
                                <button className='primaryBtn  mt-5 mb-3' type="submit">
                                    {authSelector.loading && (
                                        <span className="spinner-border spinner-border-sm"></span>
                                    )}
                                    <span>Submit</span>
                                </button>
                            </form>
                            <p className='innerTxt'>Didn't receive the code yet ? <span className='linkTxt' onClick={()=> handleResendOtp()}><b>Resend</b></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPasswordVerification