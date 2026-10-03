const Card = ({ note, delnotes }) => {
  const noteData = note || {};
  return (
    <div className='group relative rounded-2xl bg-gradient-to-b from-zinc-900/90 to-zinc-950/90 backdrop-blur-md p-5 border border-amber-500/20 hover:border-amber-400/60 shadow-[0_10px_30px_rgba(0,0,0,0.7)] hover:shadow-[0_15px_35px_rgba(245,158,11,0.15)] transition-all duration-300 hover:-translate-y-1 w-full sm:w-[21rem] flex flex-col justify-between gap-4 overflow-hidden'>
      {/* Top Gold Accent Line */}
      <div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500/20 via-yellow-400/40 to-amber-500/20 group-hover:from-amber-400 group-hover:via-yellow-300 group-hover:to-amber-500 transition-all duration-300' />

      <div>
        <div className='flex justify-between items-start gap-3'>
          <h3 className='font-luxury text-lg font-bold text-zinc-100 group-hover:text-amber-300 transition-colors break-words flex-1'>
            {noteData.title}
          </h3>
          <button 
            type="button"
            title="Delete Note"
            className='w-7 h-7 rounded-lg bg-zinc-800/80 hover:bg-red-950/80 text-zinc-400 hover:text-red-400 border border-zinc-700/60 hover:border-red-500/50 transition-all flex items-center justify-center text-xs font-bold cursor-pointer shrink-0 shadow-sm' 
            onClick={() => { if (delnotes) delnotes(noteData._id) }}
          >
            ✕
          </button>
        </div>
        <p className='text-zinc-300 text-sm leading-relaxed whitespace-pre-wrap break-words mt-2.5 font-normal'>
          {noteData.desc}
        </p>
      </div>

      {/* Card Footer Tag */}
      <div className='pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-500'>
        <span className='text-amber-400/70 font-medium flex items-center gap-1'>
          <span>✦</span> Vault Saved
        </span>
        <span className='text-zinc-500 text-[10px]'>Encrypted</span>
      </div>
    </div>
  )
}

export default Card
