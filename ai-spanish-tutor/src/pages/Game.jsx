//@ts-nocheck
import React, { useState } from 'react';

const Game = () => {

    //shows unguessed words
    const wordsClickHandler = (word) => {
        setWords(words.filter(w => w.id !== word.id));
        setActiveWords([...activeWords, {id: word.id, word: word.word}])
    }

    //shows words that have been clicked
    const activeWordsHandler = (word) => {
        setActiveWords(activeWords.filter(w => w.id !== word.id));
        setWords([...words, {id: word.id, word: word.word}])
    }

    //compare translation to active words
    const checkAnswer = () => {
        //loop active words and get only words
        let answerKeyArr = []
        for(let i=0; i<activeWords.length; i++) {
            answerKeyArr.push(activeWords[i]?.id)
        }
        console.log(answerKey)
        if (parseInt(answerKeyArr.join('')) === answerKey) {
            setIsCorrect(1)
        } else {
            setIsCorrect(2)
        }
    }

    const [isCorrect, setIsCorrect] = useState(0)
    const [ answerKey, _setAnswerKey] = useState(4321)
    const [translation, _setTranslation] = useState("I'm going to the beach.")
    const [activeWords, setActiveWords] = useState([])
    const [words, setWords] = useState([
        // ! start id at 1 to avoid octal literal lint error!
        {id:1, fk:0, word: "playa"}, {id:2, fk:0, word: "la"}, {id:3, fk:0, word: "a"}, {id:4, fk:0, word: "Voy"}])
    return (
        <section className='w-full h-screen relative flex flex-row justify-center'>
            <div className='mt-12'>
                <p className='text-blue-600'>Translate:</p>
                <p className='text-lg'>{translation}</p>

                <div className='border-b-2 p-4'>
                    <ul className='flex flex-row h-6'>
                            {activeWords.map(word => (
                            <li key={word?.id}>
                                <button className='mx-1 px-2 border-2 rounded-md transition hover:bg-neutral-100' 
                                onClick={() => {activeWordsHandler(word)}}>
                                {word?.word}{' '}
                                </button>
                            </li>
                            ))}
                        </ul>
                </div>
                <div>
                    <h2 className='my-2 text-sm'>hint: Click the words to form a sentence</h2>
                    <ul className='flex flex-row h-6'>
                        {words.map(word => (
                        <li key={word.id}>
                            <button className='mx-1 px-2 border-2 rounded-md transition hover:bg-neutral-100' 
                            onClick={() => {wordsClickHandler(word)}}>
                            {word.word}{' '}
                            </button>
                        </li>
                        ))}
                    </ul>
                </div>
                <button className='border-2 w-32 rounded-md text-white bg-blue-600 my-4 transition hover:bg-blue-700'
                    onClick={()=> checkAnswer()}
                >
                    Check
                </button>
                <p>{isCorrect}</p>
            </div>
            <div>
                
            </div>
        </section>
    );
};

export default Game;