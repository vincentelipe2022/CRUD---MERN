// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ViewUsers from './Users/ViewUsers'
import CreateUser from './Users/CreateUser'
import UpdateUser from './Users/UpdateUser'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ViewUsers/>}></Route>
          <Route path="/create-user" element={<CreateUser/>}></Route>
          <Route path="/update-user/:id" element={<UpdateUser/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
