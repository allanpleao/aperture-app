import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/logo.png";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import { useDispatch } from "react-redux";
import { clearUser } from "../../redux/store/slices/authSlice";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = async() => {
    try {
      await signOut(auth)
      dispatch(clearUser())
      navigate('/')
    } catch (error) {
      console.error('Erro ai fazer logout:', error)
    }
  }

  return (
    <header className={styles.header}>
      <div>
        <Link to={"/"}>
          <img className={styles.logo} src={logo} />
        </Link>
        <Link to={"/"} className={styles.logoText}>
          Aperture{" "}
        </Link>
      </div>
      <nav className={styles.nav}>
        {user ? (
          <>
            <Link onClick={handleLogout}>logout</Link>
            <Link to={"/user"}>{user.displayName}</Link>

          </>
        ) : (
          <Link to={"/login"}>Login</Link>
        )}

      </nav>
    </header>
  );
};

export default Header;
