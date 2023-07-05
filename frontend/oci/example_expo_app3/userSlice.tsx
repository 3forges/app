import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
	userRedux: userSlice, value: [],
};

export const userSlice: any = createSlice({
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
