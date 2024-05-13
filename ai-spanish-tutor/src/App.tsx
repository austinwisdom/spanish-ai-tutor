import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';

//@ts-ignore
import {Home, Lesson, Conversation, Game } from './pages'

const App = () => {

    // the language the user is STUDYING
    const [langStudy, setLangStudy] = useState("es")

    return (
        <main className='bg-white'>
            <Router>
                {/* @ts-ignore */}
                <Navbar langStudy={langStudy} />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/lessons' element={<Lesson />} />
                    <Route path='/conversation' element={<Conversation />} />
                    <Route path='/game' element={<Game />} />
                </Routes>
            </Router>
        </main>
    );
};

export default App;