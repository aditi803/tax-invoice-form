const ApiPath = {
  // CREATE_USER: '/api/users',
  // PATCH_USER: '/api/users/2',
  // DELETE_USER: '/api/users/2',

  AuthApiPath: {
    SIGNUP_USER: "/api/v1/users/signup",
    LOGIN_USER: "api/v1/users/login",
    FORGET_PASSWORD_USER: "/api/v1/users/forgot-password",
    CHANGE_PASSWORD: "/api/v1/users/change-password",
    RESET_PASSWORD: "/api/v1/users/reset-password",
    VERIFY_EMAIL: "/api/v1/users/verify-email",
    RESEND_OTP: "/api/v1/users/reset-password",
    USER_INFO: "/api/v1/users/user-info",
    UPLOAD_IMAGE:"/api/v1/users/upload-single-image"
  },

  InvoiceApiPath: {
    ADD_INVOICE: "/api/v1/forms/add-invoice",
    UPDATE_INVOICE: "/api/v1/forms/update-invoice",
    ALL_INVOICE: "/api/v1/forms/get-all-invoice",
    SINGLE_INVOICE: "/api/v1/forms/get-single-invoice",
    DELETE_INVOICE: "/api/v1/forms/delete-invoice/:invoiceId",
  },
};

export default ApiPath;
