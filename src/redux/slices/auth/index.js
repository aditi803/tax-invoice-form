import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {},
  verifyOtp: {},
  uploadbanner: {},
  industryGroups: {},
  industrySubGroups: {},
  businessOwnershipType: {},
  businessGenesis:{},
  companyListType: {},
  userSignUp: {},
  userStep: {},
  userSiteAccess: {},
  userSocialLogin: {},
  companyProfileInfo: {},
  uploadCertificate: {},
  deleteCertificate: {},
  certificatesList: {},
  companyUpdateLogoBanner: {},
  userForgetPassword: {},
  forgetPasswodVerifyOtp: {},
  resetPassword: {},
  memeberShipId: {},
  memberShipAmount: {},
  searchCompanyUsers:[],
  isLoggedIn: false,

  uploadImage:{},
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
    // companyLogoUpload: (state) => {
    //   state.loading = true;
    // },
    // setCompanyLogoUpload: (state, action) => {
    //   state.loading = false;
    //   state.editProfile = action.payload;
    // },

    userLogin: (state) => {
      state.loading = true;
    },
    setUserLogin: (state, action) => {
      state.loading = false;
      state.isLoggedIn = true;
      state.userInfo = action.payload;
      state.userStep = action.payload;
    },
    userSignUp: (state) => {
      state.loading = true;
    },
    setUserSignUp: (state, action) => {
      state.loading = false;
      state.userSignUp = action.payload;
    },
    userForgetPassword: (state) => {
      state.loading = true;
    },
    setUserForgetPassword: (state, action) => {
      state.loading = false;
      state.userForgetPassword = action.payload;
    },
    userSocialLoginSignup: (state) => {
      state.loading = true;
    },
    setUserSocialLoginSignup: (state, action) => {
      state.loading = false;
      // state.userSignUp = action.payload
      state.userInfo = action.payload;
      state.userStep = action.payload;
    },
    userOtp: (state) => {
      state.loading = true;
    },
    setUserOtp: (state, action) => {
      state.loading = false;
      state.isLoggedIn = true;
      state.userInfo = action.payload;
      state.userStep = action.payload;
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
    signUpStep: (state) => {
      state.loading = true;
    },
    setSignUpStep: (state, action) => {
      state.loading = false;
      state.userStep = action.payload;
    },
    stepThreeCompanyLogoUplaod: (state) => {
      state.loading = true;
    },
    setStepThreeCompanyLogoUplaod: (state, action) => {
      state.loading = false;
      state.editProfile = action.payload;
    },
    companyBannerUplaod: (state) => {
      state.loading = true;
    },
    setCompanyBannerUplaod: (state, action) => {
      state.loading = false;
      state.uploadbanner = action.payload;
    },
    getAllIndustryGroups: (state) => {
      state.loading = true;
    },
    setGetAllIndustryGroups: (state, action) => {
      state.loading = false;
      state.industryGroups = action.payload;
    },
    getAllIndustrySubGroups: (state) => {
      state.loading = true;
    },
    setGetAllIndustrySubGroups: (state, action) => {
      state.loading = false;
      state.industrySubGroups = action.payload;
    },
    businessOwnershipType: (state) => {
      state.loading = true;
    },
    setBusinessOwnershipType: (state, action) => {
      state.loading = false;
      state.businessOwnershipType = action.payload;
    },
    businessGenesis: (state) => {
      state.loading = true;
    },
    setBusinessGenesis: (state, action) => {
      state.loading = false;
      state.businessGenesis = action.payload;
    },
    companyListType: (state) => {
      state.loading = true;
    },
    setCompanyListType: (state, action) => {
      state.loading = false;
      state.companyListType = action.payload;
    },
    getCompanyProfileInfo: (state) => {
      state.loading = true;
    },
    setGetCompanyProfileInfo: (state, action) => {
      state.loading = false;
      state.companyProfileInfo = action.payload;
    },
    editProfile: (state) => {
      state.loading = true;
    },
    setEditProfile: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
    },
    companyEditProfile: (state) => {
      state.loading = true;
    },
    setCompanyEditProfile: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
      state.uploadbanner = action.payload?.user?.user_company_information;
    },
    companyUpdateLogoBanner: (state) => {
      state.loading = true;
    },
    setCompanyUpdateLogoBanner: (state, action) => {
      state.loading = false;
      state.companyUpdateLogoBanner = action.payload;
    },
    addCertificates: (state) => {
      state.loading = true;
    },
    setAddCertificates: (state, action) => {
      state.loading = false;
      state.uploadCertificate = action.payload;
    },
    deleteCertificates: (state) => {
      state.loading = true;
    },
    setDeleteCertificates: (state, action) => {
      state.loading = false;
      state.deleteCertificate = action.payload;
    },
    certificatesList: (state) => {
      state.loading = true;
    },
    setCertificatesList: (state, action) => {
      state.loading = false;
      state.certificatesList = action.payload;
    },
    userSiteAccess: (state) => {
      state.loading = true;
    },
    setUserSiteAccess: (state, action) => {
      state.loading = false;
      state.userSiteAccess = action.payload;
    },
    getSessionId: (state) => {
      state.loading = true;
    },
    setGetSessionId: (state, action) => {
      state.loading = false;
      state.memeberShipId = action.payload;
    },
    updateMemberShipAmount: (state) => {
      state.loading = true;
    },
    setUpdateMemberShipAmount: (state, action) => {
      state.loading = false;
      state.memberShipAmount = action.payload;
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
      state.userInfo = action.payload;
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
      state.userInfo = action.payload;
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
        state.userInfo.user = action.payload;
    },
    searchCompanyUserFun: (state, action) => {
      state.loading = true;
    },
    setSearchCompanyUser: (state, action) => {
      state.loading = false;
      state.searchCompanyUsers = action.payload
    },
    updateUserStep :  (state, action) => {
      state.userStep = action.payload ?? state.userStep;
    },
    onErrorStopLoad: (state) => {
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  userLogin,
  setUploadImage,
  uploadImage,
  setUserLogin,
  userSignUp,
  setUserSignUp,
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
