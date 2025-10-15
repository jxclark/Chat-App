import {useAuthStore} from "../store/useAuthStore.js";


const ChatPage = () => {
  const {logout} = useAuthStore();
  return <div className="z-10">
    ChatPage
    <button onClick={logout} className="btn btn-primary">Logout</button>
    </div>;
};

export default ChatPage;
