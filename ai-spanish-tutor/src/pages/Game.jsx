//@ts-nocheck
import React, { useState } from 'react';

const Game = () => {

    const clickHandler = (word) => {
        let wordsArr = words
        let index = wordsArr.indexOf(word)
        let removedWord = wordsArr.splice(index, 1)
        console.log(wordsArr)
        console.log(removedWord)
        setWords(wordsArr)

        let activeWordsArr = activeWords
        activeWordsArr.push(removedWord)
        setActiveWords(activeWordsArr)
    }

    const [activeWords, setActiveWords] = useState([])
    const [words, setWords] = useState(["Voy ", "playa ", "la ", "a "])

    return (
        <section className='w-full h-screen relative'>
            <h2>Translate: I'm going to the beach.</h2>
            <div className='border-2 p-4 rounded-md w-1/3'>
                <p className='text-black'>{activeWords}</p>
            </div>
            <div>
                <h2>Words:</h2>
                <div className='flex flex-row'>
                        {words.map((word) => {
                            return <button key={word} onClick={()=> clickHandler(word)} className='mx-1 px-2 border-2 rounded-md transition hover:bg-neutral-100'>{word}</button>;
                        })}
                </div>
            </div>
        </section>
    );
};

export default Game;