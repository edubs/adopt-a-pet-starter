import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Navigation from './components/navigation';
import { BrowserRouter, Route, useParams, Switch } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Switch>
          <Route path='/:type/:id'>;
            <PetDetailsPage />
          </Route>
          <Route path='/search'>
            <SearchPage />
          </Route>
          <Route path='/pet-details-not-found'>
            <PetDetailsNotFound />
          </Route>
          <Route path='/:type?'>
            <HomePage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
