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
        {id: 'es', href: '/es', englishLabel: "Spanish", label: 'Español', icon: flag_es, tutor: "Maxi", questions: [
            "What are some fun slang phrases to use in Spanish?",
            "What is the difference between preterite and past imperfect?",
            "What are the 25 most important verbs to learn in Spanish?",
            "Why do we say me gusta and not yo gusto?"
        ]},
        {id: 'en', href: '/en', englishLabel: "English", label: 'English', icon: flag_us , tutor: "David", questions: [
            "What are some fun slang phrases to use in English?",
            "What's a polite way to order a coffee in English?",
            "What are the 25 most important verbs to learn in English?"
        ]},
        {id: 'de', href: '/de', englishLabel: "German", label: 'Deutsche', icon: flag_de, tutor: "Anna", questions: [
            "What are some fun slang phrases to use in German?",
            "What's a polite way to order a coffee in German?",
            "What are the 25 most important verbs to learn in German?",
            "What is declension in German grammar?"
        ]},
        {id: 'pt', href: '/pt', englishLabel: "Portuguese", label: 'Português', icon: flag_br, tutor: "Isabela", questions: [
            "What are some fun slang phrases to use in Portuguese?",
            "What's a polite way to order a coffee in Portuguese?",
            "What are the 25 most important verbs to learn in Portuguese?"
        ]},
        {id: 'fr', href: '/fr', englishLabel: "French", label: 'Français', icon: flag_fr, tutor: "Marvin", questions: [
            "What are some fun slang phrases to use in French?",
            "What's a polite way to order a coffee in French?",
            "What are the 25 most important verbs to learn in French?"
        ]},
        {id: 'jp', href: '/jp', englishLabel: "Japanese", label: '日本語', icon: flag_jp, tutor: "Yuki", questions: [
            "What are some fun slang phrases to use in Japanese?",
            "What's a polite way to order a coffee in Japanese?",
            "What are the 25 most important verbs to learn in Japanese?"
        ]}
      ]

    // the language the user is STUDYING
    const [langStudy, setLangStudy] = useState(languages[0])

    return (
        <main className='bg-white'>
            <Router>
                {/* @ts-ignore */}
                {languages && <Navbar langStudy={langStudy} languages={languages} setLangStudy={setLangStudy}/>}
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/lessons' element={<Lesson langStudy={langStudy} languages={languages}/>} />
                    <Route path='/conversation' element={<Conversation langStudy={langStudy} languages={languages}/>} />
                    <Route path='/game' element={<Game langStudy={langStudy} languages={languages}/>} />
                </Routes>
            </Router>
        </main>
    );
};

export default App;