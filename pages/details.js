import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Details() {
  const { data: session } = useSession();
  const [back, goback] = useState(0);
  const mail = session.user.email;
  const [name, setName] = useState();
  const [notes, setNotes] = useState("what the");
  const [age, setAge] = useState();
  const [mc, setMc] = useState();
  const router = useRouter();

  async function handleEnter(e) {
    e.preventDefault();
    const data = { name, age, mc, mail, notes };
    await axios.post("/api/details", data);
    goback(1);
  }
  if (back) {
    router.push("/docai");
  }
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div class="max-w-md mx-auto p-8 bg-gray-800 rounded-md shadow-md form-container">
        <h2 class="text-2xl font-semibold text-white mb-6">
          Enter your details
        </h2>
        <form
          action="https://fabform.io/f/insert-form-id"
          onSubmit={handleEnter}
          method="POST"
        >
          <div class="mb-4">
            <label
              for="name"
              class="block text-gray-300 text-sm font-bold mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(ev) => {
                setName(ev.target.value);
              }}
              id="name"
              name="name"
              placeholder="John Doe"
              required
              class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
            />
          </div>
          <div class="mb-4">
            <label
              for="email"
              class="block text-gray-300 text-sm font-bold mb-2"
            >
              Your Age
            </label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(ev) => {
                setAge(ev.target.value);
              }}
              name="age"
              placeholder="37"
              required
              class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
            />
          </div>
          <div class="mb-6">
            <label
              for="message"
              class="block text-gray-300 text-sm font-bold mb-2"
            >
              Your Medical condition
            </label>
            <textarea
              id="message"
              value={mc}
              onChange={(ev) => {
                setMc(ev.target.value);
              }}
              name="message"
              rows="4"
              placeholder="tell us in detail about your medical conditions and rehabiliation"
              required
              class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
            ></textarea>
          </div>
          <button
            type="submit"
            class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
            Enter
          </button>
          <p class="mt-5 text-gray-300">
            If you are not a fan of forms you can email us instead{" "}
          </p>
        </form>
      </div>
    </div>
  );
}
