import { all, call, put, takeLatest } from 'redux-saga/effects'
import { ApiClient } from '../../../utilities/api';
import { onErrorStopLoad, setLogout, setUserLogin, setUserOtp, setUserVerifyOtp, setUserSignUp, setUserForgetPassword, setResetPassword, setChangePassword, setUploadImage, setResendOtp, setVerifyEmail, setUserInfo } from '../../slices/auth';
import ApiPath from '../../../constants/apiPath';
import { toast } from 'react-toastify';
// import AddCertificates from '../../../app/containers/editProfile/addCertificates';

// Worker saga will be fired on USER_FETCH_REQUESTED actions
function* userLogin(action) {
  try {
    // const resp = yield call(ApiClient.post, action.url = `${ApiPath.CREATE_USER}/name=${action.payload.name}`);
    const resp = yield call(ApiClient.post, action.url = ApiPath.AuthApiPath.LOGIN_USER, action.payload = action.payload);
    if (resp.status) {
      localStorage.setItem("authToken", resp.data?.payload.token ? resp.data.payload.token : "")
      yield put(setUserLogin(resp.data.payload));
      yield call(action.payload.cb, action.res = resp)
      toast.success(action.res.data.msg);
    }
    else {
      throw resp
    }
  } catch (e) {
    yield put(setUserLogin({}));
    yield put(onErrorStopLoad())
    toast.error(e?.response?.data?.msg);
  }
}



function* userSignUp(action) {
  try {
    const resp = yield call(ApiClient.post, action.url = ApiPath.AuthApiPath.SIGNUP_USER, action.payload = action.payload);
    if (resp.status) {
      yield put(setUserSignUp(resp.data));
      yield call(action.payload.cb, action.res = resp)
      toast.success(action.res.data.msg);
    }
    else {
      throw resp
    }
  } catch (e) {
    yield put(onErrorStopLoad())
    toast.error(e.response.data.msg);
    toast.success(e?.res?.data?.msg);
  }
}


function* resendOtp(action) {
  try {
    const resp = yield call(ApiClient.post, action.url = ApiPath.AuthApiPath.RESEND_OTP, action.payload = action.payload);
    if (resp.status) {
      localStorage.setItem("authToken", resp.data.payload.token ? resp.data.payload.token : "")
      // yield put(setResendOtp(resp.data.payload));
      yield call(action.payload.cb, action.res = resp)
      // console.log(action, "action received");
      // toast.success(action.res.data.msg);
    }
    else {
      throw resp
    }
  } catch (e) {
    yield put(setResendOtp({}));
    yield put(onErrorStopLoad())
    // toast.error(e.res.data.msg);
  }
}


function* ChangePassword(action) {
  try {
    const resp = yield call(ApiClient.post, action.url = ApiPath.AuthApiPath.CHANGE_PASSWORD, action.payload = action.payload);
    if (resp.status) {
      yield put(setChangePassword(resp.data.payload));
      yield call(action.payload.cb, action.res = resp)
      toast.success(action.res.data.msg);
    }
    else {
      throw resp
    }
  } catch (e) {
    yield put(setChangePassword({}));
    yield put(onErrorStopLoad())
    toast.error(e.response.data.msg);
  }
}


function* verifyEmail(action) {
  try {
    const resp = yield call(ApiClient.post, action.url = ApiPath.AuthApiPath.VERIFY_EMAIL, action.payload = action.payload);
    if (resp.status) {
      localStorage.setItem("authToken", resp.data.payload.token ? resp.data.payload.token : "")
      yield put(setVerifyEmail(resp.data.payload));
      yield call(action.payload.cb, action.res = resp)
      toast.success(action?.res?.data?.msg);
    }
    else {
      throw resp
    }
  } catch (e) {
    yield put(setVerifyEmail({}));
    yield put(onErrorStopLoad())
    toast.error(e?.response?.data?.msg);
  }
}


// Worker saga will be fired on USER_FETCH_REQUESTED actions
function* UploadImage(action) {
  try {
    const resp = yield call(ApiClient.postFormData, action.url = ApiPath.AuthApiPath.UPLOAD_IMAGE, action.payload = action.payload);
    if (resp.status) {
      // yield put(setUploadImage(resp.data.payload));
      yield call(action.payload.cb, action.res = resp)
      // toast.success(action.res.data.msg);
    }
    else {
      throw resp
    }
  } catch (e) {
    yield put(setUploadImage({}));
    yield put(onErrorStopLoad())
    // toast.error(e.response.data.msg);
  }
}


function* userLogout(action) {
  try {
    const resp = yield call(ApiClient.get, action.url = ApiPath.AuthApiPath.LOGOUT_USER, action.payload = action.payload);
    if (resp.status) {
      yield call(action.payload.cb, action.res = resp)
      localStorage.removeItem('authToken');
      localStorage.removeItem('persist:root');
      // toast.success(action.res.data.msg);
      yield put(setLogout())
    }
    else {
      throw resp
    }
  } catch (e) {
    toast.error(e.response.data.msg);
  }
}

function* userInfo(action) {
  try {
    const resp = yield call(ApiClient.get, action.url = ApiPath.AuthApiPath.USER_INFO, action.payload = action.payload);
    if (resp.status) {
      yield put(setUserInfo(resp.data.payload));
      yield call(action.payload.cb, action.res = resp)
      // toast.success(action.res.data.msg);
      // localStorage.removeItem('authToken');
      // localStorage.removeItem('persist:root');
      // toast.success(action.res.data.msg);
      // yield put(setLogout())
    }
    else {
      throw resp
    }
  } catch (e) {
    yield put(setUserInfo({}));
    yield put(onErrorStopLoad())
    toast.error(e.response.data.msg);
  }
}

function* userForgetPassword(action) {
  try {
    const resp = yield call(ApiClient.post, action.url = ApiPath.AuthApiPath.FORGET_PASSWORD_USER, action.payload = action.payload);
    if (resp.status) {
      yield put(setUserForgetPassword(resp.data.payload));
      yield call(action.payload.cb, action.res = resp)
      toast.success(action.res.data.msg);
    }
    else {
      throw resp
    }
  } catch (e) {
    yield put(setUserForgetPassword({}));
    yield put(onErrorStopLoad())
    toast.error(e.response.data.msg);
  }
}



function* resetPassword(action) {
  try {
    const resp = yield call(ApiClient.put, action.url = ApiPath.AuthApiPath.RESET_PASSWORD, action.payload = action.payload);
    if (resp.status) {
      yield put(setResetPassword(resp.data.payload));
      yield call(action.payload.cb, action.res = resp)
      toast.success(action.res.data.msg);
    }
    else {
      throw resp
    }
  } catch (e) {
    yield put(setResetPassword({}));
    yield put(onErrorStopLoad())
    toast.error(e.response.data.msg);
  }
}


function* authSaga() {
  yield all([
    takeLatest('auth/userLogin', userLogin),
    takeLatest('auth/userForgetPassword', userForgetPassword),
    takeLatest('auth/uploadImage', UploadImage),
    takeLatest('auth/userSignUp', userSignUp),
    takeLatest('auth/resendOtp', resendOtp),
    takeLatest('auth/changePassword', ChangePassword),
    takeLatest('auth/verifyEmail', verifyEmail),
    takeLatest('auth/resetPassword', resetPassword),
    takeLatest('auth/logout', userLogout),
    takeLatest('auth/userInfo', userInfo),
  ])
}

export default authSaga;

