import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchCustomers = createAsyncThunk("customers/fetchCustomers", async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    return data
});


const initialState = {
        data: [],
        status: "loading",
};

export const customersSlice = createSlice({
    name: "customers",
    initialState,
    reducers: {},
    extraReducers:  {
            [fetchCustomers.pending]: (state) => {
                state.data = [];
                state.status = "loading";
            },
            [fetchCustomers.fulfilled]: (state, action) => {
                state.data = action.payload;
                state.status = "loaded";
            },
            [fetchCustomers.rejected]: (state) => {
                state.data = [];
                state.status = "error";
            }
    },
});

export default customersSlice.reducer;
