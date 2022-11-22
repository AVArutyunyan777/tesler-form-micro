import {initialState} from "./tasks.state";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {WidgetTableMeta} from "@tesler-ui/core/interfaces/widget";

export const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        setTasksReducer(state, action: PayloadAction<WidgetTableMeta[]>) {
            state.tasks = action.payload;
        },
    },
});


export default tasksSlice.reducer;