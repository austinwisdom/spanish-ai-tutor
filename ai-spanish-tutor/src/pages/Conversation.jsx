import React, {useState} from 'react';
import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";

const Conversation = () => {
    
    const endPoint = import.meta.env.VITE_ENDPOINT
    const siteKey = import.meta.VITE_CAPTCHA_KEY
    const [message, setMessage] = useState("");
    const [response, setResponse] = useState("");
    const [captcha, setCaptcha] = useState(true)
    const [submitActive, setSubmitActive] = useState(true)

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
            .post(`http://localhost:8080/my-tutor`, {
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
            <div className='flex flex-col mt-12'>
                <div className='self-center'>

                </div>

                <div className='self-center w-1/2'>
                        <div className='border-2 bg-neutral-50 rounded-md h-80 mb-2 overflow-scroll'>
                            <ul className='p-2 flex flex-col'>
                                <li className='self-start'><p className='border-2 rounded-md px-4 py-1 mx-4 bg-white'>¿Hola, qué tal?</p></li>
                                <li className='self-end'><p className='border-2 border-blue-600 px-4 py-1 bg-blue-600 text-white rounded-md mx-4'>Bien, ¿y tú?</p></li>
                                <li className='self-start'><p className='border-2 rounded-md px-4 py-1 mx-4 bg-white'>Bien, ¡gracias!</p></li>
                            </ul>
                        </div>
                        <form className='flex flex-col' onSubmit={submitHandler}>
                            <textarea placeholder="Let's practice speaking!"
                                className='w-full h-24 p-2 border-2 rounded-md'
                                name="userInput"
                                id="userInput"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            >
                            </textarea>
                            <button className='border-2 w-32 rounded-md text-white bg-blue-600 my-4 transition hover:bg-blue-700' type='submit'>Send</button>
                            <ReCAPTCHA
                                sitekey="6LeKRXMpAAAAABx-vhpyN_ChG4Uekswmd5DhuO8Y"
                                size='compact'
                                onChange={onChangeCaptcha}
                                useRecaptchaNet="true"
                            />
                        </form>
                </div>
            </div>
        </section>
    );
};

export default Conversation;