import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';

//@ts-ignore
import {Home, Lesson, Conversation, Game } from './pages'

const App = () => {
    return (
        <main className='bg-white'>
            <Router>
                <Navbar />
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