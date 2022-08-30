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
      },
      {
        id: "2",
        title: "Note 2",
        note: "fduofhpıa fduofhpıa fduofhpıa fduofhpıa fduofhpıa fduofhpıa fduofhpıa fduofhpıa",
        noteColor: "#F06292",
      },
      {
        id: "3",
        title: "Note 3",
        note: "fduofhpıa fduofhpıa fduofhpıa fduofhpıa fduofhpıa fduofhpıa fduofhpıa fduofhpıa",
        noteColor: "#4FC3F7",
      },
      {
        id: "4",
        title: "Note 4",
        note: "fduofhpıa fduofhpıa fduofhpıa fduofhpıa fduofhpıa fduofhpıa fduofhpıa fduofhpıa",
        noteColor: "#FFD54F",
      },
      {
        id: "5",
        title: "Note 5",
        note: "fduofhpıa fduofhpıa fduofhpıa fduofhpıa fduofhpıa fduofhpıa fduofhpıa fduofhpıa",
        noteColor: "#AED581",
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
  },
});

export const { addNote, removeNote, searchNote } = notesSlice.actions;
export default notesSlice.reducer;
