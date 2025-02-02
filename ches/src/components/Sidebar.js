import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { signOut } from 'firebase/auth';
import { FaBars, FaHome, FaChess, FaCrown } from 'react-icons/fa';
import { BsBarChartFill } from 'react-icons/bs';
import { BiLogOut, BiLogIn } from 'react-icons/bi';
// import { auth } from '../firebase';
import styles from './Sidebar.module.css';

const menu = [
  {
    name: 'Home',
    path: '/',
    icon: <FaHome />,
  },
  {
    name: 'Play',
    path: '/play/online',
    icon: <FaChess />,
  },
  {
    name: 'Training',
    path: '/practice',
    icon: <BsBarChartFill />,
  },
  {
    name: 'Leaderboard',
    path: '/leaderboard',
    icon: <FaCrown />,
  },
];

const Sidebar = ({ show }) => {
  const [collapsed, setCollapsed] = useState(true);
  // const [user] = useAuthState(auth);

  const toggleMenu = () => setCollapsed(!collapsed);

  return (
    <div className={`${styles.container} ${collapsed ? styles.collapsed : ''}`}>
      <div className={styles.header}>
        <button className={styles.menuBtn} onClick={toggleMenu}>
          <FaBars className={styles.bars} />
        </button>
        <button
          type="button"
          className={styles.closeBtn}
          onClick={() => show(false)}
        >
          &times;
        </button>
        <h1 className={collapsed ? styles.hide : styles.brand}>
          <img src='/logo2.png' height={100} width={100} alt='Brand Logo' />
        </h1>
      </div>

      <div className={styles.menuList}>
        {menu.map((i) => (
          <NavLink
            key={i.name} z
            to={i.path}
            className={styles.navLink}
            onClick={() => {
              if (window.innerWidth) show(false);
            }}
            style={({ isActive }) =>
              isActive ? { borderLeft: 'solid 4px green' } : null
            }
          >
            {i.icon}
            <span className={collapsed ? styles.hide : ''}>{i.name}</span>
          </NavLink>
        ))}
        {/* {user ? ( */}
        <button
          type="button"
          className={styles.logBtn}
        // onClick={() => signOut(auth)}
        >
          <BiLogOut />
          <span className={collapsed ? styles.hide : ''}>Log Out</span>
        </button>
        {/* ) : ( */}
        <Link to="/account/login" className={styles.logBtn}>
          <BiLogIn />
          <span className={collapsed ? styles.hide : ''}>Log In</span>
        </Link>
        {/* )} */}
      </div>
    </div>
  );
};

export default Sidebar;
