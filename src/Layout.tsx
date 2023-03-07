import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

const Layout = () => {

    return (
        <>
            <header>
                {/*a version

                <a href="/">Home</a>
                <a href="/posts">Blog</a>
                <a href="/about">About</a>

                Navlink version*/}

                <NavLink to="/" className={({isActive}) => isActive ? 'active' : 'navlink'}>Home</NavLink>
                <NavLink to="/posts" className={({isActive}) => isActive ? 'active' : 'navlink'}>Blog</NavLink>
                <NavLink to="/about" className={({isActive}) => isActive ? 'active' : 'navlink'}>About</NavLink>
                {/* или так <NavLink to="/about" style={({isActive}) => ({ color : isActive ? 'black' : 'white'})}>About</NavLink>*/}
            </header>
                <Outlet/>   {/*показывает куда будет отрисовываться все дочернее содержимое
                            в нашем случае оно попадет между header и footer*/}
            <footer>2021</footer>
        </>
    );
};

export {Layout};