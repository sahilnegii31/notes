import { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card'

const Notes = ({ isLoggedIn, setCurrentPage, onLogout }) => {
  const [notes, setnotes] = useState([])
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")

  const getnotes = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/notes/getnotes", {
        withCredentials: true
      })
      if (response.data && response.data.notes) {
        setnotes(response.data.notes)
      }
    } catch (err) {
      console.log("Error fetching notes", err)
      if (err.response?.status === 401 && onLogout) {
        onLogout()
      }
    }
  }

  const uploadNotes = async (e) => {
    e.preventDefault()
    if (!title.trim() && !desc.trim()) return
    try {
      await axios.post(
        "http://localhost:3000/api/notes/newnotes",
        { title, desc },
        { withCredentials: true }
      )
      setTitle("")
      setDesc("")
      getnotes()
    } catch (err) {
      alert(err.response?.data?.message || "Failed to add note")
    }
  }

  const delnotes = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/notes/delnotes/${id}`, {
        withCredentials: true
      })
      setnotes((prev) => prev.filter((note) => note._id !== id))
    } catch (err) {
      alert(err.response?.data?.message || "Failed to delete note")
    }
  }

  useEffect(() => {
    let ignore = false
    const fetchNotes = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/notes/getnotes", {
          withCredentials: true
        })
        if (!ignore && response.data && response.data.notes) {
          setnotes(response.data.notes)
        }
      } catch (err) {
        console.log("Error fetching notes", err)
        if (err.response?.status === 401 && onLogout) {
          onLogout()
        }
      }
    }

    if (isLoggedIn) {
      fetchNotes()
    }

    return () => {
      ignore = true
    }
  }, [isLoggedIn, onLogout])

  if (!isLoggedIn) {
    return (
      <div className='min-h-[65vh] flex flex-col items-center justify-center gap-6 p-6 text-center max-w-md mx-auto'>
        <div className='w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-3xl text-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.2)]'>
          🔒
        </div>
        <div className='flex flex-col gap-2'>
          <h2 className='font-luxury text-3xl font-bold gold-gradient-text'>Vault Locked</h2>
          <p className='text-zinc-400 text-sm leading-relaxed'>
            You need to be signed in to access and manage your private notes collection.
          </p>
        </div>
        <button 
          type="button"
          className='px-7 py-3 rounded-xl font-bold text-black bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.4)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer'
          onClick={() => setCurrentPage('login')}
        >
          Unlock Vault
        </button>
      </div>
    )
  }

  return (
    <div className='min-h-[calc(100vh-140px)] w-full flex flex-col items-center px-4 py-8 pb-28 max-w-6xl mx-auto'>
      {/* Page Header */}
      <div className='text-center flex flex-col items-center gap-2 mb-8'>
        <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider'>
          <span>✦</span> Personal Sanctuary <span>✦</span>
        </div>
        <h1 className='font-luxury text-3xl sm:text-5xl font-bold gold-gradient-text'>
          My Vault Notes
        </h1>
        <p className='text-zinc-400 text-xs sm:text-sm'>
          {notes.length} {notes.length === 1 ? "entry" : "entries"} securely stored in your personal notebook
        </p>
      </div>

      {/* Add Note Section */}
      <div className='w-full max-w-xl mb-12 p-6 rounded-2xl bg-zinc-950/85 backdrop-blur-xl border border-amber-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_25px_rgba(245,158,11,0.1)] flex flex-col gap-4 relative overflow-hidden'>
        {/* Top Gold Shimmer */}
        <div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-600' />

        <div className='flex items-center justify-between border-b border-zinc-800/80 pb-3'>
          <h2 className='font-luxury text-xl font-bold text-zinc-100 flex items-center gap-2'>
            <span className='text-amber-400'>✍️</span> Compose New Entry
          </h2>
          <span className='text-[11px] text-amber-500/80 uppercase font-semibold tracking-wider'>Draft</span>
        </div>

        <form onSubmit={uploadNotes} className='flex flex-col gap-3.5'>
          <div className='flex flex-col gap-1'>
            <label className='text-xs font-semibold uppercase tracking-wider text-amber-400/80'>
              Title
            </label>
            <input
              type="text"
              required
              placeholder="e.g., Weekly Strategic Goals"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='w-full bg-zinc-900/90 border border-zinc-700/80 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-zinc-100 rounded-xl px-4 py-2 text-sm placeholder:text-zinc-600 focus:outline-none transition-all'
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label className='text-xs font-semibold uppercase tracking-wider text-amber-400/80'>
              Description
            </label>
            <textarea
              required
              placeholder="Record your thoughts, details, or checklists..."
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              rows={3}
              className='w-full bg-zinc-900/90 border border-zinc-700/80 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-zinc-100 rounded-xl px-4 py-2 text-sm placeholder:text-zinc-600 focus:outline-none transition-all resize-none'
            />
          </div>

          <button
            type="submit"
            className='mt-1 py-2.5 px-6 rounded-xl font-bold text-black bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.35)] hover:shadow-[0_0_30px_rgba(245,158,11,0.55)] hover:scale-[1.01] active:scale-[0.98] transition-all duration-200 cursor-pointer self-end text-sm'
          >
            ✦ Save to Vault
          </button>
        </form>
      </div>

      {/* Notes Grid */}
      <div className='w-full flex flex-wrap gap-6 justify-center items-stretch'>
        {notes.length === 0 ? (
          <div className='p-12 text-center rounded-2xl bg-zinc-950/60 border border-dashed border-zinc-800 max-w-md flex flex-col items-center gap-3'>
            <div className='text-4xl text-amber-400/60'>📖</div>
            <h3 className='font-luxury text-xl font-semibold text-zinc-200'>No Entries Yet</h3>
            <p className='text-zinc-500 text-xs sm:text-sm leading-relaxed'>
              Your obsidian vault is waiting. Draft your first note using the form above to begin archiving your ideas.
            </p>
          </div>
        ) : (
          notes.map((note) => (
            <Card key={note._id} note={note} delnotes={delnotes} />
          ))
        )}
      </div>
    </div>
  )
}

export default Notes
