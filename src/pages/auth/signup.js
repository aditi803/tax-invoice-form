import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuthSelector } from "../../redux/selector/auth";
import { userSignUp, userSocialLoginSignup } from "../../redux/slices/auth";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const authSelector = useAuthSelector()

  const id = location?.state?.id;
  const roleId = location?.state?.roleId

  const [errorMessages, setErrorMessages] = useState({});
  const [isTermConditionChecked, setIsTermConditionChecked] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [passwordShown, setPasswordShown] = useState(false);

  //onchange input 
  const handleChange = (e, fieldname) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value.trim() });
    setErrorMessages({ ...errorMessages, [name]: "" });
    if (fieldname === "termCondition") { setIsTermConditionChecked(!isTermConditionChecked); }
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
    let letterVal = /^[a-zA-Z\s]*$/;
    if (!formData.firstName) {
      toast.error("Please enter first name");
      return;
    }
    // else if (formData.firstName.length <= 2) {
    //   toast.error("First Name should be maximum 3 character")
    //   return;
    // }
    else if (!formData.firstName.match(letterVal)) {
      toast.error('Please enter in first name alphabet characters only')
      return;
    }

    else if (!formData.lastName) {
      toast.error("Please enter last name");
      return;
    }
    // else if (formData.lastName.length <= 2) {
    //   toast.error("Last Name should be maximum 3 character")
    //   return;
    // }

    else if (!formData.lastName.match(letterVal)) {
      toast.error('Please enter in last name alphabet characters only')
      return;
    }

    else if (!formData.email) {
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
    else if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d.!@#$%^&*()_+]{8,}$/.test(formData.password)) {
      toast.error("Password must be at least 8 characters long with 1 capital letter, 1 number and 1 special character");
      return;
    }
    else if (!isTermConditionChecked) {
      toast.error("Please agree to our terms and conditions to proceed further.");
      return;
    }

    if (validateForm) {
      let params = {
        email: formData.email.trim(),
        first_name: formData.firstName,
        last_name: formData.lastName,
        password: formData.password,
      }
      dispatch(userSignUp({
        ...params, cb(res) {
          if (res.status) {
            console.log(res, "response of email");
            navigate('/forgot-password-verification', { state: { id: res?.data?.payload?.user_id, status: id } });
            localStorage.setItem('email', formData.email.trim())
          }
          else {
          }
        }
      }))
    }
  }


  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "Sign-up";
  }, []);


  //password field show or hide
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };


  return (
    <div className='signup'>
      <div className="row justify-content-center">
        <div className="col-md-10 text-center">
          <div className="detailsContainer">
            <h3 className="headTxt mt-3 mb-4">Sign up </h3>
            {/* <Link to='' className='continueField'>
              <img src={images.googleIcon} className='conitnueIcon' alt='img-fluid' />
              Continue with Google
            </Link> */}
            <form onSubmit={(e) => handleSubmit(e)} className='signupForm row justify-content-center'>
              <div className='form-group col-md-6 mb-3'>
                <input onChange={(e) => handleChange(e)} maxLength={25} value={formData.firstName} name="firstName" type='text' className='customFormControl' placeholder='First Name' />
              </div>
              <div className='form-group col-md-6 mb-3'>
                <input onChange={(e) => handleChange(e)} maxLength={25} value={formData.lastName} name="lastName" type='text' className='customFormControl' placeholder='Last Name' />
              </div>
              <div className='form-group col-md-12 mb-3'>
                <input onChange={(e) => handleChange(e)} value={formData.email} name="email" type='email' className='customFormControl' placeholder='Company Email Address' />
              </div>
              <div className='form-group col-md-12 mb-3'>
                <input onChange={(e) => handleChange(e)} type={passwordShown ? "text" : "password"} value={formData.password} autoComplete="on" name="password" className='customFormControl' placeholder='Password' />
                <span className="toggle_password_ info_icon" onClick={() => { togglePasswordVisiblity(!passwordShown) }}>
                  <span className={passwordShown ? "show-icon togglePassword" : "hide-icon togglePassword"} id=""></span>
                </span>
              </div>
              <div className="form-group col-md-12 mb-3">
                <div className='d-flex'>
                  <input type="checkbox" id="accpt" className='checkBox me-2' onChange={(e) => { handleChange(e, "termCondition"); }} />
                  <label htmlFor="accpt" className='checkBoxTxt align-items-start align-items-md-center'>
                    <span>
                      Yes, I understand and agree to the GetOpps Terms of Service , including the User Agreement and <Link to='/privacyPolicy' className='otherLink'>Privacy Policy</Link>
                    </span>
                  </label>
                </div>
              </div>
              <div className='col-md-8 mt-3 mb-3 text-center'>
                <button className='primaryBtn w-100 mt-2' type="submit">
                  {authSelector.loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}

                  <span> Create account</span>
                </button>
                {/* <Link to='/signup' className='primaryBtn w-100 mt-2'>
                  Create account
                </Link> */}
                <div className='accountRelate'>
                  <p className='innerTxt mt-4 w-100'>Already have an account? <Link className='linkTxt' to='/login' ><b>Log In</b></Link></p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup