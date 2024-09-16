import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        currentUser: null,
        loading: true,
        error: null
    },
    reducers: {
    setUser: (state, action) => {
        state.currentUser = action.payload;
        state.loading = false;
        state.error = null;
    },
    clearUser: (state) => {
        state.currentUser = null;
        state.loading = false;
        state.error = null;
    },
    setLoading: (state, action) => {
        state.loading = action.payload
    },
    setError: (state, action) => {
        state.error = action.payload;
        state.loading = false;
    }
    }
})
export const { setError, setLoading, setUser, clearUser } = authSlice.actions
export default authSlice.reducer