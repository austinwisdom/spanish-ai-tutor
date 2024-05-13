import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
//@ts-ignore
import {Home, Lesson, Conversation, Game } from './pages'

import flag_de from './assets/logos/flags/flag_de.svg'
import flag_fr from './assets/logos/flags/flag_fr.svg'
import flag_us from './assets/logos/flags/flag_en.svg'
import flag_jp from './assets/logos/flags/flag_jp.svg'
import flag_es from './assets/logos/flags/flag_es.svg'
import flag_br from './assets/logos/flags/flag_pt.svg'

const App = () => {

    const languages = [
        {id: 'es', href: '/es', label: 'Español', icon: flag_es},
        {id: 'en', href: '/en', label: 'English', icon: flag_us},
        {id: 'de', href: '/de', label: 'Deutsche', icon: flag_de},
        {id: 'pt', href: '/pt', label: 'Português', icon: flag_br},
        {id: 'fr', href: '/fr', label: 'Français', icon: flag_fr},
        {id: 'jp', href: '/jp', label: '日本語', icon: flag_jp}
      ]

    // the language the user is STUDYING
    const [langStudy, setLangStudy] = useState(languages[0])
    console.log(langStudy)

    return (
        <main className='bg-white'>
            <Router>
                {/* @ts-ignore */}
                {languages && <Navbar langStudy={langStudy} languages={languages} setLangStudy={setLangStudy}/>}
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