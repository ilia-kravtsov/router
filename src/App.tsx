import React from 'react';
import './App.css';
import {NavLink, Outlet, Route, Routes, useParams} from "react-router-dom"

function App() {
  return (
    <div className="App">
        <NavLink to={'/'}>main</NavLink>---
        <NavLink to={'/login'}>login</NavLink>---


        <NavLink
            to={'/profile'}
            style={(param) => {return {color: param.isActive ? 'lime' : 'black'}}}
        >
            profile
        </NavLink>---


        <NavLink
            to={'/profile/settings'}
            className={({isActive}) => { return isActive ? 'act' : "def"}}
        >
            settings
        </NavLink>---

        <a
            href="https://github.com/ilia-kravtsov"
            target={'_blank'}
            rel={'noreferrer nofollow noopener'}
        >
            xxx
        </a>

      <Routes>
          <Route path={'/*'} element={<div>404</div>}/>
          <Route path={'/'} element={<div>main</div>}/>
          <Route path={'/login'} element={<div>login</div>}/>
          <Route path={'/profile'} element={<div>profile</div>}/>
          <Route path={'/profile/settings'} element={<div>settings</div>}/>
      </Routes>
    </div>
  );
}

export default App;

/*                          Вложенности
      <Routes>
          <Route path={'/*'} element={<div>404</div>}/>
          <Route path={'/'} element={<div>main</div>}/>
          <Route path={'/login'} element={<div>login</div>}>
          </Route>
          <Route path={'/profile/*'} element={
              <div>
                  profile
                  <Routes>
                      <Route path={'/settings'} element={<div>settings</div>}/>
                  </Routes>
              </div>
          }/>
      </Routes>
 */
