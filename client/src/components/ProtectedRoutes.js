import { useEffect } from "react";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SetUser } from "../redux/usersSlice";
import { ShowLoading, HideLoading } from "../redux/loaderSlice";
import { useCookies } from "react-cookie";
import DefaultLayout from "./DefaultLayout";
import axios from "axios";

const ProtectedRoutes = ({ children }) => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.jwt) {
        navigate("/login");
      } else {
        dispatch(ShowLoading());
        try {
          const { data } = await axios.post(
            "http://localhost:5000/api",
            {},
            {
              withCredentials: true,
            }
          );
          dispatch(HideLoading());
          if (!data.status) {
            removeCookie("jwt");
            navigate("/login");
            message.error("You have been logged out");
          } else {
            dispatch(SetUser(data.user));
            console.log(data.user);
          }
        } catch (error) {
          dispatch(HideLoading());
          message.error("An error occurred. Please try again.");
        }
      }
    };
    verifyUser();
  }, [cookies.jwt, navigate, removeCookie, dispatch]);

  return user ? <DefaultLayout>{children}</DefaultLayout> : null;
};

export default ProtectedRoutes;