import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const refreshToken = async () => {
  // const navigate = useNavigate();
  const endpoint = process.env.REACT_APP_ENDPOINT;
  try {
    const token = Cookies.get("token");
    const decoded = jwt_decode(token);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      await axios.get(`${endpoint}/user/token`).then((res) => {
        const { token } = res.data.payload;
        const expInFifteenSeconds = new Date(new Date().getTime() + 15 * 1000);
        Cookies.set("token", token, { expires: expInFifteenSeconds });
      });
    }
  } catch (error) {
    console.error(error);
    // navigate("/user/login");
  }
};

export default refreshToken;
