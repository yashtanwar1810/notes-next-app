"use client"

import { useState } from "react"
import { useNotes } from "../lib/store/useStore"
import { Header } from "../lib/components"

const Home = () => {

    const { notes, addNote, delNote } = useNotes()

    const [title, setTitle] = useState<string>("")
    const [body, setBody] = useState<string>("")
    const [err, setErr] = useState<boolean>(false)
    const [isEditing, setIsEditing] = useState<boolean>(false)

    return (
        <>
            <div className="flex flex-col gap-2 mx-auto p-6 mt-12 rounded-md w-[80%] bg-blue-100">
                <h1 className="text-4xl text-blue-600 font-black text-center">Take Notes</h1>
                <input
                    className="ring-1 px-4 py-2"
                    required
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value)
                        setErr(false)
                    }}
                />
                <textarea
                    className="ring-1 px-4 py-2"
                    required
                    placeholder="write your note here..."
                    rows={2} value={body}
                    onChange={(e) => {
                        setBody(e.target.value)
                        setErr(false)
                    }}
                />
                <button
                    className="bg-blue-600 w-full py-2 text-white font-medium"
                    onClick={() => {
                        if (title && body) {
                            addNote({ title, body })
                            setTitle("")
                            setBody("")
                        } else {
                            setErr(true)
                        }
                    }}
                >
                    Add Note
                </button>
                <p className="text-red-500">{
                    !!err && "*all fields are required!"
                }</p>
            </div >
            <div>
                {notes.map((note, idx) => {
                    return (

                        <div
                            className="m-2 p-2 bg-amber-100 flex justify-between items-center"
                            key={idx}
                        >
                            <div>
                                <h1
                                    className="font-bold text-2xl"
                                >
                                    {note.title}
                                </h1>
                                <p
                                    className=""
                                >
                                    {note.body}</p>

                            </div>
                            <div>
                                <button
                                    className="px-4 bg-red-400 w-full py-2 text-white font-medium"
                                    onClick={() => {
                                        delNote(idx)
                                    }}
                                >
                                    Del
                                </button>
                            </div>
                        </div>

                    )
                })}
            </div >
        </>
    )
}

export default Home