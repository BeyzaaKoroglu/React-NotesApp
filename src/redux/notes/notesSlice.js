import { createSlice, nanoid } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notes: localStorage.getItem("notes")
      ? JSON.parse(localStorage.getItem("notes"))
      : [
          {
            id: "1",
            title: "Note 1",
            note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            noteColor: "#BA68C8",
            isHidden: false,
          },
          {
            id: "2",
            title: "Note 2",
            note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            noteColor: "#F06292",
            isHidden: true,
          },
          {
            id: "3",
            title: "Note 3",
            note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            noteColor: "#4FC3F7",
            isHidden: false,
          },
        ],
    searchKey: "",
  },
  reducers: {
    addNote: {
      reducer: (state, action) => {
        state.notes.push(action.payload);
      },
      prepare: (newNote) => {
        return {
          payload: {
            id: nanoid(),
            isHidden: true,
            ...newNote,
          },
        };
      },
    },

    removeNote: {
      reducer: (state, action) => {
        const filtered = state.notes.filter(
          (note) => note.id !== action.payload
        );
        state.notes = filtered;
      },
    },

    searchNote: {
      reducer: (state, action) => {
        state.searchKey = action.payload;
      },
    },

    changeIsHidden: {
      reducer: (state, action) => {
        const note = state.notes.find((note) => note.id === action.payload);
        if (note) note.isHidden = !note.isHidden;
      },
    },
  },
});

export const { addNote, removeNote, searchNote, changeIsHidden } =
  notesSlice.actions;
export default notesSlice.reducer;
