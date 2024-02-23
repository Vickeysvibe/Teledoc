import Navbar from "@/components/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className=" w-screen flex justify-center">
        <div style={{ height: "830px" }} className="w-3/4 bg-white ">
          <div className="w-full h-1/2 bg-white flex items-center justify-evenly">
            <Link
              href={"/profile"}
              style={{ height: "55%", width: "20%" }}
              className="bg-slate-400  rounded-3xl"
            >
              <div className=" w-full h-3/5 flex justify-center items-center">
                <img
                  className="h-20 w-20 rounded-full"
                  src="https://plus.unsplash.com/premium_photo-1669748156838-33fda144e8dd?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJvcGljYWx8ZW58MHx8MHx8fDA%3D"
                ></img>
              </div>
              <h2 className=" text-center w-full"> Name </h2>
              <h2 className=" text-center w-full"> Age </h2>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
