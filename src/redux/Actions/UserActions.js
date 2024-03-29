import { axiosInstance } from "../../constants/axiosInstance";
import { selectProgressBarState } from "./ProgressBarActions";

export const sendContactUsMessage = (fullName, companyName, value, email, message, navigate, alert) => {
  return async (dispatch) => {
    dispatch(selectProgressBarState(true));
    const res = await axiosInstance.post("/api/v1/contacts/sendcontactmail", {
      fullName: fullName,
      companyName: companyName,
      emailId :email,
      phoneNumber : value,
      message
    });
    if (res.data.success) {
      dispatch(selectProgressBarState(false));
        alert.show("Message Send Successfully");
    } else {
        dispatch(selectProgressBarState(false));
        alert.show(res.data.message.toString());
    }
  };
};