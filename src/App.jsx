import { useEffect } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/header/Header'
import { setUser, clearUser, setLoading, extractUserData } from './redux/store/slices/authSlice'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { auth } from '../firebaseConfig'


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setLoading(true));

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Usuário autenticado:", user);
        dispatch(setUser(extractUserData(user)))
      } else {
        console.log("Nenhum usuário autenticado");
        dispatch(clearUser())
        dispatch(setLoading(false))
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
