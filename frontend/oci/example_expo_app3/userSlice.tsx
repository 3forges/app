import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
	value: [],
};

export const userSlice: any = createSlice({
	name: "userRedux",
	initialState,
	reducers: {
		addUsers: (state, item) => {
			state.value = [...state.value, item.payload]
		},
		dumpUsers: (state, item) => {
			state.value = [...item.payload]
		},
	}, 
})

// Action creators are automatically generated for each case reducer function 
export const { addUsers, dumpUsers } = userSlice.actions;
export default userSlice.reducer;
