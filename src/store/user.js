import { createSlice } from "@reduxjs/toolkit";

var storedUser = localStorage.getItem("user");

if (storedUser) {
  storedUser = JSON.parse(storedUser);
}

export const userSlice = createSlice({
  name: "user",
  initialState: {
    connected: storedUser ? storedUser.connected : false,
    token: storedUser ? storedUser.token : null,
    email: storedUser ? storedUser.email : null,
    firstName: null,
    lastName: null,
  },
  reducers: {
    userLogin: (state, action) => {
      state.connected = true;
      state.email = action.payload.email;
      state.token = action.payload.body.token;
      localStorage.setItem("user", JSON.stringify(state));
    },

    userLogout: (state, action) => {
      localStorage.removeItem("user");
      state.connected = false;
      state.email = null;
      state.token = null;
    },
    userProfile: (state, action) => {
      state.firstName = action.payload.body.firstName;
      state.lastName = action.payload.body.lastName;
    },
  },
});

export const { userLogin, userLogout, userProfile } = userSlice.actions;

export default userSlice.reducer;
