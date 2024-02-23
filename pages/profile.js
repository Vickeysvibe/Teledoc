import Navbar from "@/components/navbar";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Profile() {
  const [userData, setUserData] = useState({
    name: "",
    age: "",
    mc: "",
    notes: "",
  });
  const router = useRouter();
  const [tablet, setTablet] = useState([]);
  const [tracker, setTracker] = useState([]);
  const [back, goback] = useState();
  const [hp, setHp] = useState();
  const [sp, setSp] = useState();
  const [sug, setSug] = useState();
  const [feel, setFeel] = useState();
  const [mail, setMail] = useState();
  const [noti, setnoti] = useState();
  const { data: session } = useSession();
  const notes = "Bileave the process";

  useEffect(() => {
    if (session) {
      const fetchData = async () => {
        try {
          const email = "yorichibro@gmail.com";
          setMail(email);
          const response = await axios.get(`/api/details?mail=${email}`);
          setUserData(response.data[0]);
          console.log(response.data);
          const response1 = await axios.get("/api/tablet");
          const allTablet = response1.data;
          const userTablet = allTablet.filter(
            (product) => product.mail === "yorichibro@gmail.com"
          );
          setTablet(userTablet);
          console.log(tablet);
          const response2 = await axios.get("/api/tracker");
          setTracker(response2.data[0]);
          console.log(tracker);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };
      fetchData();
    }
  }, [session]);

  async function handleNoti(e) {
    e.preventDefault();
    const data = { noti };
    console.log(data);
    await axios.post("/api/noti", data);
  }
  if (back) {
    router.push("/profile");
  }

  return (
    <div>
      <Navbar />
      <div className="w-screen flex justify-center">
        <div style={{ height: "830px" }} className="w-3/4">
          <div className="w-full h-1/2 flex items-center justify-evenly">
            <div
              style={{ height: "90%", width: "45%" }}
              className="rounded-3xl bg-slate-300"
            >
              <h1 className="font-bold pl-10 pt-16 text-6xl">
                Name : {userData.name}
              </h1>
              <h3 className="font-semibold pt-12 pl-12 text-4xl">
                Age : {userData.age}
              </h3>
              <p className="font-semibold pl-12 pt-12 text-4xl">
                Medical Conditions : <br />
                <br /> {userData.mc}
              </p>
            </div>
            <Link
              href={"/noteadd"}
              style={{ height: "90%", width: "45%" }}
              className="rounded-3xl bg-slate-300"
            >
              <h1 className="w-full h-1/5 text-center font-bold pt-6 text-3xl">
                Notes
              </h1>
              <div className="w-full h-4/5 flex justify-center items-center">
                {!notes ? (
                  <button className="btn-primary">Add Notes</button>
                ) : (
                  <p>{notes}</p>
                )}
              </div>
            </Link>
          </div>
          <div className="w-full h-1/2 flex items-center justify-evenly">
            <div
              style={{ height: "90%", width: "45%" }}
              className="rounded-3xl bg-slate-300"
            >
              <h1 className="w-full h-1/5 text-center font-bold pt-6 text-3xl">
                Tablets
              </h1>
              <div className="overflow-x-auto flex justify-center items-center relative shadow-md sm:rounded-lg">
                <table className=" w-4/5 text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="py-3 px-6">
                        Count
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Drug
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Time
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tablet.map((tablet, index) => (
                      <tr
                        key={index}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      >
                        <td className="py-4 px-6">{tablet.count}</td>
                        <td className="py-4 px-6">{tablet.name}</td>
                        <td className="py-4 px-6">{tablet.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div
              style={{ height: "90%", width: "45%" }}
              className="flex justify-center items-center rounded-3xl bg-slate-300"
            >
              <div>
                <h1 className="w-full h-1/5 text-center font-bold pt-6 text-3xl">
                  Notification
                </h1>
                <textarea
                  value={noti}
                  onChange={(e) => {
                    setnoti(e.target.value);
                  }}
                  className=" mt-28 w-3/4 rounded-2xl"
                  rows="4"
                  cols="50"
                ></textarea>
                <button onClick={handleNoti} className=" bg-blue-600 w-32 h-10">
                  Send
                </button>
              </div>
            </div>
          </div>
          <div style={{ height: "830px" }} className="w-full bg-white ">
            <div className="w-full h-1/2 bg-slate-100 flex items-center justify-evenly">
              <div
                style={{ height: "55%", width: "20%" }}
                className="bg-slate-300  rounded-3xl"
              >
                <div className=" w-full h-1/4 flex justify-center items-center"></div>
                <h2 className=" text-center w-full">Enter your Heart Rate </h2>
                <div className=" mt-10 h-1/4 flex justify-center items-center">
                  <input
                    type="text"
                    value={tracker.hp}
                    onChange={(e) => {
                      setHp(e.target.value);
                    }}
                    className="  w-20 rounded-2xl"
                  ></input>
                </div>
              </div>

              <div
                style={{ height: "55%", width: "20%" }}
                className="bg-slate-300 rounded-3xl"
              >
                <div className=" w-full h-1/4 flex justify-center items-center"></div>
                <h2 className=" text-center w-full">Enter your SPO2 Value </h2>
                <div className="h-1/4 mt-10 flex justify-center items-center">
                  <input
                    type="var"
                    value={tracker.sp}
                    onChange={(e) => {
                      setSp(e.target.value);
                    }}
                    className="w-20 rounded-2xl"
                    size={6}
                  ></input>
                </div>
              </div>
              <div
                style={{ height: "55%", width: "20%" }}
                className="bg-slate-300 rounded-3xl"
              >
                <div className=" w-full h-1/4 flex justify-center items-center"></div>
                <h2 className=" text-center w-full">Enter your Sugar Rate </h2>
                <div className="h-1/4 mt-10 flex justify-center items-center">
                  <input
                    value={tracker.sug}
                    onChange={(e) => {
                      setSug(e.target.value);
                    }}
                    type="var"
                    className="w-20 rounded-2xl"
                    size={6}
                  ></input>
                </div>
              </div>
              <div
                style={{ height: "55%", width: "20%" }}
                className="bg-slate-300 rounded-3xl"
              >
                <div className=" w-full h-1/4 flex justify-center items-center"></div>
                <h2 className=" text-center w-full">How Do You Feel Now </h2>
                <div className="h-1/4 flex justify-center items-center">
                  <textarea
                    value={tracker.feel}
                    onChange={(e) => {
                      setFeel(e.target.value);
                    }}
                    className=" mt-28 w-3/4 rounded-2xl"
                    rows="4"
                    cols="50"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
