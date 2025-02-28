/* eslint-disable no-template-curly-in-string */
import React from "react";
import { Link } from "react-router-dom";

import { deleteUser } from "../redux/counterSlice";

function tableRow(props) {
  const { dispatch, userList } = props;



  const deleteUserFromTable = (id) => {
    dispatch(deleteUser({id}));
  };

  return userList.length ? (
    userList.map((user) => (
      <tr key={user.id} className="hover:shadow-lg ">
        <td className="p-5">{user.firstName} </td>
        <td className="p-5">{user.middleName} </td>
        <td className="p-5">{user.lastName}</td>
        <td className="p-5">{user.phoneNumber}</td>
        <td className="p-5">{user.email}</td>
        <td className="flex flex-row gap-3 p-3">
          <Link to={`editUser/${user.id}`}>
            <button
              className="p-2 transition
              ease-in-out
              delay-20
              hover:-translate-y-1
              hover:scale-110"
            >
              <svg
                className="w-6 h-6 text-green-700 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z" />
                <path d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z" />
              </svg>
            </button>
          </Link>

          <button
            onClick={() => deleteUserFromTable(user.id)}
            className="p-2 transition
              ease-in-out
              delay-20
              hover:-translate-y-1
              hover:scale-110"
          >
            <svg
              className="w-6 h-6 text-red-700 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"
              />
            </svg>
          </button>
        </td>
      </tr>
    ))
  ) : (
    <div className="flex flex-col justify-center ">
      <span className="p-5 text-lg font-bold text-red-800">No Users Found</span>
      <span className="p-5 text-lg font-bold text-red-800">Please add a User</span>
    </div>
  );
}

export default tableRow;
