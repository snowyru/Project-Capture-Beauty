import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import LayoutRoute from './LayoutRoute';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <LayoutRoute>
          
        </LayoutRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
