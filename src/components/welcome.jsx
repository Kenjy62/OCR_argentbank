// Required
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { userProfile } from "../store/user";

export default function Welcome() {
  // Redux State
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // States
  const [isEditable, setIsEditable] = useState(false);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);

  // Update Profil
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
    <>
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
    </>
  );
}
