import { create } from 'zustand'

export type Note = {
    title: string
    body: string
}

interface NotesState {
    notes: Array<Note>
    addNote: (note: Note) => void
    delNote: (index: number) => void
}

export const useNotes = create<NotesState>((set) => ({
    notes: [],
    addNote: (note) => (set((state) => ({ notes: [...state.notes, note] }))),
    delNote: (index) => (set((state) => ({ notes: [...state.notes.filter((note, idx) => (idx != index))] })))
}))