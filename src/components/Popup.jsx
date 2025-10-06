import React, { useState } from "react";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";

export default function Popup({ setPopup }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");
  const [budget, setBudget] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async(e) => {
    if(!name || !email || !phone || !details || !budget) return toast.error("Please fill all the fields");
    const checkEmail = email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    if(!checkEmail) return toast.error("Please enter a valid email address");
    if(name.length < 3) return toast.error("Name must be at least 3 characters long");
    if(phone.length < 9) return toast.error("Phone number must be at least 9 digits long");
    const checkBudget = budget.match(/^[0-9]+$/);
    if(!checkBudget) return toast.error("Please enter a valid budget");
    console.log(name, email, phone, details, budget);


    e.preventDefault();
    setLoading(true);

    const templateParams = {
      name,
      email,
      phone,
      details,
      budget,
    };
    try {
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,   // e.g. service_123abc
        import.meta.env.VITE_TEMPLATE_ID,  // e.g. template_xyz456
        templateParams,
        import.meta.env.VITE_PUBLIC_KEY    // e.g. abc123XYZ
      );

      console.log("Email sent successfully!");
      toast.success("Email sent successfully!");
      setTimeout(() => setPopup(false), 1000); // close after 2s
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setPopup(false);
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-[#212020] p-6 rounded-2xl shadow-lg w-[500px] max-sm:w-[300px]">
        <h2 className="text-xl font-semibold mb-4 text-center text-[#896CFE]">
          Contact Form
        </h2>

        <div className="flex flex-col space-y-3">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-[#896CFE]"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-[#896CFE]"
          />

          <input
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="p-2 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-[#896CFE]"
          />

          <textarea
            placeholder="Details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className="p-2 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-[#896CFE]"
          />

          <input
            type="text"
            placeholder="Budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="p-2 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-[#896CFE]"
          />
        </div>

        <div className="flex justify-end mt-5 space-x-3">
          <button
            onClick={handleCancel}
            className="px-4 py-2 rounded-lg bg-gray-600 hover:bg-gray-500"
          >
            Cancel
          </button>
          <button
            onClick={handleSend}
            className="px-4 py-2 rounded-lg bg-[#896CFE] hover:opacity-90"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
}
