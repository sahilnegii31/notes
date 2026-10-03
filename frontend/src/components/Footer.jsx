const Footer = () => {
  return (
    <footer className='border-t border-amber-500/20 py-5 px-4 text-center bg-zinc-950/90 backdrop-blur-md mt-auto relative z-10'>
      <div className='max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-zinc-500'>
        <div className='flex items-center gap-2'>
          <span className='font-luxury font-bold text-amber-400 text-sm'>NOTEBOOK</span>
          <span className='text-zinc-700'>•</span>
          <span className='text-zinc-400'>Obsidian & Gold Vault</span>
        </div>
        <p className='text-zinc-500'>
          Developed with distinction by <span className='text-amber-400/90 font-medium'>Sahil</span> © 2026
        </p>
      </div>
    </footer>
  )
}

export default Footer
