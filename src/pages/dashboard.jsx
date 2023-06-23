export default function Dashboard() {
  return (
    <main className="min-h-[calc(100vh-153px)] bg-[#12002b] flex flex-col items-center gap-6">
      <h1 className="text-white text-center text-3xl font-semibold mt-6">
        Welcome back <br /> Tony Jarvis!
      </h1>
      <div class="py-2 px-3 bg-[#00bc77] border border-[#00bc77] text-white text-sm">
        Edit Name
      </div>
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
