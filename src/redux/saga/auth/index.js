import { all, call, put, takeLatest } from 'redux-saga/effects'
import { ApiClient } from '../../../utilities/api';
import { onErrorStopLoad, setLogout, setUserLogin, setUserOtp,setUserVerifyOtp, setUserSignUp ,setUserSocialLoginSignup, setStepThreeCompanyLogoUplaod, setSignUpStep, setUserSiteAccess, setGetAllIndustryGroups,setGetAllIndustrySubGroups, setBusinessOwnershipType, setCompanyListType,setGetCompanyProfileInfo,setCompanyEditProfile, setCompanyBannerUplaod, setEditProfile,setAddCertificates,setDeleteCertificates,setCertificatesList,setCompanyUpdateLogoBanner, setUserForgetPassword,setForgetPasswodVerifyOtp,setResetPassword, setGetSessionId, setUpdateMemberShipAmount, setChangePassword, setUserPhotoUpload, setUserProfileUpdate, subscriptionStatusSet, subscriptionIDSet, setSearchCompanyUser,setUserExistingCertificationsUpdate,setUserTradeMembershipsUpdate, setBusinessGenesis} from '../../slices/auth';
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
      // toast.success(action.res.data.msg);
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



// function* userSignUp(action) {
//   try {
//     const resp = yield call(ApiClient.post, action.url = ApiPath.AuthApiPath.SIGNUP_USER, action.payload = action.payload);
//     if (resp.status) {
//       yield put(setUserSignUp(resp.data));
//       yield call(action.payload.cb, action.res = resp)
//     }
//     else {
//       throw resp
//     }
//   } catch (e) {
//     yield put(onErrorStopLoad())
//     toast.error(e.response.data.msg);
//   }
// }


// function* userOtp(action) {
//   try {
//     const resp = yield call(ApiClient.post, action.url = ApiPath.AuthApiPath.OTP_USER, action.payload = action.payload);
//     if (resp.status) {
//       localStorage.setItem("authToken", resp.data.payload.token ? resp.data.payload.token : "")
//       yield put(setUserOtp(resp.data.payload));
//       yield call(action.payload.cb, action.res = resp)
//       // toast.success(action.res.data.msg);
//     }
//     else {
//       throw resp
//     }
//   } catch (e) {
//     yield put(setUserOtp({}));
//     yield put(onErrorStopLoad())
//     toast.error(e.response.data.msg);
//   }
// }


// function* ChangePassword(action) {
//   try {
//     const resp = yield call(ApiClient.post, action.url = ApiPath.AuthApiPath.CHANGE_PASSWORD, action.payload = action.payload);
//     if (resp.status) {
//       yield put(setChangePassword(resp.data.payload));
//       yield call(action.payload.cb, action.res = resp)
//        toast.success(action.res.data.msg);
//     }
//     else {
//       throw resp
//     }
//   } catch (e) {
//     yield put(setChangePassword({}));
//     yield put(onErrorStopLoad())
//     toast.error(e.response.data.msg);
//   }
// }


// function* verifyOtp(action) {
//   try {
//     const resp = yield call(ApiClient.post, action.url = ApiPath.AuthApiPath.OTP_VERIFY_USER, action.payload = action.payload);
//     if (resp.status) {
//       localStorage.setItem("authToken", resp.data.payload.token ? resp.data.payload.token : "")
//       yield put(setUserVerifyOtp(resp.data.payload));
//       yield call(action.payload.cb, action.res = resp)
//       toast.success(action?.res?.data?.msg);
//     }
//     else {
//       throw resp
//     }
//   } catch (e) {
//     yield put(setUserVerifyOtp({}));
//     yield put(onErrorStopLoad())
//     toast.error(e?.response?.data?.msg);
//   }
// }


// Worker saga will be fired on USER_FETCH_REQUESTED actions
// function* userSignUpStep(action) {
//   try {
//     const resp = yield call(ApiClient.post, action.url = ApiPath.AuthApiPath.STEP_USER, action.payload = action.payload);
//     if (resp.status) {
//       yield put(setSignUpStep(resp.data.payload));
//       yield call(action.payload.cb, action.res = resp)
//       // toast.success(action.res.data.msg);
//     }
//     else {
//       throw resp
//     }
//   } catch (e) {
//     yield put(setSignUpStep({}));
//     yield put(onErrorStopLoad())
//     toast.error(e.response.data.msg);
//   }
// }



// function* SearchCompanyUser(action) {
  
//   try {

//     var  dataToSend = {...action.payload}
//     delete dataToSend.cb

//     const resp = yield call(ApiClient.get, action.url = ApiPath.AuthApiPath.SEARCH_COMPANY_USER, action.params = {params:dataToSend});

//     if (resp.status) {

