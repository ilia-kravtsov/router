import React from 'react';
import './App.css';
import {NavLink, Outlet, Route, Routes, useParams} from "react-router-dom"
import Homepage from "./Homepage";
import Blogpage from "./Blogpage";
import Aboutpage from "./Aboutpage";
import NotFountPage from "./NotFountPage";
import {Layout} from "./Layout";
import SinglePage from './SinglePage';

function App() {
  return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Homepage/>}/>
                    <Route path='posts' element={<Blogpage/>}/>
                    <Route path='posts/:id' element={<SinglePage/>}/>
                    <Route path='about' element={<Aboutpage/>}/>
                    <Route path='*' element={<NotFountPage/>}/>
                </Route>
            </Routes>
        </>
  );
}

export default App;

/*
 <Route path={'/'} element={<Layout/>}>
 <Route index element={<Homepage/>}/>
 Homapage сработает по /
 все остальные адреса могут идти без /
 */