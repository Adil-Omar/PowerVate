import React, { use, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  //set timeout on notice data

  const [notice, setNotice] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setNotice("");
    }, 5000);
  })
  const handleChange = (e) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!form.name || !form.email || !form.message) return setNotice("Please fill all the fields");;
    if(form.name && form.email && form.message){
      setNotice("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <div>
      <div id="contact" className="MyContainer py-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: heading + contact info */}
          <div className="flex flex-col justify-center">
            <p className="text-base md:text-lg pb-1">
              <span className="text-[#896CFE] pr-2">-</span>Get in touch
            </p>

            <h1 className="text-2xl md:text-3xl font-semibold pt-2">
              <span className="text-[#896CFE]">Contact</span> Us
            </h1>

            <p className="pt-6 text-gray-600 leading-relaxed max-w-md">
              We'd love to hear from you — whether you have a question about the
              app, feedback, or want to partner with us. Use the form to send a
              message or reach us directly by email or phone.
            </p>

            <div className="mt-8 grid gap-6 max-w-md">
              <div className="flex items-center gap-4">
                    {/* on clicking mail icon take to that mail id */}
                <div onClick={() => window.open("mailto:bniben60@gmail.com")} className="w-12 cursor-pointer h-12 flex items-center justify-center rounded-lg bg-[#2B2B2B]">
                  {/* simple email icon */}
                  <svg
                    width="18"
                    height="14"
                    viewBox="0 0 18 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1H17V13H1V1Z"
                      stroke="#FFFFFF"
                      strokeWidth="1.2"
                    />
                    <path
                      d="M1 1L9 8L17 1"
                      stroke="#FFFFFF"
                      strokeWidth="1.2"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-medium">bniben60@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#2B2B2B]">
                  {/* simple phone icon */}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 1.5L4.3 4.1C4.7 4.5 4.9 5.1 4.8 5.7L4.3 8.1C4.2 8.8 4.6 9.4 5.2 9.7L7.1 10.8C8 11.3 9.1 10.9 9.6 10L11.2 7.7C11.7 6.8 11.5 5.6 10.7 4.8L9.2 3.2C8.6 2.6 8.5 1.6 9.1 0.9L10.1 0"
                      stroke="#FFFFFF"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="font-medium">+17276857301</p>
                </div>
              </div>
                {/* on clicking to call us take to phone or call on a number */}
              <div className="pt-2">
                <button onClick={() => window.location.href = "tel:+17276857301"}  className="text-[15px] py-2 px-5 bg-[#896CFE] text-white rounded-[30px] hover:bg-[#E2F163] hover:text-black transition-all duration-200">
                  Call Us
                </button>
              </div>
            </div>
          </div>

          {/* Right: contact form */}
          <div className="bg-white/5 p-6 rounded-2xl shadow-sm">
            <form onSubmit={handleSubmit} className="grid gap-4">
              <label className="flex flex-col">
                <span className="text-sm font-medium pb-1">Name</span>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="px-4 py-3 rounded-xl bg-transparent border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#896CFE]"
                />
              </label>

              <label className="flex flex-col">
                <span className="text-sm font-medium pb-1">Email</span>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@domain.com"
                  type="email"
                  className="px-4 py-3 rounded-xl bg-transparent border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#896CFE]"
                />
              </label>

              <label className="flex flex-col">
                <span className="text-sm font-medium pb-1">Message</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows={6}
                  className="px-4 py-3 rounded-xl bg-transparent border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#896CFE] resize-none"
                />
              </label>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="submit"
                  className="text-[15px] py-3 px-6 bg-[#896CFE] text-white rounded-[30px] hover:bg-[#E2F163] hover:text-black transition-all duration-200"
                >
                  Send Message
                </button>

                <p className="text-sm text-gray-400">
                  We'll reply within 2 business days
                </p>
              </div>

              {notice && <p className="text-sm text-yellow-400">{notice}</p>}
            </form>
          </div>
        </div>

        {/* decorative footer graphic similar to home design */}
        <div className="mt-12 flex justify-center">
          <img src="/Rectangle 6.png" alt="decor" className="opacity-70" />
        </div>
      </div>
      <div className="flex justify-center bg-gray-950 py-8" >
        {/* copyright message from PowerVate */}
        <p className="text-sm text-gray-400">
          &copy; 2025 PowerVate. All rights reserved.
        </p>

      </div>
    </div>
  );
}
