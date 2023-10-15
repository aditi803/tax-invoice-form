import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { resetPassword } from '../../redux/slices/auth';
import { useAuthSelector } from '../../redux/selector/auth';

const ResetPassword = () => {
    const authSelector = useAuthSelector()
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let emailId = location?.state?.email;
    const [email, setEmail] = useState(emailId);
    const [newPassword, setNewPassword] = useState("");
    const [passwordShown, setPasswordShown] = useState(false);

    //password field show or hide
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

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
        else if (!newPassword) {
            toast.error("Please enter password");
            return;
        }
        else if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d.!@#$%^&*()_+]{8,}$/.test(newPassword)) {
            toast.error("Password must be at least 8 characters long with 1 capital letter, 1 number and 1 special character");
            return;
        }
        let params = {
            email: email,
            new_password: newPassword
        }
        dispatch(resetPassword({
            ...params, cb(res) {
                if (res.status) {
                    setNewPassword("")
                    navigate("/")
                }

            }
        }))

    }

    // useEffect(() => {
    //     document.title = "resetPassword";
    // }, []);

    return (
        <>


            <div className='login'>
                <div className="row justify-content-center">
                    <div className="col-md-7 ">
                        <div className="detailsContainer">
                            <h3 className="headTxt mt-3 mb-4 text-center">Reset Password </h3>
                            <form onSubmit={(e) => handleSubmit(e)} className='signupForm row justify-content-center'>
                                <div className='form-group col-md-12 mb-3'>
                                    <div className='form-group mb-3'>
                                        <label className='postopportunity_label'>Email Address</label>
                                        <input value={email} name="email" type='email' className='customFormControl' placeholder='Enter Email Address' onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className='form-group mb-3'>
                                    <label className='postopportunity_label'>New Password</label>
                                    <input onChange={(e) => setNewPassword(e.target.value)} type={passwordShown ? "text" : "password"} value={newPassword} autoComplete="on" name="password" className='customFormControl' placeholder='Password' />
                                    <span className="toggle_password_ info_icon" onClick={() => { togglePasswordVisiblity(!passwordShown) }}>
                                        <span className={passwordShown ? "show-icon togglePassword" : "hide-icon togglePassword"} id=""></span>
                                    </span>
                                    </div>
                                    
                                </div>

                                <div className=' text-center'>
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

export default ResetPassword