//       yield put(setSearchCompanyUser(resp.data.payload.data));
//       yield call(action.payload.cb, action.res = resp)
//       // toast.success(action.res.data.msg);
//     }
//     else {

//       throw resp
//     }
//   } catch (e) {
//     yield put(setGetAllIndustryGroups({}));
//     yield put(onErrorStopLoad())
//     toast.error(e.response.data.msg);
//   }
// }


function* SetSubscriptionID(action) {
  
  try {
    const dataToSend = {...action.payload}
    delete dataToSend.cb

    const resp = yield call(ApiClient.patch, action.url = ApiPath.AuthApiPath.UPDATE_SUBSCRIPTION_ID, action.params = dataToSend);
    if (resp.status) {
      yield put(subscriptionIDSet(resp.data.payload));
      yield call(action.payload.cb, action.res = resp)
    }
    else {
      throw resp
    }
  } catch (e) {
    yield put(subscriptionIDSet());
    yield put(onErrorStopLoad())
    // toast.error(e.response.data.msg);
  }
}




// Worker saga will be fired on USER_FETCH_REQUESTED actions
function* CompanyLogoUpload(action) {
  try {
    const resp = yield call(ApiClient.postFormData, action.url = ApiPath.DashboardApiPath.ATTACHMENT_UPLOAD, action.payload = action.payload);
    if (resp.status) {
      yield put(setStepThreeCompanyLogoUplaod(resp.data.payload));
      yield call(action.payload.cb, action.res = resp)
      // toast.success(action.res.data.msg);
    }
    else {
      throw resp
    }
  } catch (e) {
    yield put(setStepThreeCompanyLogoUplaod({}));
    yield put(onErrorStopLoad())
    toast.error(e.response.data.msg);
  }
}


// Worker saga will be fired on USER_FETCH_REQUESTED actions
function* UserPhotoUpload(action) {
  try {
    const resp = yield call(ApiClient.postFormData, action.url = ApiPath.DashboardApiPath.ATTACHMENT_UPLOAD, action.payload = action.payload);
    if (resp.status) {
      yield put(setUserPhotoUpload(resp.data.payload));
      yield call(action.payload.cb, action.res = resp)
      // toast.success(action.res.data.msg);
    }
    else {
      throw resp
    }
  } catch (e) {
    yield put(setUserPhotoUpload({}));
    yield put(onErrorStopLoad())
    toast.error(e.response.data.msg);
  }
}


// Worker saga will be fired on USER_FETCH_REQUESTED actions
// function* UserProfileUpdate(action) {
//   try {
//     const resp = yield call(ApiClient.patch, action.url = ApiPath.AuthApiPath.EDIT_PROFILE, action.payload = action.payload);
//     if (resp.status) {
//       yield put(setUserProfileUpdate(resp.data.payload));
//       yield call(action.payload.cb, action.res = resp)
//       toast.success(action.res.data.msg);
//     }
//     else {
//       throw resp
//     }
//   } catch (e) {
//     yield put(setUserProfileUpdate({}));
//     yield put(onErrorStopLoad())
//     toast.error(e.response.data.msg);
//   }
// }


// Worker saga will be fired on USER_FETCH_REQUESTED actions
// function* UserCompanyProfileUpdate(action) {
//   try {
//     const resp = yield call(ApiClient.patch, action.url = `${ApiPath.AuthApiPath.COMPANY_EDIT_PROFILE}${action.payload.id}`, action.payload = action.payload);
//     if (resp.status) {
//       yield put(setCompanyEditProfile(resp.data.payload));
//       yield call(action.payload.cb, action.res = resp)
//        toast.success(action.res.data.msg);
//     }
//     else {
//       throw resp
//     }
//   } catch (e) {
//     yield put(setCompanyEditProfile({}));
//     yield put(onErrorStopLoad())
//     toast.error(e.response.data.msg);
//   }
// }

// function* companyListType(action) {
//   try {
//     const resp = yield call(ApiClient.get, action.url = ApiPath.AuthApiPath.COMPANY_LIST_TYPE, action.payload = action.payload);
//     if (resp.status) {
//       yield put(setCompanyListType(resp.data.payload));
//       yield call(action.payload.cb, action.res = resp)
//     }
//     else {
//       throw resp
//     }
//   } catch (e) {
//     yield put(setCompanyListType({}));
//     yield put(onErrorStopLoad())
//     toast.error(e?.response?.data?.msg);
//   }
// }
// function* CompanyProfileInfo(action) {
//   try {
//     const resp = yield call(ApiClient.get, action.url = ApiPath.AuthApiPath.COMPANY_PROFILE_INFORMATION, action.payload = action.payload);
//     if (resp.status) {
//       yield put(setGetCompanyProfileInfo(resp.data.payload));
//       yield call(action.payload.cb, action.res = resp)
//     }
//     else {
//       throw resp
//     }
//   } catch (e) {
//     yield put(setGetCompanyProfileInfo({}));
//     yield put(onErrorStopLoad())
//     toast.error(e?.response?.data?.msg);
//   }
// }

