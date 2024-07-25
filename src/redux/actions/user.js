import axios from "axios";
import { server } from "../../server";
import { loadUserRequest, loadUserSuccess, loadUserFailure } from "../reducers/user";

export const loadUser = () => async (dispatch) => {
  dispatch(loadUserRequest());
  try {
    const { data } = await axios.get(`${server}/user/getuser`, { withCredentials: true });
    dispatch(loadUserSuccess(data.user));
  } catch (error) {
    dispatch(loadUserFailure(error.response.data.message));
  }
};
