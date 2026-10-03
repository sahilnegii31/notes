const Navbar = ({ currentPage, setCurrentPage, isLoggedIn, onLogout }) => {
  return (
    <header className='sticky top-0 z-50 backdrop-blur-xl bg-zinc-950/80 border-b border-amber-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex justify-between items-center'>
        {/* Brand Logo */}
        <div 
          className='flex items-center gap-2 cursor-pointer group' 
          onClick={() => setCurrentPage('home')}
        >
          <div className='w-8 h-8 rounded-lg bg-gradient-to-br from-amber-300 via-yellow-500 to-amber-700 p-[1px] shadow-[0_0_15px_rgba(245,158,11,0.35)]'>
            <div className='w-full h-full bg-zinc-950 rounded-[7px] flex items-center justify-center'>
              <span className='font-luxury font-bold text-amber-400 text-sm'>N</span>
            </div>
          </div>
          <span className='font-luxury text-lg sm:text-xl font-bold tracking-wider gold-gradient-text group-hover:brightness-125 transition-all'>
            NOTEBOOK
          </span>
        </div>

        {/* Navigation Items */}
        <nav>
          <ul className='flex items-center gap-2 sm:gap-4'>
            <li>
              <button
                type='button'
                onClick={() => setCurrentPage('home')}
                className={`px-3 sm:px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                  currentPage === 'home'
                    ? 'text-amber-300 bg-amber-500/15 border border-amber-500/40 shadow-[0_0_12px_rgba(245,158,11,0.2)]'
                    : 'text-zinc-400 hover:text-amber-200 hover:bg-zinc-900/60'
                }`}
              >
                Home
              </button>
            </li>
            <li>
              <button
                type='button'
                onClick={() => setCurrentPage('notes')}
                className={`px-3 sm:px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                  currentPage === 'notes'
                    ? 'text-amber-300 bg-amber-500/15 border border-amber-500/40 shadow-[0_0_12px_rgba(245,158,11,0.2)]'
                    : 'text-zinc-400 hover:text-amber-200 hover:bg-zinc-900/60'
                }`}
              >
                Notes
              </button>
            </li>

            {!isLoggedIn ? (
              <li>
                <button
                  type='button'
                  onClick={() => setCurrentPage('login')}
                  className={`px-3.5 sm:px-5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                    currentPage === 'login'
                      ? 'bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-black font-semibold shadow-[0_0_15px_rgba(245,158,11,0.5)]'
                      : 'border border-amber-500/50 text-amber-300 hover:bg-amber-400/15 shadow-[0_0_10px_rgba(245,158,11,0.15)]'
                  }`}
                >
                  Login
                </button>
              </li>
            ) : (
              <li>
                <button
                  type='button'
                  onClick={onLogout}
                  className='px-3 sm:px-4 py-1.5 rounded-lg text-sm font-medium text-red-400 hover:text-red-300 hover:bg-red-950/30 border border-red-500/20 hover:border-red-500/40 transition-all cursor-pointer'
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar

