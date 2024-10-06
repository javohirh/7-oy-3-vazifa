import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getToken = createAsyncThunk("getToken", async () => {
  const res = await fetch("https://fakestoreapi.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify({
      username: "mor_2314",
      password: "83r5^_",
    }),
  });
  const data = await res.json();
  localStorage.setItem("token", data.token);
  return data.token;
});
const initialState = {
  login: localStorage.getItem("token") || "",
  loading: false,
  error: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    clearToken: (state, action) => {
      localStorage.removeItem("token");
      state.login = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getToken.pending, (state) => {
        (state.error = ""), (state.loading = true);
      })
      .addCase(getToken.fulfilled, (state, action) => {
        (state.error = ""),
          (state.loading = false),
          (state.login = action.payload);
      })
      .addCase(getToken.rejected, (state, action) => {
        (state.error = action.error.message), (state.loading = false);
      });
  },
});
export const { clearToken } = loginSlice.actions;
export default loginSlice.reducer;
