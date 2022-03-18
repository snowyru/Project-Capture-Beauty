import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import LayoutRoute from './LayoutRoute';
import Album from './Login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <LayoutRoute>
          <LayoutRoute path="/" component={Album} exact="true" />
        </LayoutRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
