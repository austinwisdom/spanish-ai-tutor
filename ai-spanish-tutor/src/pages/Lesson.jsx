import React, {useState} from 'react';
import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";

// deployed api url https://ai-tutor-api.fly.dev/my-tutor
// test url http://localhost:3000/my-tutor

const Lesson = () => {

    const endPoint = import.meta.env.VITE_ENDPOINT
    const siteKey = import.meta.VITE_CAPTCHA_KEY
    const [message, setMessage] = useState("");
    const [response, setResponse] = useState("");
    const [captcha, setCaptcha] = useState(false)
    const [userConversation, setUserConversation] = useState([]);
    const [submitActive, setSubmitActive] = useState(true)
    const [language, _setLanguage] = useState("german")

    const myTutorURL = "https://ai-tutor-api.fly.dev/my-tutor"

    const clickHandler = (question) => {
        setMessage(question)
    }

    const onChangeCaptcha = (value) => {
        setCaptcha(true)
        console.log("Captcha value:", value)
    }

    const submitHandler = (e) => {
        if (captcha === false) {
            alert("Please complete the captcha to send your first message")
            return
        }
        e.preventDefault();
        setSubmitActive(false)
        console.log(message)
        if (!message.trim()) {
          alert("Please type a message.");
          return;
        }
        axios
            .post(`${myTutorURL}/${language}`, {
                message: message
            })
            .then((res) => {
                setResponse(res?.data?.message)
                setSubmitActive(true)
                console.log(res.data)
            })
            .catch((err) => {
                setSubmitActive(true)
                console.log(`Unable to send user response: ${err}`);
            });
        
        setMessage("");
      };
    

    return (
        <section className='w-full h-screen relative'>
            <div className='mx-24 mt-12 flex flex-row justify-evenly '>
                <div className=''>
                    <h1 className='text-2xl mb-4'>Language Coach</h1>
                <div className='mb-4'>
                    <h2 className='text-blue-600 text-lg mb-4'>Example Questions <span className='text-sm'>(click to try)</span></h2>
                    <ul>
                        <li><button className='mb-2 hover:cursor-pointer hover:text-blue-600' onClick={()=> clickHandler("What are some fun slang phrases to use in Spanish?")}>1. What are some fun slang phrases to use in Spanish?</button></li>
                        <li><button className='mb-2 hover:cursor-pointer hover:text-blue-600' onClick={()=> clickHandler("What is the difference between preterite and past imperfect?")}>2. What is the difference between preterite and past imperfect?</button></li>
                        <li><button className='mb-2 hover:cursor-pointer hover:text-blue-600' onClick={()=> clickHandler("What are the 25 most important verbs to learn in Spanish?")}>3. What are the 25 most important verbs to learn in Spanish?</button></li>
                        <li><button className='mb-2 hover:cursor-pointer hover:text-blue-600' onClick={()=> clickHandler("Why do we say me gusta and not yo gusto?")}>4. Why do we say me gusta and not yo gusto?</button></li>
                        
                    </ul>
                    </div>
                    <div className=''>
                        <form className='flex flex-col w-96' onSubmit={submitHandler}>
                            <textarea placeholder='Ask Maxi anything!'
                                className='w-full h-32 p-2 border-2 rounded-md drop-shadow-md'
                                name="userInput"
                                id="userInput"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            >
                            </textarea>
                            <button className='w-32 drop-shadow-lg rounded-md text-white bg-blue-600 my-4 transition hover:bg-blue-700' 
                            type='submit'
                            disabled={!submitActive}>
                                Send
                            </button>
                            <ReCAPTCHA
                                sitekey="6LeKRXMpAAAAABx-vhpyN_ChG4Uekswmd5DhuO8Y"
                                size='compact'
                                onChange={onChangeCaptcha}
                                useRecaptchaNet="true"
                            />
                        </form>
                    </div>
                    
                </div>
                    <div className='w-1/2'>

                        {response && (
                            <div>
                                <h2 className='text-blue-600 text-xl mb-8'>Maxi says:</h2>
                                <p>{response}</p>
                            </div>
                        )}
                    </div>
            </div>
        </section>
    );
};

export default Lesson;