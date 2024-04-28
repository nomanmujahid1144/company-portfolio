import { axiosInstance } from "../../constants/axiosInstance";
import { selectProgressBarState } from "./ProgressBarActions";

export const sendContactUsMessage = (fullName, companyName, value, email, message, navigate, toast, setcredentials, setValue) => {
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
      setcredentials({
        fullName: '',
        companyName: '',
        subject: '',
        email: '',
        message: "",
      })
      setValue('');
      toast("Message Send Successfully");
    } else {
        dispatch(selectProgressBarState(false));
        alert.show(res.data.message.toString());
    }
  };
};