// Required
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userProfile } from "../store/user";

// components
import Transaction from "../components/transaction";
import Welcome from "../components/welcome";

export default function Dashboard() {
  // Redux State
  const user = useSelector((state) => state.user);

  // Data
  const transactions = [
    {
      id: 8349,
      balance: "2,082.79",
    },
    {
      id: 6712,
      balance: "10,928.42",
    },
    {
      id: 8349,
      balance: "184.30",
    },
  ];

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

  return (
    <main className="min-h-[calc(100vh-153px)] bg-[#12002b] flex flex-col items-center gap-6 py-4">
      <Welcome />
      <div className="w-[70%] flex flex-col gap-6">
        {transactions.map((item) => {
          return (
            <Transaction key={item.id} id={item.id} balance={item.balance} />
          );
        })}
      </div>
    </main>
  );
}
