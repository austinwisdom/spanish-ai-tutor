import React from 'react';
import {Link} from 'react-router-dom'
import {sunBlue, money, text, typing} from '../assets/gifs/homepage/index'

const Home = () => {
    return (
        <main className='w-full h-screen relative '>
            <div className=' flex flex-row content-center justify-center bg-blue-600 h-5/6'>
                <div className='flex flex-col justify-center'>
                    <img className='h-4/6' src={sunBlue}/>
                </div>
                
                <div className='flex flex-col justify-center'>
                    <h1 className='text-2xl mb-8 w-5/6 self-center text-white font-semibold text-center'>Learn to speak any language with your AI tutor Maxi!</h1>
                    <div className='flex flex-col'>
                        <Link className='self-center' to={'/lessons'}><button className='m-2 drop-shadow-md font-sans text-blue-600 font-semibold bg-yellow-300 rounded-lg w-64  py-2 transition hover:bg-yellow-400'>START A LESSON</button></Link>
                        <Link className='self-center' to={'/conversation'}><button className='m-2 drop-shadow-lg font-sans border-2 text-white font-semibold bg-blue-600 rounded-lg w-64  py-2 transition hover:bg-blue-700'>START A CONVERSATION</button></Link>
                    </div>
                </div>
            </div>
            <div className='h-fit bg-white'>
                <div className='flex flex-row justify-evenly'>
                    <div className='self-center mb-2 drop-shadow-md'>
                        <h2 className='text-2xl'>15 minutes a day is all it takes!</h2>
                        <p>As with any skill, language learning requires frequent practice and commitment.</p>
                        <p>Create a daily study routine to learn more effectively.</p>
                    </div>
                    <img className='h-96' src={text}/>
                </div>
                <div className='h-full flex flex-row justify-evenly'>
                    <img className='h-96' src={money}/>
                    <div className='self-center w-1/2 bg-blue-600 text-white rounded-full px-24 py-8'>
                        <h2 className='text-2xl mb-2 drop-shadow-md'>Save money while learning!</h2>
                        <p>You need hundreds of hours of speaking practice to attain fluency</p>
                        <p>Hiring a human tutor by the hour really adds up!</p>
                    </div>
                </div>
                <div className='flex flex-row justify-evenly'>
                    <div className='self-center w-1/2 bg-yellow-300 rounded-full px-24 py-8'>
                        <h2 className='text-2xl mb-2 drop-shadow-md'>Overcome nervousness while speaking!</h2>
                        <p>It's natural to struggle with feeling embarrassed while speaking with native speakers, especially in the beginning of your journey.</p>
                        <p>Get through the nerves by speaking first and frequently with Maxi, your friendly AI tutor!</p>
                    </div>
                    <img className='h-96' src={typing}/>
                </div>
            </div>
            
        </main>
    );
};

export default Home;