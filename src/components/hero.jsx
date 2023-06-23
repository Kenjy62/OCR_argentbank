export default function Hero() {
  return (
    <div className="hero h-[300px] md:h-[400px] bg-hero flex md:block justify-center items-center">
      <div className="hero--content bg-white absolute py-6 px-6 box-border max-w-[300px] md:max-w-[400px] md:right-20 md:top-32">
        <span className="block  text-base font-semibold md:text-2xl">
          No fees.
        </span>
        <span className="block  text-base font-semibold md:text-2xl">
          No minimum deposit.
        </span>
        <span className="block  text-base font-semibold md:text-2xl">
          High interest rates.
        </span>
        <span className="block py-3 text-sm md:text-lg">
          Open a savings account with Argent Bank today!
        </span>
      </div>
    </div>
  );
}
