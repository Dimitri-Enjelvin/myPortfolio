import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  language : 'en'
}

export const messageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    languageToEnglish: (state) => {
      state.language = 'en'
    },

    languageToFrench: (state) => {
      state.language = 'fr'
    },
  },
})


export const { 
 
  languageToEnglish,
  languageToFrench,
  
} = languageSlice.actions

export default languageSlice.reducer