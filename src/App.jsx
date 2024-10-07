import { useEffect } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/header/Header'
import { setUser, clearUser, extractUserData, setLoading } from './redux/store/slices/authSlice'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { auth } from '../firebaseConfig'


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    setLoading(true);

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Usuário autenticado:", user);
        const userData = extractUserData(user)
        dispatch(setUser((userData)))
      } else {
        console.log("Nenhum usuário autenticado");
        dispatch(clearUser())
        setLoading(false)
      }
    })
    return () => unsubscribe();
  },[dispatch])

  return (
    <div>
      <Header />
      <main className='MainContainer'>
      <Outlet />
      </main>
    </div>
  )
}

export default App
