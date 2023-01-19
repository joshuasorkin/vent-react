import Header from './components/Header/Header';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import Home from './components/Home/Home';
import {Route,Routes} from 'react-router-dom';
import {socket,SocketContext} from './context/socket';

function App() {
  return(
    <>
        <SocketContext.Provider value={socket}>
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<RegistrationForm />} />
            </Routes>
          </div>
        </SocketContext.Provider>
    </>
  )
}  
export default App;
