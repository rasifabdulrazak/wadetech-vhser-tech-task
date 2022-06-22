
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import ShowDetailsPage from './pages/ShowDetailsPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='service_details/:id/' element={<ShowDetailsPage />} />
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
