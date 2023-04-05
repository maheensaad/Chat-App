import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
     const [username, setUsername] = useState('');
     const [password, setPassword] =  useState('');
     const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = {'Project-ID' : "db75e5b9-11a0-4e99-98e2-fa1216775c27", 'User-Name' : username, 'User-Secret' : password };
        
        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });
            localStorage.setItem('username', username); // so we don't have to login again and again. login data gets stored
            localStorage.setItem('password', password);

            window.location.reload(); //to reload the page
        } catch (error) {
            setError('The credentials you typed are incorrect.')
        }
         
    }

     return (
         <div className="wrapper">
             <div className="form">
                 <h1 className="title">Chat Application</h1>
                 <form onSubmit={handleSubmit }>
                    <input type = "text" value = {username} onChange = {(e) => setUsername(e.target.value)} className = "input" placeolder = "Username" required />
                    <input type = "password" value = {password} onChange = {(e) => setPassword(e.target.value)} className = "input" placeolder = "Password" required />
                    <div align = "center">
                        <button type="submit" className="button ">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                 </form>

             </div>

         </div>
     )
}

export default LoginForm;