// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   login: sessionStorage.getItem("token"),
// };

// const loginSlice = createSlice({
//   name: "login",
//   initialState,
//   reducers: {
//     login: (state, action) => {
//       fetch("https://fakestoreapi.com/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "Application/json",
//         },
//         body: JSON.stringify({
//           username: "mor_2314",
//           password: "83r5^_",
//         }),
//       })
//         .then((res) => res.json())
//         .then((json) => {
//           sessionStorage.setItem("token", json.token);
//           state.login = json.token;
//         });
//     },
//   },
// });
// export const { login } = loginSlice.actions;

// export default loginSlice.reducer;
