import Header from "../components/Header";
import { useContext } from "react";
import { useHistory } from 'react-router-dom'
import { CurrentUserContext } from "../currentUser/CurrentUserContext";
import { removeToken } from '../services/auth'

export default function Layout(props) {
  const history =  useHistory()
  const [currentUser, setCurrentUser] = useContext(CurrentUserContext);
   const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
    history.push('/');
   }
  
  return (
    <div className="App">
      <Header currentUser={currentUser} handleLogout={handleLogout} />
      {props.children}
    </div>
  );
}
