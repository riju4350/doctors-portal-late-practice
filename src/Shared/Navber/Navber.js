import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import{signOut } from 'firebase/auth';
import auth from '../../firebase.init';


export default function Navber() {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
      signOut(auth);
    };
    const navbarItems = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="appointment">Appointment</Link></li>
    <li><Link to="review">Review</Link></li>
    <li><Link to="contact">Contact</Link></li>
    <li><Link to="about">About</Link></li>
    <li>{user ? <button class="btn btn-ghost" onClick={logout}>Log out</button> : <Link to="/login">Log in</Link>}</li>
    </>

  return (
    <div class="navbar bg-base-100 sticky top-0 z-50 bg-white">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabIndex="0" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          {navbarItems}
        </ul>
      </div>
      <Link to='/' class="btn btn-ghost normal-case text-xl">Doctors Portal</Link>
    </div>
    <div class="navbar-end hidden lg:flex">
      <ul class="menu menu-horizontal p-0">
      {navbarItems}
      </ul>
    </div>
  </div>
  )
}
