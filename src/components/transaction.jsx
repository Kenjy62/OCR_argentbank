// Components
import Button from "./button";

export default function Transaction({ id, balance }) {
  return (
    <div className="bg-white py-5 px-6 flex gap-4 flex-col md:flex-row justify-between">
      <div className="flex flex-col">
        <span className="text-[#2c3e50]">Argent Bank Checking (x{id})</span>
        <span className="text-4xl font-semibold text-[#2c3e50]">
          ${balance}
        </span>
        <span className="text-[#2c3e50]">Available Balance</span>
      </div>
      <div className="flex flex-col items-center md:justify-center md:items-center">
        <Button>View transaction</Button>
      </div>
    </div>
  );
}
