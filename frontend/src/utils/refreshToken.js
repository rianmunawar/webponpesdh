import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const navigate = useNavigate;
export default async function refreshToken() {
  const endpoint = process.env.REACT_APP_ENDPOINT;
  try {
    const token = Cookies.get("token");
    const decoded = jwt_decode(token);
    console.log(decoded);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      const newToken = await axios.get(`${endpoint}/user/token`);
      Cookies.set("token", newToken.data.payload.token);
    }
  } catch (error) {}
}
