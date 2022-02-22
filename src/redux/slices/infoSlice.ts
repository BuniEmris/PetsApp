import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InfoState {
  photo: any;
  name: string;
  view: string;
  breed: string;
  character: string;
  sex: string;
  neusted: boolean;
  microchipped: boolean;
  height: string;
  mass: string;
  something: string;
  dateOfBirds: {
    day: string;
    month: string;
    year: string;
  };
}

const initialState: InfoState = {
  photo: null,
  name: "",
  view: "",
  breed: "",
  character: "",
  sex: "",
  neusted: false,
  microchipped: false,
  height: "",
  mass: "",
  something: "",
  dateOfBirds: {
    day: "1",
    month: "January",
    year: "2022",
  },
};

export const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    setPhoto: (state, action: PayloadAction<any>) => {
      state.photo = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setView: (state, action: PayloadAction<string>) => {
      state.view = action.payload;
    },
    setBreed: (state, action: PayloadAction<string>) => {
      state.breed = action.payload;
    },
    setCharacter: (state, action: PayloadAction<string>) => {
      state.character = action.payload;
    },
    setSex: (state, action: PayloadAction<string>) => {
      state.sex = action.payload;
    },
    setNeusted: (state, action: PayloadAction<boolean>) => {
      state.neusted = action.payload;
    },
    setMicrochipped: (state, action: PayloadAction<boolean>) => {
      state.microchipped = action.payload;
    },
    setHeight: (state, action: PayloadAction<string>) => {
      state.height = action.payload;
    },
    setMass: (state, action: PayloadAction<string>) => {
      state.mass = action.payload;
    },
    setSomething: (state, action: PayloadAction<string>) => {
      state.something = action.payload;
    },
    setDateOfBirdth: (state, action: PayloadAction<any>) => {
      state.dateOfBirds = action.payload;
    },
    clearInfo: () => {
      return initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setPhoto,
  setName,
  setBreed,
  setCharacter,
  setDateOfBirdth,
  setHeight,
  setMass,
  setMicrochipped,
  setNeusted,
  setSex,
  setSomething,
  setView,
  clearInfo,
} = infoSlice.actions;

export default infoSlice.reducer;
