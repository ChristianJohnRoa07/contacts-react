import React, { useState } from "react";

//components
import TableHeader from "./table_header";
import TableRow from "./tableRow";
import AddUserModal from "./AddUserModal";

import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Homepage() {
 

  const [addUserModal, showAddUserModal] = useState(false);
  

  const userList = useSelector((store) => store.users);

  const nav = useNavigate();
  const dispatch = useDispatch();

  

  return (
    <div>
      <div className="pt-20 ml-64 flex flex-col items-baseline">
        <button
          className="px-5 py-2  bg-gray-800 text-slate-50 rounded-full font-semibold"
          onClick={() => {
            showAddUserModal(true);
           
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
