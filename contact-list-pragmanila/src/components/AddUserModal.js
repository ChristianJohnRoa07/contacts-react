import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/counterSlice";
import { useNavigate } from "react-router-dom";

function AddUserModal({ addUserModal, onClose }) {
  const [errorTrigger, setErrorTrigger] = useState(false);

  const dispatch = useDispatch();
  const nav = useNavigate();
  const [values, setValues] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  });

  const handleAddUser = () => {
    try {
      if (
        values.firstName.length <= 0 ||
        values.middleName.length <= 0 ||
        values.lastName.length <= 0 ||
        values.phoneNumber.length <= 0 ||
        values.email.length <= 0
      ) {
        setErrorTrigger(true);
      } else {
        setValues({
          firstName: "",
          middleName: "",
          lastName: "",
          phoneNumber: "",
          email: "",
        });

        console.log(values);

        dispatch(
          addUser({
            id: uuidv4(),
            firstName: values.firstName,
            middleName: values.middleName,
            lastName: values.lastName,
            phoneNumber: values.phoneNumber,
            email: values.email,
          })
        );

        
        setErrorTrigger(false);
        onClose();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancelButton = () => {
    setValues({
      firstName: "",
      middleName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
    });
    onClose();
    setErrorTrigger(false);
  };

  if (!addUserModal) return null;
  return (
    <div className="fixed inset-0 bg-slate-600 bg-opacity-60 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-slate-300 rounded-lg w-auto h-auto px-10 pt-5 pb-5 flex flex-col text-left">
        <div className=" ">
          <span className=" font-bold text-xl">Add User</span>
        </div>

        {errorTrigger ? (
          <div className=" pt-3">
            <span className="text-red-600 font-bold text-xl">
              Please enter all fields
            </span>
          </div>
        ) : (
          ""
        )}

        <div className="py-5 flex flex-col">
          <div className="pb-5">
            <label
              htmlFor="small-input"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              First Name
            </label>
            <input
              value={values.firstName}
              onChange={(e) =>
                setValues({ ...values, firstName: e.target.value })
              }
              type="text"
              id="small-input"
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="pb-5">
            <label
              htmlFor="small-input"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Middle Name
            </label>
            <input
              value={values.middleName}
              onChange={(e) =>
                setValues({ ...values, middleName: e.target.value })
              }
              type="text"
              id="small-input"
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="pb-5">
            <label
              htmlFor="small-input"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Last Name
            </label>
            <input
              value={values.lastName}
              onChange={(e) =>
                setValues({ ...values, lastName: e.target.value })
              }
              type="text"
              id="small-input"
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="pb-5">
            <label
              htmlFor="small-input"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Phone Number
            </label>
            <input
              value={values.phoneNumber}
              onChange={(e) =>
                setValues({ ...values, phoneNumber: e.target.value })
              }
              type="text"
              id="small-input"
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="">
            <label
              htmlFor="small-input"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Email
            </label>
            <input
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              type="text"
              id="small-input"
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
        <div className="flex gap-5">
          <button
            onClick={handleAddUser}
            className="px-5 py-2  bg-green-900 text-slate-100 rounded-full font-semibold"
          >
            Submit
          </button>
          <button
            onClick={handleCancelButton}
            className="px-5 py-2  bg-red-900 text-slate-100 rounded-full font-semibold"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddUserModal;
