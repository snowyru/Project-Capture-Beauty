import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LayoutRoute from './LayoutRoute';
import Login from './Login';

function App() {
  return (
    <BrowserRouter>
    {/* Instead of Switch i used Router and component to element because of stack overflow should'nt matter if you can just plug my code into your App.js*/}
    {/* Heres the link to the stack overflow https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom */}
      <Routes>  

          <Route path="/" element={<Login/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
