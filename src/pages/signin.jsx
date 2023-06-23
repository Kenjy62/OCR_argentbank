import { Link } from "react-router-dom";

export default function Signin() {
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
            />
          </div>
          <div>
            <span className="font-bold text-[#2c3e50]">Password</span>
            <input
              className="p-2 block border border-black bg-white"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex flex-row gap-4">
            <input type="checkbox" />{" "}
            <span className="text-[#2c3e50]">Remember me</span>
          </div>
          <Link to="/dashboard">
            <div className="w-full p-2 text-center bg-[#00bc77] text-white font-bold cursor-pointer">
              <u>Sign In</u>
            </div>
          </Link>
        </form>
      </div>
    </div>
  );
}
