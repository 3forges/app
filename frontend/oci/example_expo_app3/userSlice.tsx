import { createSlice } from "@reduxjs/toolkit";
//import User, { PestoUser } from "./components/User";

const initialState: any = {
	userRedux: userSlice, value: [],
};

export const userSlice = createSlice({
	name: "userRedux",
	initialState,
	reducers: {
		setUsers: (state, item) => {
			state.value = [...state.value, item.payload];
		},
	},
});

// Action creators are automatically generated for each case reducer function 
export const { setUsers } = userSlice.actions;
export default userSlice.reducer;
