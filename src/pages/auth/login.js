import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { userLogin, userSocialLoginSignup } from "../../redux/slices/auth";
import { useAuthSelector } from "../../redux/selector/auth";

const Login = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const authSelector = useAuthSelector()
    const [errorMessages, setErrorMessages] = useState({});
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [passwordShown, setPasswordShown] = useState(false);

    //onchange input 
    const handleChange = (e) => {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value.trim() });
        setErrorMessages({ ...errorMessages, [name]: "" });

    }

    //validation form on email password 
    const validateForm = () => {
        let errors = {};
        let formIsValid = true;
        if (!formData.email) {
            formIsValid = false;
            errors = { ...errors, email: "Please enter your email." };
        }
        else if (typeof formData.email !== "undefined") {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(formData.email.trim())) {
                formIsValid = false;
                errors = { ...errors, email: "Please enter valid email." };
            }
        }
        if (!formData.password) {
            formIsValid = false;
            errors = { ...errors, password: "Please enter your password." };
        }
        setErrorMessages(errors);
        return formIsValid;
    }

    //form login
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.email) {
            toast.error("Please enter email");
            return;
        }
        else if (formData.email && !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(formData.email)) {
            toast.error("Please enter valid email address");
            return;
        }
        else if (!formData.password) {
            toast.error("Please enter password");
            return;
        }
        else if (formData.password.length <= 7) {
            toast.error("Password should be maximum 8 character")
            return;
        }
        if (validateForm) {
            let params = {
                email: formData.email.trim(),
                password: formData.password,
                // role_id: id,
            }
            dispatch(userLogin({
                ...params, cb(res) {
                    if (res.status) {
                        navigate("/")
                    }
                }
            }))
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = "Login";

    }, []);

    //password field show or hide
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };


    return (
        <>
            <div className='login'>
                <div className="row justify-content-center">
                    <div className="col-md-7 text-center">
                        <div className="detailsContainer">
                            <form onSubmit={(e) => handleSubmit(e)} className='signupForm row justify-content-center mt-5'>
                                <div className='form-group col-md-12 mb-3'>
                                    <input value={formData.email} name="email" type='email' className='customFormControl' placeholder='Email Address' onChange={(e) => handleChange(e)} />
                                </div>
                                <div className='form-group col-md-12 mb-3'>
                                    <input autoComplete="on" value={formData.password} name="password" type={passwordShown ? "text" : "password"} className='customFormControl' placeholder='Password' onChange={(e) => handleChange(e)} />
                                    <span className="toggle_password_ info_icon" onClick={() => { togglePasswordVisiblity(!passwordShown) }}>
                                        <span className={passwordShown ? "show-icon togglePassword" : "hide-icon togglePassword"} id=""></span>
                                    </span>
                                </div>
                                <div className='col-12 col-md-12 col-lg-12 col-xl-8 mt-3 mb-3 text-center'>
                                    <button className='primaryBtn w-100 mt-2' type="submit">
                                        {authSelector.loading && (
                                            <span className="spinner-border spinner-border-sm"></span>
                                        )}
                                        &nbsp;&nbsp;
                                        <span>Login</span>
                                    </button>
                                    <div className='accountRelate'>
                                        <p className='innerTxt mt-4 w-100'>Create new Account <Link className='linkTxt' to='/chooserolesfor=signup'><b>Signup</b></Link></p>
                                    </div>
                                    <Link to="/forgot-password" className="forgotPassword"><p>Forgot password</p></Link>
                                </div>
                            </form>
                            {/* <p className='continue'>or</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;