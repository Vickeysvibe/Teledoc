import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-screen h-24 flex justify-center items-center bg-slate-500 mb-14">
      <div className="w-96 h-20 flex items-center justify-around">
        <Link className=" text-2xl text-black" href={"/profile"}>
          TeleDoc
        </Link>
      </div>
    </nav>
  );
}
