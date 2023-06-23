export default function Card({ icon, text, title }) {
  return (
    <div className="flex-1 flex flex-col items-center gap-6 p-4">
      <div>
        <div className="rounded-full border-8 border-[#00bc77] flex justify-center items-center p-1">
          <img className="h-28 w-28" src={icon} />
        </div>
      </div>
      <div className="flex gap-3 flex-col">
        <span className="block text-center text-2xl font-semibold">
          {title}
        </span>
        <span className="block text-center">{text}</span>
      </div>
    </div>
  );
}
