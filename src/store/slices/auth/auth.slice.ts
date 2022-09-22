import { removeCookie } from './../../../services/cookies';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface userType {
  username: string;
  role: string;
  isLogin: boolean;
  loading: boolean;
  ability:Array<any>
}

const userData: userType = {
  username: "mask",
  role: "admin",
  isLogin: false,
  loading: false,
  ability:[{username: "mask",
  role: "admin",}]
};

interface loginType {
  username: string;
  password: string;
}

export const login = createAsyncThunk("auth/login", async (data: loginType) => {
  try {
    const { username, password } = data;
    console.log(username, password);
    const auth = new Promise<Boolean>((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
    await auth;
    return userData;
  } catch (error) {
    console.error(error);
  }
});

export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    const auth = new Promise<Boolean>((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
    await auth;
    removeCookie('userData')
    return userData;
  } catch (error) {
    console.error(error);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState: userData,
  reducers: {
    pushNoti: (state, action) => {
      console.log(state);
    },
    loginS: (state, action) => {
      state.isLogin = true;
    },
  },
  extraReducers(builder) {
    // assign value in state
    builder.addCase(login.fulfilled, (state, action) => {
      // actions value it return from createAsyncThunk
      state.isLogin = true;
      state.loading = false;
      console.log(state.isLogin);
    });
    builder.addCase(login.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(logout.fulfilled, (state, action) => {
      // actions value it return from createAsyncThunk
      state.isLogin = true;
      state.loading = false;
      console.log(state.isLogin);
    });
    builder.addCase(logout.pending, (state, action) => {
      state.loading = true;
    });
  },
});

export const {loginS} = authSlice.actions

export const authSelect = (store: RootState) => store.authReducer;

export default authSlice.reducer;
