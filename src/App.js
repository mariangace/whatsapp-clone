import "./App.css";
import Sidebar from "./components/sidebar/sidebar.component";
import Chat from './components/chat/chat.component';

const App = () => {
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default App;
