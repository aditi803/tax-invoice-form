import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {},
  verifyOtp: {},
  userSignUp: {},
  resendOtp:{},
  userForgetPassword: {},
  forgetPasswodVerifyOtp: {},
  resetPassword: {},
  isLoggedIn: false,
  uploadImage: {},
  loading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    uploadImage: (state) => {
      state.loading = true;
    },
    setUploadImage: (state, action) => {
      state.loading = false;
      state.uploadImage = action.payload;
    },
    userSignUp: (state) => {
      state.loading = true;
    },
    setUserSignUp: (state, action) => {
      state.loading = false;
      state.userSignUp = action.payload;
    },
    resendOtp: (state) => {
      state.loading = true;
    },
    setResendOtp: (state, action) => {
      state.loading = false;
      state.isLoggedIn = true;
      // state.userInfo = action.payload;
    },
    verifyEmail: (state) => {
      state.loading = true;
    },
    setVerifyEmail: (state, action) => {
      state.loading = false;
      state.isLoggedIn = true;
      // state.userInfo = action.payload;
    },
    userLogin: (state) => {
      state.loading = true;
    },
    setUserLogin: (state, action) => {
      state.loading = false;
      state.isLoggedIn = true;
      // state.userInfo = action.payload;
    },
    userForgetPassword: (state) => {
      state.loading = true;
    },
    setUserForgetPassword: (state, action) => {
      state.loading = false;
      state.userForgetPassword = action.payload;
    },
    userInfo: (state) => {
      state.loading = true;
    },
    setUserInfo: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
    },

    userVerifyOtp: (state) => {
      state.loading = true;
    },
    setUserVerifyOtp: (state, action) => {
      state.loading = false;
      state.isLoggedIn = true;
      state.verifyOtp = action.payload;
      // state.userStep = action.payload
    },


    forgetPasswodVerifyOtp: (state) => {
      state.loading = true;
    },
    setForgetPasswodVerifyOtp: (state, action) => {
      state.loading = false;
      // state.isLoggedIn = true
      state.forgetPasswodVerifyOtp = action.payload;
    },
    resetPassword: (state) => {
      state.loading = true;
    },
    setResetPassword: (state, action) => {
      state.loading = false;
      state.resetPassword = action.payload;
    },
    editProfile: (state) => {
      state.loading = true;
    },
    setEditProfile: (state, action) => {
      state.loading = false;
      // state.userInfo = action.payload;
    },
    companyEditProfile: (state) => {
      state.loading = true;
    },
    setCompanyEditProfile: (state, action) => {
      state.loading = false;
      // state.userInfo = action.payload;
      state.uploadbanner = action.payload?.user?.user_company_information;
    },
    changePassword: (state) => {
      state.loading = false;
    },
    setChangePassword: (state, action) => {
      state.loading = true;
    },
    userPhotoUpload: (state) => {
      state.loading = false;
    },
    setUserPhotoUpload: (state, action) => {
      state.loading = true;
      state.editProfile = action.payload;
    },
    userProfileUpdate: (state) => {
      state.loading = false;
    },
    setUserProfileUpdate: (state, action) => {
      state.loading = true;
      // state.userInfo = action.payload;
    },
    companyLogoUpload: (state) => {
      state.loading = true;
    },
    setCompanyLogoUpload: (state, action) => {
      state.loading = false;
      state.editProfile = action.payload;
    },
    userCompanyProfileUpdate: (state) => {
      state.loading = false;
    },
    setUserCompanyProfileUpdate: (state, action) => {
      state.loading = false;
      // state.userInfo = action.payload;
    },
    userExistingCertificationsUpdate: (state) => {
      state.loading = false;
    },
    setUserExistingCertificationsUpdate: (state, action) => {
      state.loading = false;
    },
    userTradeMembershipsUpdate: (state) => {
      state.loading = false;
    },
    setUserTradeMembershipsUpdate: (state, action) => {
      state.loading = false;
    },
    logout: (state) => {
      state.loading = true;
    },
    setLogout: (state, action) => {
      state.loading = false;
      state.userInfo = {};
      state.userStep = {};
      state.userSignUp = {};
      state.isLoggedIn = false;
    },
    setSubscriptionID: (state) => {
      state.loading = true;
    },
    subscriptionIDSet: (state, action) => {
      state.loading = false;
      // state.userInfo.user = action.payload;
    },
    searchCompanyUserFun: (state, action) => {
      state.loading = true;
    },
    setSearchCompanyUser: (state, action) => {
      state.loading = false;
      state.searchCompanyUsers = action.payload
    },
    updateUserStep: (state, action) => {
      state.userStep = action.payload ?? state.userStep;
    },
    onErrorStopLoad: (state) => {
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setUploadImage,
  uploadImage,
  resendOtp,
  setResendOtp,
  userSignUp,
  setUserSignUp,
  verifyEmail,
  setVerifyEmail,
  userLogin,
  setUserLogin,
  userInfo,
  setUserInfo,
  
  userSocialLoginSignup,
  setUserSocialLoginSignup,
  userOtp,
  setUserOtp,
  userVerifyOtp,
  setUserVerifyOtp,
  signUpStep,
  setSignUpStep,
  stepThreeCompanyLogoUplaod,
  setStepThreeCompanyLogoUplaod,
  getAllIndustryGroups,
  setGetAllIndustryGroups,
  getAllIndustrySubGroups,
  setGetAllIndustrySubGroups,
  businessOwnershipType,
  setBusinessOwnershipType,
  businessGenesis,
  setBusinessGenesis,
  companyListType,
  setCompanyListType,
  userSiteAccess,
  setUserSiteAccess,
  logout,
  setLogout,
  getCompanyProfileInfo,
  setGetCompanyProfileInfo,
  companyEditProfile,
  setCompanyEditProfile,
  editProfile,
  setEditProfile,
  companyBannerUplaod,
  setCompanyBannerUplaod,
  addCertificates,
  setAddCertificates,
  deleteCertificates,
  setDeleteCertificates,
  certificatesList,
  setCertificatesList,
  companyUpdateLogoBanner,
  setCompanyUpdateLogoBanner,
  userForgetPassword,
  setUserForgetPassword,
  forgetPasswodVerifyOtp,
  setForgetPasswodVerifyOtp,
  resetPassword,
  setResetPassword,
  getSessionId,
  setGetSessionId,
  updateMemberShipAmount,
  setUpdateMemberShipAmount,
  changePassword,
  setChangePassword,
  userPhotoUpload,
  setUserPhotoUpload,
  userProfileUpdate,
  setUserProfileUpdate,
  companyLogoUpload,
  setCompanyLogoUpload,
  userCompanyProfileUpdate,
  setUserCompanyProfileUpdate,
  userExistingCertificationsUpdate,
  setUserExistingCertificationsUpdate,
  userTradeMembershipsUpdate,
  setUserTradeMembershipsUpdate,
  onErrorStopLoad,
  setSubscriptionID,
  subscriptionIDSet,
  searchCompanyUserFun,
  updateUserStep,
  setSearchCompanyUser
} = authSlice.actions;

export default authSlice.reducer;
