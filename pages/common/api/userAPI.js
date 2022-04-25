import axios from "axios";
const SERVER = `http://localhost:8080`
export const userSignin = SigninRequest => axios.post(`${SERVER}/member/login`, logingRequest)
export const userSignup = SignupRequest => axios.post(`${SERVER}/member/login`, logingRequest)