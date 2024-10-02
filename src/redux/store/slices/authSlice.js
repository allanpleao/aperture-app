import { createSlice } from "@reduxjs/toolkit";

export const extractUserData = (user) => {
    if (!user) return null;
    return {
        uid: user.id,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL
    }
}

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        loading: true,
        error: null
    },
    reducers: {
    setUser: (state, action) => {
        state.user = extractUserData(action.payload);
        state.loading = false;
        state.error = null;
    },
    clearUser: (state) => {
        state.user = null;
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