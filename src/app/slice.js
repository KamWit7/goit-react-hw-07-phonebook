import { createSlice } from '@reduxjs/toolkit'

const filter = createSlice({
  name: 'filter',
  initialState: { value: '' },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload
    },
  },
})

export const { setFilter } = filter.actions
export default filter.reducer
