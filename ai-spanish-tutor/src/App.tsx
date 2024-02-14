import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';

//@ts-ignore
import {Home, Lesson, Conversation} from './pages'

const App = () => {
    return (
        <main className='bg-neutral-950'>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<Lesson />} />
                    <Route path='/projects' element={<Conversation />} />
                </Routes>
            </Router>
        </main>
    );
};

export default App;