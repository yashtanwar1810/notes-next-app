import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type Note = {
    title: string
    body: string
}

interface NotesState {
    notes: Array<Note>
    addNote: (note: Note) => void
    delNote: (index: number) => void
}

export const useNotes = create<NotesState>()(persist(set => (
    {
        notes: [],
        addNote: (note) => (set((state) => ({ notes: [...state.notes, note] }))),
        delNote: (index) => (set((state) => ({ notes: [...state.notes.filter((note, idx) => (idx != index))] })))
    }),
    { "name": "notes", }
))