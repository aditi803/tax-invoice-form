import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { changePassword } from '../../redux/slices/auth';
import { useNavigate } from 'react-router-dom';


const Changepassword = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [CurrentpasswordShown, CurrentsetPasswordShown] = useState(false);
    const [NewpasswordShown, NewsetPasswordShown] = useState(false);
    const [ConfirmpasswordShown, ConfirmsetPasswordShown] = useState(false);
    const [formData, setFormData] = useState({
        oldpassword: "",
        newpassword: ""
    });

    //password field show or hide
    const CurrenttogglePasswordVisiblity = () => {
        CurrentsetPasswordShown(CurrentpasswordShown ? false : true);
    };
    const NewtogglePasswordVisiblity = () => {
        NewsetPasswordShown(NewpasswordShown ? false : true);
    };

    //form login
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.oldpassword) {
            toast.error("Please enter old password");
            return;
        }
        else if (formData.oldpassword.length <= 7) {
            toast.error("old Password should be maximum 8 character")
            return;
        }
        else if (!formData.newpassword) {
            toast.error("Please enter new password");
            return;
        }
        else if (formData.newpassword.length <= 7) {
            toast.error("new Password should be maximum 8 character")
            return;
        }
        let params = {
            old_password: formData.oldpassword,
            new_password: formData.newpassword
        }
        dispatch(changePassword({
            ...params, cb(res) {
                if (res.status) {
                    props.refreshUserDetail();
                    props.close();
                }
                else {

                }

            }
        }))
    }

    const handleCancel = (e) => {
       navigate('/')
    } 

    //onchange input 
    const handleChange = (e) => {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value.trim() });
    }

    useEffect(() => {

    }, []);

    return (
        <>
            <div className='changePassword'>
                <form onSubmit={(e) => handleSubmit(e)} >
                    <div className='form-group  mb-3'>
                        <label className='postopportunity_label'>Current Password</label>
                        <input type={CurrentpasswordShown ? "text" : "password"} value={formData.oldpassword} name="oldpassword" onChange={(e) => handleChange(e)} className='customFormControl' placeholder='Current Password' />
                        <span className="toggle_password_ info_icon" onClick={() => { CurrenttogglePasswordVisiblity(!CurrentpasswordShown) }}>
                            <span className={CurrentpasswordShown ? "show-icon togglePassword" : "hide-icon togglePassword"} id=""></span>
                        </span>
                    </div>
                    <div className='form-group  mb-3'>
                        <label className='postopportunity_label'>New Password</label>
                        <input type={NewpasswordShown ? "text" : "password"} value={formData.newpassword} name="newpassword" onChange={(e) => handleChange(e)} className='customFormControl' placeholder='New Password' />
                        <span className="toggle_password_ info_icon" onClick={() => { NewtogglePasswordVisiblity(!NewpasswordShown) }}>
                            <span className={NewpasswordShown ? "show-icon togglePassword" : "hide-icon togglePassword"} id=""></span>
                        </span>
                    </div>
                    <div className='button_box text-center  my-2'>
                        <button className='subsmallBtnblue_ mx-2' onClick={handleCancel}>Cancel</button>
                        <button className='primaryBtn mx-2' >Create</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Changepassword
