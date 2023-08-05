// Required
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// Store Redux
import { userLogin } from "../store/user";

export default function Signin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Redux State
  const user = useSelector((state) => state.user);

  // useState
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // Login Function
  const login = () => {
    fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 200) {
          dispatch(userLogin({ ...data, email: email }));
          navigate("/profile");
        }
      });
  };

  useEffect(() => {
    if (user.connected === true) {
      navigate("/profile");
    }
  }, []);

  return (
    <div className="bg-[#12002b] h-[calc(100vh-153px)] flex">
      <div className="px-10 py-6 ml-auto mr-auto mt-12 bg-white flex flex-col gap-5 max-h-fit h-fit justify-center items-center">
        <i className="text-base fa fa-user-circle text-[#2c3e50]"></i>
        <span className="font-bold text-2xl text-[#2c3e50]">Sign In</span>
        <form className="flex gap-5 flex-col">
          <div>
            <span className="font-bold text-[#2c3e50]">Username</span>
            <input
              className="p-2 block border border-black bg-white"
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <span className="font-bold text-[#2c3e50]">Password</span>
            <input
              className="p-2 block border border-black bg-white"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-row gap-4">
            <input type="checkbox" />{" "}
            <span className="text-[#2c3e50]">Remember me</span>
          </div>
          <div
            className="w-full p-2 text-center bg-[#00bc77] text-white font-bold cursor-pointer"
            onClick={login}
          >
            <u>Sign In</u>
          </div>
        </form>
      </div>
    </div>
  );
}
