import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Chat from './components/chat/Chat';
import Login from './components/login/Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from './contextAPI/StateProvider';

const App = () => {
  const [{user}] = useStateValue();
  return (
    <div className="app">
      {
        !user ? (
        <Login/>)
        :
        (
          <div className="app__body">
            <Router>
              <Switch>
                <Route path="/rooms/:roomId">
                  <Sidebar />
                  <Chat />
                </Route>
                <Route path="/">
                  <Sidebar/>
                </Route>
              </Switch>
            </Router>
          </div>
        )
      }
     
    </div>
  );
};

export default App;
