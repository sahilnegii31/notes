import { useState } from 'react'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Notes from './components/Notes'
import Home from './components/Home'
import Footer from './components/Footer'

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
    setCurrentPage('notes');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    setCurrentPage('home');
  };

  return (
    <div className='min-h-screen bg-[#080808] text-zinc-100 flex flex-col justify-between selection:bg-amber-500/30 selection:text-amber-200 relative overflow-x-hidden'>
      {/* Background Ambient Gold Lighting */}
      <div className='pointer-events-none fixed -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-amber-500/10 blur-[140px] rounded-full z-0' />
      <div className='pointer-events-none fixed top-1/3 -right-40 w-[500px] h-[350px] bg-yellow-600/5 blur-[160px] rounded-full z-0' />
      <div className='pointer-events-none fixed bottom-10 -left-40 w-[500px] h-[350px] bg-amber-700/5 blur-[160px] rounded-full z-0' />

      <div className='relative z-10 flex flex-col flex-1'>
        <Navbar 
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          isLoggedIn={isLoggedIn}
          onLogout={handleLogout}
        />

        <main className='flex-1'>
          {currentPage === 'home' && (
            <Home 
              setCurrentPage={setCurrentPage} 
              isLoggedIn={isLoggedIn} 
            />
          )}

          {currentPage === 'login' && (
            <Login 
              onLoginSuccess={handleLoginSuccess} 
            />
          )}

          {currentPage === 'notes' && (
            <Notes 
              isLoggedIn={isLoggedIn} 
              setCurrentPage={setCurrentPage} 
              onLogout={handleLogout} 
            />
          )}
        </main>
      </div>

      <Footer />
    </div>
  )
}

export default App
