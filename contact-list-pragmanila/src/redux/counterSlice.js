import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  // {
  //   id: 1,
  //   firstName: "Theresh Mae",
  //   middleName: "Ramos",
  //   lastName: "Epino",
  //   phoneNumber: "09123456789",
  //   email: "thrmsmae@gmail.com",
  // },
  // {
  //   id: 2,
  //   firstName: "Christian John",
  //   middleName: "Dery",
  //   lastName: "Roa",
  //   phoneNumber: "09424566332",
  //   email: "roacj@gmail.com",
  // },
  // {
  //   id: 3,
  //   firstName: "Cristine Joy",
  //   middleName: "Dery",
  //   lastName: "Roa",
  //   phoneNumber: "09432565433",
  //   email: "tinroa@gmail.com",
  // },
  // {
  //   id: 4,
  //   firstName: "Cristy",
  //   middleName: "Dery",
  //   lastName: "Roa",
  //   phoneNumber: "09643213564",
  //   email: "cristyroa@gmail.com",
  // },
  // {
  //   id: 5,
  //   firstName: "Josepino",
  //   middleName: "Dery",
  //   lastName: "Roa",
  //   phoneNumber: "09232454324",
  //   email: "jroa@gmail.com",
  // },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
      // console.log(action);
    },
    editUser: (state, action) => {
      const { id, firstName, middleName, lastName, phoneNumber, email } =
        action.payload;

      const existingUser = state.find((user) => user.id === id);
      if(existingUser){
        existingUser.firstName = firstName;
        existingUser.middleName = middleName;
        existingUser.lastName = lastName;
        existingUser.phoneNumber = phoneNumber;
        existingUser.email = email;
      }
    },
    deleteUser: (state, action) => {
      // console.log("delete " + action.payload);
      const { id } = action.payload;
      const userExisting = state.find((user) => user.id === id);
      //state.splice(deleteId, 1);
      if (userExisting) {
        return state.filter((user) => user.id !== id);
      }
    },
  },
});

export const { addUser, editUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
