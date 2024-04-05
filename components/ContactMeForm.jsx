import { useState, useEffect } from "react";
import Spinner from "./spinner";
import { BsFillSendFill } from "react-icons/bs";
import { BsFillEnvelopeExclamationFill } from "react-icons/bs";
import { BsFillHouseDoorFill } from "react-icons/bs";

import { BsWhatsapp } from "react-icons/bs";
import Link from "next/link";

function ContactMeForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    callSign: false,
    phoneNumber: false,
    subject: false,
    message: false,
  });
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  // handle touched and validations
  //   const [touched, setTouched] = useState({})
  //   const [error, setError] = useState({})

  const initialFormFieldValues = {
    name: "",
    email: "",
    callSign: "",
    phoneNumber: "",
    subject: "",
    message: "",
  };
  const [formError, setFormError] = useState({
    name: false,
    email: false,
    callSign: false,
    phoneNumber: false,
    subject: false,
    message: false,
  });
  const [formErrorMessage, setFormErrorMessage] = useState(
    initialFormFieldValues
  );
  const [formState, setFormState] = useState(initialFormFieldValues);

  const validateEmail = (email) => {
    const validEmail = String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    return validEmail;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = async (e) => {
    const { name, value } = e.target;

    // Validate name field
    if (name === "name") {
      if (!value.trim()) {
        setFormError((errors) => ({ ...errors, name: true }));
        setFormErrorMessage((errors) => ({
          ...errors,
          name: "Name is Required",
        }));
      } else {
        setFormErrorMessage((errors) => ({
          ...errors,
          name: "",
        }));
        setFormError((errors) => ({ ...errors, name: false }));
      }
    }
    // Validate email field
    if (name === "email") {
      if (!value.trim() || !validateEmail(value)) {
        setFormError((errors) => ({ ...errors, email: true }));
        setFormErrorMessage((errors) => ({
          ...errors,
          email: "A valid email is Required",
        }));
      } else {
        setFormErrorMessage((errors) => ({
          ...errors,
          email: "",
        }));
        setFormError((errors) => ({ ...errors, email: false }));
      }
    }

    // Validate callSign field
    if (name === "callSign") {
      if (!value.trim()) {
        setFormError((errors) => ({ ...errors, callSign: true }));
        setFormErrorMessage((errors) => ({
          ...errors,
          callSign: "CallSign is Required",
        }));
      } else {
        setFormErrorMessage((errors) => ({
          ...errors,
          callSign: "",
        }));
        setFormError((errors) => ({ ...errors, callSign: false }));
      }
    }

    // Validate phoneNumber field
    if (name === "phoneNumber") {
      if (!value.trim() || !/^\d{10}$/.test(value)) {
        setFormError((errors) => ({ ...errors, phoneNumber: true }));
        setFormErrorMessage((errors) => ({
          ...errors,
          phoneNumber: "Valid phone number is Required",
        }));
      } else {
        setFormErrorMessage((errors) => ({
          ...errors,
          phoneNumber: "",
        }));
        setFormError((errors) => ({ ...errors, phoneNumber: false }));
      }
    }
    // Validate subject field
    if (name === "subject") {
      if (!value.trim()) {
        setFormError((errors) => ({ ...errors, subject: true }));
        setFormErrorMessage((errors) => ({
          ...errors,
          subject: "Subject is Required",
        }));
      } else {
        setFormErrorMessage((errors) => ({
          ...errors,
          subject: "",
        }));
        setFormError((errors) => ({ ...errors, subject: false }));
      }
    }

    // Validate message field
    if (name === "message") {
      if (!value.trim()) {
        setFormError((errors) => ({ ...errors, message: true }));
        setFormErrorMessage((errors) => ({
          ...errors,
          message: "Message is Required",
        }));
      } else {
        setFormErrorMessage((errors) => ({
          ...errors,
          message: "",
        }));
        setFormError((errors) => ({ ...errors, message: false }));
      }
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prevData) => ({
      ...prevData,
      [name]: true,
    }));
    validate(e);
  };

  // console.log("touched", touched);
  // console.log("formErrorMessage", formErrorMessage);
  // console.log("formError", formError);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // set loading to true
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formState),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }).then((res) => {
        if (!res.ok) {
          throw new Error("Failed to send message");
        }
        if (res.ok) {
          setSuccess(true);
          setLoading(false);
          setError(false);
        }
      });
    } catch (error) {
      console.log("err", error);
      setError(true);
      setErrorMessage(error);
      setSuccess(false);
      setLoading(false);
    }

    // Reset form fields after submission
    setFormState(initialFormFieldValues);
  };

  return (
    <div className="flex justify-center">
      {!error && !success && (
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
          <div className="mb-6">
            <label htmlFor="name" className="block text-white-700 mb-2">
              Name
            </label>
            <input
              autoComplete="off"
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your name"
              required
            />
            {formError.name && formErrorMessage.name && (
              <div>
                <p className="text-sm pt-1 text-red-600">
                  {formErrorMessage.name}
                </p>
              </div>
            )}
          </div>
          <div className="mb-6">
            <label htmlFor="callSign" className="block text-white-700 mb-2">
              Call Sign
            </label>
            <input
              autoComplete="off"
              type="text"
              id="callSign"
              name="callSign"
              value={formState.callSign}
              onChange={handleChange}
              onBlur={handleBlur}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your call sign"
              required
            />
            {formError.callSign && formErrorMessage.callSign && (
              <div>
                <p className="text-sm pt-1 text-red-600">
                  {formErrorMessage.callSign}
                </p>
              </div>
            )}
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-white-700 mb-2">
              Email
            </label>
            <input
              autoComplete="off"
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
              required
            />
            {formError.email && formErrorMessage.email && (
              <div>
                <p className="text-sm pt-1 text-red-600">
                  {formErrorMessage.email}
                </p>
              </div>
            )}
          </div>
          <div className="mb-6">
            <label htmlFor="phoneNumber" className="block text-white-700 mb-2">
              Phone Number
            </label>
            <input
              autoComplete="off"
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formState.phoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your phone number"
              required
            />
            {formError.phoneNumber && formErrorMessage.phoneNumber && (
              <div>
                <p className="text-sm pt-1 text-red-600">
                  {formErrorMessage.phoneNumber}
                </p>
              </div>
            )}
          </div>
          <div className="mb-6">
            <label htmlFor="subject" className="block text-white-700 mb-2">
              Subject
            </label>
            <input
              autoComplete="off"
              type="text"
              id="subject"
              name="subject"
              value={formState.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter the subject"
              required
            />
            {formError.subject && formErrorMessage.subject && (
              <div>
                <p className="text-sm pt-1 text-red-600">
                  {formErrorMessage.subject}
                </p>
              </div>
            )}
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-white-700 mb-2">
              Message
            </label>
            <textarea
              autoComplete="off"
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              onBlur={handleBlur}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your message"
              rows="5"
              required
            ></textarea>
            {formError.message && formErrorMessage.message && (
              <div>
                <p className="text-sm pt-1 text-red-600">
                  {formErrorMessage.message}
                </p>
              </div>
            )}
          </div>

          <div className=" w-full ">
            <button
              type="submit"
              disabled={loading}
              className={`flex justify-center items-center w-full focus:outline-none text-white bg-purple-700 border-2 border-purple-700 ${
                !loading && "hover:bg-purple-800 dark:hover:bg-purple-700"
              } focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-[#201d20]  dark:focus:ring-purple-900`}
            >
              {loading && <Spinner />}
              {!loading && (
                <span className="flex  items-center font-bold text-lg ">
                  <span className="px-2">Send</span> <BsFillSendFill />
                </span>
              )}
            </button>
          </div>
        </form>
      )}
      {!error && success && !loading && (
        <div className="max-w-sm p-6 shadow-2xl bg-white border border-gray-200 rounded-lg  dark:bg-[#201d20] dark:border-gray-700">
          <div className="flex justify-center">
            <svg
              className="w-7 h-7  text-gray-500 dark:text-gray-400 mb-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
            </svg>
          </div>

          <h5 className="mb-2 text-2xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">
            Successfully delivered!
          </h5>

          <p className="mb-3 px-7 font-normal text-gray-500 text-justify  dark:text-gray-400">
            Thank you for reaching out! We&apos;ll get back to you as soon as
            possible.
          </p>

          <div className="flex justify-center">
            <Link href="/">
              <button className="flex items-center text-center rounded-lg bg-purple-700 px-5 p-2 text-white ">
                <BsFillHouseDoorFill /> <span className="px-2">Home</span>
              </button>
            </Link>
          </div>
        </div>
      )}
      {error && !loading && (
        <div>
          <div className="max-w-sm p-6 shadow-2xl bg-white border border-gray-200 rounded-lg  dark:bg-[#201d20] dark:border-gray-700">
            <div className="flex justify-center">
              <BsFillEnvelopeExclamationFill className="text-5xl m-3  text-gray-500 dark:text-gray-400" />
            </div>

            <h5 className="mb-2 text-2xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">
              Failed to deliver
            </h5>

            <p className="mb-3 px-7 font-normal text-gray-500 text-justify  dark:text-gray-400">
              Thank you for reaching out! We&apos;re unavailable at the moment.
              Please try again later or{" "}
              <b>contact me via WhatsApp for quicker response</b>.
            </p>

            <div className="flex justify-center">
              <a href="https://wa.me/7388407388">
                <button className="flex items-center text-center rounded-lg bg-purple-700 px-5 p-2 text-white ">
                  <BsWhatsapp /> <span className="px-2">WhatsApp</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactMeForm;
