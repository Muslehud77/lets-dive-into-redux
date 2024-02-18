import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    count : 0,
}

const counterSlice = createSlice({
    name : 'count',
    initialState,
    reducers : {}
})

export default counterSlice.reducer