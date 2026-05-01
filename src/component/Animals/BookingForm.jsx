"use client";
import React, { useState } from "react";
import { GiConfirmed } from "react-icons/gi";
import { Bounce, toast } from "react-toastify";

const BookingForm = () => {
    const [clicked, setClicked] = useState(false);
  const handle_form_book_subn = (e) => {
    e.preventDefault();
    console.log(e);
    e.target.reset();
    setClicked(true);
    toast.success("🦄 Booking Successful!", {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  return (
    <div>
      <button
        onClick={() => document.getElementById("my_modal_5").showModal()}
        className="cursor-pointer w-full flex items-center justify-center gap-2 py-3 bg-[#FDAB03]  hover:bg-orange-500 text-slate-900 hover:text-white font-bold rounded-md text-sm transition-colors duration-200 uppercase tracking-wider"
      >
        <GiConfirmed className="text-xl" /> Book Now
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="modal-action mt-0 mb-4">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
          <div className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-xl border border-gray-100 sm:p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Contact Information
              </h2>
              {
                (clicked) && <p className="badge badge-primary badge-soft my-4">Your booking has been successfull</p>
              }
              <p className="mt-2 text-sm text-gray-500">
                Please fill in the details below to complete your booking.
              </p>
            </div>

            <form
              onSubmit={(e) => handle_form_book_subn(e)}
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Full Name
                </label>
                <div className="mt-1.5">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Email Address
                  </label>
                  <div className="mt-1.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Phone Number
                  </label>
                  <div className="mt-1.5">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder="+88 (017) 29-123254"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Address
                </label>
                <div className="mt-1.5">
                  <textarea
                    name="address"
                    id="address"
                    rows={3}
                    placeholder="Street address, apartment, or suite"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out resize-none"
                    required
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="cursor-pointer w-full flex items-center justify-center gap-2 py-3 bg-[#FDAB03]  hover:bg-orange-500 text-slate-900 hover:text-white font-bold rounded-md text-sm transition-colors duration-200 uppercase tracking-wider"
                >
                  <GiConfirmed className="text-xl" /> Book
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default BookingForm;
