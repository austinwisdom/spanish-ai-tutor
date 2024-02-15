import React from 'react';
import { Canvas } from "@react-three/fiber";
import {Link} from 'react-router-dom'
import {sun, sunBlue, cat, eat, fox, hello, money, run, ski, spaceman, study, surf, text, typing} from '../assets/gifs/homepage/index'

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
            <div>
                <div>
                    <h2 className=''>Save money and have fun while learning!</h2>
                </div>
                <div>

                </div>
            </div>
            
        </main>
    );
};

export default Home;