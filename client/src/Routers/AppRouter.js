import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import LandingPage from '../Components/LandingPage';
import About from '../Components/About';
import Signup from '../Components/Signup';
import Login from '../Components/Login';
import MyProfile from '../Components/MyProfile';
import Profiles from '../Components/Profiles';
import UpdateProfile from '../Components/UpdateProfile';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/' component={LandingPage} exact={true} />
        <Route path='/about' component={About} />
        <Route path='/signup' component={Signup} />
        <Route path='/login' component={Login} />
        <Route path='/myprofile' component={MyProfile} />
        <Route path='/profiles' component={Profiles} />
        <Route path='/updateProfile' component={UpdateProfile} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;