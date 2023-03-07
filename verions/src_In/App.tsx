import React from 'react';
import './App.css';
import {NavLink, Outlet, Route, Routes, useParams} from "react-router-dom"

function App() {
  return (
        <>
            <header>
                <a href="">Home</a>
                <a href="">Blog</a>
                <a href="">About</a>
            </header>
        </>
  );
}

export default App;