function* editProfile(action) {
  try {
    const resp = yield call(ApiClient.patch, action.url = `${ApiPath.AuthApiPath.COMPANY_EDIT_PROFILE}${action.payload.company_id}`, action.payload = action.payload);
    if (resp.status) {
      yield put(setCompanyEditProfile(resp.data.payload));
      yield call(action.payload.cb, action.res = resp)
       toast.success(action.res.data.msg);
    }
    else {
      throw resp
    }
  } catch (e) {
    yield put(setCompanyEditProfile({}));
    yield put(onErrorStopLoad())
    toast.error(e.response.data.msg);
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

function* userForgetPasswords(action) {
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

function* forgetPassswordVerifyOtp(action) {
  try {
    const resp = yield call(ApiClient.post, action.url = ApiPath.AuthApiPath.FORGET_PASSWORD_VERIFY, action.payload = action.payload);
    if (resp.status) {
      yield put(setForgetPasswodVerifyOtp(resp.data.payload));
      yield call(action.payload.cb, action.res = resp)
       toast.success(action.res.data.msg);
    }
    else {
      throw resp
    }
  } catch (e) {
    yield put(setForgetPasswodVerifyOtp({}));
    yield put(onErrorStopLoad())
    toast.error(e.response.data.msg);
  }
}


// function* resetPassword(action) {
//   try {
//     const resp = yield call(ApiClient.post, action.url = ApiPath.AuthApiPath.RESET_PASSWORD, action.payload = action.payload);
//     if (resp.status) {
//       yield put(setResetPassword(resp.data.payload));
//       yield call(action.payload.cb, action.res = resp)
//        toast.success(action.res.data.msg);
//     }
//     else {
//       throw resp
//     }
//   } catch (e) {
//     yield put(setResetPassword({}));
//     yield put(onErrorStopLoad())
//     toast.error(e.response.data.msg);
//   }
// }


function* authSaga() {
  yield all([
    takeLatest('auth/userLogin', userLogin),
    // takeLatest('auth/userForgetPassword', userForgetPasswords),
    // takeLatest('auth/userSiteAccess', userSiteAccess),
    // takeLatest('auth/userSignUp', userSignUp),
    // takeLatest('auth/userSocialLoginSignup', userSocialLoginSignup),
    // takeLatest('auth/userOtp', userOtp),
    // takeLatest('auth/changePassword', ChangePassword),
    // takeLatest('auth/userVerifyOtp', verifyOtp),
    // takeLatest('auth/forgetPasswodVerifyOtp', forgetPassswordVerifyOtp),
    // takeLatest('auth/resetPassword', resetPassword),
    // takeLatest('auth/signUpStep', userSignUpStep),
    // takeLatest('auth/stepThreeCompanyLogoUplaod', CompanyLogoUpload),
    // takeLatest('auth/companyBannerUplaod', companyBanner),
    // takeLatest('auth/getAllIndustryGroups', industryGroups),
    // takeLatest('auth/getAllIndustrySubGroups', industrySubGroups),
    // takeLatest('auth/businessOwnershipType', ownershipType),
    // takeLatest('auth/businessGenesis', genesisType),
    // takeLatest('auth/companyListType', companyListType),
    // takeLatest('auth/getCompanyProfileInfo', CompanyProfileInfo),
    // takeLatest('auth/companyEditProfile', editProfile),
    // takeLatest('auth/companyUpdateLogoBanner', updateCompanyLogoBanners),
    // takeLatest('auth/editProfile', editUserProfile),
    // takeLatest('auth/addCertificates', AddCertificate),
    // takeLatest('auth/deleteCertificates', DeleteCertificate),
    // takeLatest('auth/certificatesList', CertificateList),
    // takeLatest('auth/getSessionId', MemberShipGetSessionId),
    // takeLatest('auth/updateMemberShipAmount', UpdateMemberShipAmount),
    // takeLatest('auth/userPhotoUpload', UserPhotoUpload),
    // takeLatest('auth/companyLogoUpload', CompanyLogoUpload),
    // takeLatest('auth/userProfileUpdate', UserProfileUpdate),
    // takeLatest('auth/userExistingCertificationsUpdate', userExistingCertificationsUpdate),
    // takeLatest('auth/userTradeMembershipsUpdate', userTradeMembershipsUpdate),
    // takeLatest('auth/userCompanyProfileUpdate', UserCompanyProfileUpdate),
    // takeLatest('auth/logout', userLogout),

    // takeLatest('auth/setSubscriptionID', SetSubscriptionID),
    // takeLatest('auth/searchCompanyUserFun', SearchCompanyUser),

  
  ])
}

export default authSaga;

