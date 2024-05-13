import React, {useState} from 'react';
import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";

// deployed api url https://ai-tutor-api.fly.dev/my-tutor
// test url http://localhost:3000/my-tutor

const Lesson = ({languages, langStudy}, ...props) => {

    const endPoint = import.meta.env.VITE_ENDPOINT
    const siteKey = import.meta.VITE_CAPTCHA_KEY
    const [message, setMessage] = useState("");
    const [response, setResponse] = useState("");
    const [captcha, setCaptcha] = useState(false)
    const [userConversation, setUserConversation] = useState([]);
    const [submitActive, setSubmitActive] = useState(true)

    const myTutorURL = "https://ai-tutor-api.fly.dev/my-tutor"
    const myTutorTestURL = "http://localhost:3000/my-tutor"

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
        if (!langStudy) {
            alert("Please choose a language to study in order to send your first message")
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
            .post(`${myTutorURL}/${langStudy.id || "es"}`, {
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
                    <h1 className='text-2xl mb-4'>Language Coach: {langStudy.tutor}</h1>
                <div className='mb-4'>
                    <h2 className='text-blue-600 text-lg mb-4'>Example Questions <span className='text-sm'>(click to try)</span></h2>
                    <ul>
                        {languages.find((element) => element.id === langStudy.id)?.questions.map((question) => {
                            return(
                                <li><button className='mb-2 hover:cursor-pointer hover:text-blue-600' onClick={()=> clickHandler(question)}>{question}</button></li>
                            )
                        })}
                    </ul>
                    </div>
                    <div className=''>
                        <form className='flex flex-col w-96' onSubmit={submitHandler}>
                            <textarea placeholder='Ask anything!'
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
                                <h2 className='text-blue-600 text-xl mb-8'>{langStudy.tutor} says:</h2>
                                <p>{response}</p>
                            </div>
                        )}
                    </div>
            </div>
        </section>
    );
};

export default Lesson;