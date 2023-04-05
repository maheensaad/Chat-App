import { ChatEngine } from "react-chat-engine";

import './App.css';
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

const App = () => {

    if(!localStorage.getItem('username')) return <LoginForm />;

    return (
        <ChatEngine
        height = "100vh"
        projectID = "db75e5b9-11a0-4e99-98e2-fa1216775c27"
        userName = {localStorage.getItem('username')}
        userSecret = {localStorage.getItem('password')}
        renderChatFeed = {(chatAppProps) => <ChatFeed {... chatAppProps}/> }
        />
    )
}

export default App;