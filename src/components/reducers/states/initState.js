export const contextInitialState = {
  user: null,
  auth: false,
  role: null,
  notifications: [],
  isReady: false,
};

export const OTPAuthState = {
  otp: ["", "", "", "", "", ""],
  otpError: [],
  isResendButtonDisabled: true,
  timer: 60,
  serverOtp: "",
  loading: false,
};

export const ChatState = {
  selectedUser: null,
  newMessage: "",
  messages: [],
  isReady: false,
  typing: false,
  
}