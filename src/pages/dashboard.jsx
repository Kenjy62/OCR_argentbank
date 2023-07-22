import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userProfile } from "../store/user";

export default function Dashboard() {
  // Redux State
  const user = useSelector((state) => state.user);

  // States
  const [isEditable, setIsEditable] = useState(false);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);

  
  const dispatch = useDispatch();

  // Loading Profile
  useEffect(() => {
    fetch(`http://localhost:3001/api/v1/user/profile`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + user.token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 200) {
          dispatch(userProfile({ ...data }));
        }
      });
  }, []);

  const update = () => {
    fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + user.token,
        "Content-type": "application/json",
      },
      body: JSON.stringify({ firstName: firstName, lastName: lastName }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 200) {
          dispatch(
            userProfile({ body: { firstName: firstName, lastName: lastName } })
          );
          setIsEditable(false);
        }
      });
  };

  return (
    <main className="min-h-[calc(100vh-153px)] bg-[#12002b] flex flex-col items-center gap-6">
      <div className="flex flex-col my-6">
        <h1 className="text-white text-center text-3xl font-semibold">
          Welcome back
        </h1>
        {!isEditable ? (
          <h1 className="text-white text-center text-3xl font-semibold">
            {user.firstName} {user.lastName}
          </h1>
        ) : (
          <div className="flex flex-row gap-4">
            <>
              <input
                type="text"
                placeholder={user.firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder={user.lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </>
          </div>
        )}
      </div>
      {!isEditable ? (
        <div
          onClick={() => setIsEditable(true)}
          className="py-2 px-3 bg-[#00bc77] border border-[#00bc77] text-white text-sm cursor-pointer"
        >
          Edit Name
        </div>
      ) : (
        <div className="flex flex-row gap-4">
          <div
            onClick={update}
            className="py-2 px-3 bg-[#00bc77] border border-[#00bc77] text-white text-sm cursor-pointer"
          >
            Save
          </div>
          <div
            onClick={() => setIsEditable(false)}
            className="py-2 px-3 bg-[#00bc77] border border-[#00bc77] text-white text-sm cursor-pointer"
          >
            Cancel
          </div>
        </div>
      )}
      <div className="w-[70%] flex flex-col gap-6">
        <div className="bg-white py-5 px-6 flex flex-row justify-between">
          <div className="flex flex-col">
            <span className="text-[#2c3e50]">Argent Bank Checking (x8349)</span>
            <span className="text-4xl font-semibold text-[#2c3e50]">
              $2,082.79
            </span>
            <span className="text-[#2c3e50]">Available Balance</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div class="py-1 px-5 bg-[#00bc77] border border-[#00bc77] text-white text-lg font-semibold">
              View transactions
            </div>
          </div>
        </div>
        <div className="bg-white py-5 px-6 flex flex-row justify-between">
          <div className="flex flex-col">
            <span className="text-[#2c3e50]">Argent Bank Checking (x6712)</span>
            <span className="text-4xl font-semibold text-[#2c3e50]">
              $10,928.42
            </span>
            <span className="text-[#2c3e50]">Available Balance</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div class="py-1 px-5 bg-[#00bc77] border border-[#00bc77] text-white text-lg font-semibold">
              View transactions
            </div>
          </div>
        </div>
        <div className="bg-white py-5 px-6 flex flex-row justify-between">
          <div className="flex flex-col">
            <span className="text-[#2c3e50]">Argent Bank Checking (x8349)</span>
            <span className="text-4xl font-semibold text-[#2c3e50]">
              $184.30
            </span>
            <span className="text-[#2c3e50]">Current Balance</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div class="py-1 px-5 bg-[#00bc77] border border-[#00bc77] text-white text-lg font-semibold">
              View transactions
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
