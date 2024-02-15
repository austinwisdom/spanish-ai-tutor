//@ts-nocheck
import React, { useState } from 'react';

const Game = () => {

    const clickHandler = (word) => {
        
    }

    const [activeWords, setActiveWords] = useState([])
    const [words, setWords] = useState([
        {id:0, word: "Voy"}, {id:1, word: "playa"}, {id:2, word: "la"}, {id:3, word: "a"}])

    return (
        <section className='w-full h-screen relative'>
            <h2>Translate: I'm going to the beach.</h2>
            <div className='border-2 p-4 rounded-md w-1/3'>
                <p className='text-black'>{activeWords}</p>
            </div>
            <div>
                <h2>Words:</h2>
                
                <ul className='flex flex-row'>
                    {words.map(word => (
                      <li key={word.id}>
                        <button className='mx-1 px-2 border-2 rounded-md transition hover:bg-neutral-100' 
                        onClick={() => {
                          setWords(words.filter(w => w.id !== word.id));
                        }}>
                          {word.word}{' '}
                        </button>
                      </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Game;