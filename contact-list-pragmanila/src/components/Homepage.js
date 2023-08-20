import React, { useState } from "react";

//components
import TableHeader from "./table_header";
import TableRow from "./tableRow";
import AddUserModal from "./AddUserModal";

import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Homepage() {
  // const userList = [
  //   {
  //     id: 1,
  //     firstName: "Theresh Mae",
  //     middleName: "Ramos",
  //     lastName: "Epino",
  //     phoneNumber: "09123456789",
  //     email: "thrmsmae@gmail.com",
  //   },
  //   {
  //     id: 2,
  //     firstName: "Christian John",
  //     middleName: "Dery",
  //     lastName: "Roa",
  //     phoneNumber: "09424566332",
  //     email: "roacj@gmail.com",
  //   },
  //   {
  //     id: 3,
  //     firstName: "Cristine Joy",
  //     middleName: "Dery",
  //     lastName: "Roa",
  //     phoneNumber: "09432565433",
  //     email: "tinroa@gmail.com",
  //   },
  //   {
  //     id: 4,
  //     firstName: "Cristy",
  //     middleName: "Dery",
  //     lastName: "Roa",
  //     phoneNumber: "09643213564",
  //     email: "cristyroa@gmail.com",
  //   },
  //   {
  //     id: 5,
  //     firstName: "Josepino",
  //     middleName: "Dery",
  //     lastName: "Roa",
  //     phoneNumber: "09232454324",
  //     email: "jroa@gmail.com",
  //   },
  // ];

  const [addUserModal, showAddUserModal] = useState(false);
  //const [editUserModal, showEditUserModal] = useState(false);

  const userList = useSelector((store) => store.users);

  const nav = useNavigate();
  const dispatch = useDispatch();

  //console.log(userList);

  return (
    <div>
      <div className="pt-20 ml-64 flex flex-col items-baseline">
        <button
          className="px-5 py-2  bg-gray-800 text-slate-50 rounded-full font-semibold"
          onClick={() => {
            showAddUserModal(true);
            //nav("/add-User");
          }}
        >
          Add User
        </button>
      </div>

      <div className="flex flex-col items-center ">
        <table className="mt-5 ">
          <thead className="text-center text-white bg-gray-500 border-b-4 border-gray-800">
            <TableHeader />
          </thead>

          <tbody className=" text-center ">
            <TableRow
              className=" "
              userList={userList}
              nav={nav}
              dispatch={dispatch}
              
            />
          </tbody>
        </table>

       <AddUserModal addUserModal={addUserModal} onClose={() => showAddUserModal(false)}/>
      </div>
    </div>
  );
}

export default Homepage;
