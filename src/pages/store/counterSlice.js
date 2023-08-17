import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    resetCounter: (state) => {
      state.value = 0
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, resetCounter } = counterSlice.actions

// Selector
export const selectValue = (state) => state.counter.value

export default counterSlice.reducer