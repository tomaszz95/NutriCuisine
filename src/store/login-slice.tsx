import { createSlice } from '@reduxjs/toolkit'

const loginSlice = createSlice({
  name: 'login',
  initialState: false,

  reducers: {
    changeLoginState(_, action) {
      return action.payload
    },
  },
})

export const loginActions = loginSlice.actions
export default loginSlice
