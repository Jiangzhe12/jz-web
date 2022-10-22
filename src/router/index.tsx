import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import NoMatch from '../pages/NoMatch'
import Register from '../pages/Register'


function index() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />}></Route>
                    <Route path='/register' element={<Register />}></Route>
                    <Route path='/home' element={<Home />}></Route>
                    <Route path='*' element={<NoMatch />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default index