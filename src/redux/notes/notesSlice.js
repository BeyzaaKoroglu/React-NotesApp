import { createSlice, nanoid } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notes: [
      {
        id: "1",
        title: "Note 1",
        note: "fduofhpıa fduofhpıa fduofhpıa fduofhpıa fduofhpıa fduofhpıa fduofhpıa fduofhpıa",
        noteColor: "#BA68C8",
        isHidden: true,
      },
      {
        id: "2",
        title: "Note 2",
        note: "fduofhpıa fduofhpıa fduofhpıa fduofhpıa fduofhpıa fduofhpıa fduofhpıa fduofhpıa",
        noteColor: "#F06292",
        isHidden: true,
      },
      {
        id: "3",
        title: "Note 3",
        note: "fduofhpıa fduofhpıa fduofhpıa fduofhpıa fduofhpıa fduofhpıa fduofhpıa fduofhpıa",
        noteColor: "#4FC3F7",
        isHidden: true,
      },
      {
        id: "4",
        title: "Note 4",
        note: "fduofhpıa fduofhpıa fduofhpıa fduofhpıa fduofhpıa fduofhpıa fduofhpıa fduofhpıa",
        noteColor: "#FFD54F",
        isHidden: true,
      },
      {
        id: "5",
        title: "Note 5",
        note: "fduofhpıa fduofhpıa fduofhpıa fduofhpıa fduofhpıa fduofhpıa fduofhpıa fduofhpıa",
        noteColor: "#AED581",
        isHidden: true,
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
