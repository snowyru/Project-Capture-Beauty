import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Profile from './Profile';
import Forgot from './Forgot';

function App() {
  return (
    <BrowserRouter>
    {/* Instead of Switch i used Router and component to element because of stack overflow should'nt matter if you can just plug my code into your App.js*/}
    {/* Heres the link to the stack overflow https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom */}
      <Routes>  
        <Route path="/" exact="true" element={<Login/>} />
        <Route path="/profile" exact="true" element={<Profile/>} />
        <Route path="/forgot" exact="true" element={<Forgot/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
