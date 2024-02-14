import React, {useState} from 'react';
import axios from 'axios';
import greetings from '../lessons/a1/greetings.json'

const Lesson = () => {

    const endPoint = import.meta.env.VITE_ENDPOINT
    const [message, setMessage] = useState("");
    const [response, setResponse] = useState("");
    const [userConversation, setUserConversation] = useState([]);

    const submitHandler = async (e) => {
        e.preventDefault();
        if (!message.trim()) {
          alert("Please type a message.");
          return;
        }
        e.currentTarget.disabled = true;
    
        await axios
            // .post(`http://localhost:8080/my-tutor`, {
            //     method: "POST",
            //     headers: {
            //       "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify({ message }),
            //   })
        .get(`http://localhost:8080`)
            .then((res) => {
                console.log(res)
                res.json()
            })
            .then((data) => {
              setResponse(data.message);
              trackConversation(message, response);
              e.currentTarget.disabled = false;
            })
            .catch((err) => {
              console.log("Unable to send user response");
            });
        setMessage("");
      };
    

    return (
        <section className='w-full h-screen relative'>
            <div className='m-24'>
            <div className=''>
                <h1>LESSON</h1>

                <form className='flex flex-col w-96' onSubmit={submitHandler}>
                    <textarea placeholder='Ask Maxi anything!'
                        className='w-full h-32 border-2 rounded-md'
                        name="userInput"
                        id="userInput"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    >
                    </textarea>
                    <button className='border-2 w-32 rounded-md my-4' type='submit'>Send</button>
                </form>
            </div>
            <div>
                <h2>Example Questions</h2>
                <ul>
                    <li>Teach me about past simple verbs.</li>
                    <li>What is the difference between preterite and past imperfect?</li>
                    <li>What are the 25 most important verbs to learn in Spanish?</li>
                </ul>
            </div>
            </div>
        </section>
    );
};

export default Lesson;