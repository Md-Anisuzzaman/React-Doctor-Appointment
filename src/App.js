import './App.css';
import Login from './Login/Login';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home/Home';
import Services from './Services/Services';
import NotFound from './NotFound/NotFound';
import Footer from './Footer/Footer';
import Header from './Home/Header';
import About from './About/About';
import Contact from './Contact/Contact';
import AuthProvider from './Contex-Api/AuthProvider';
import Details from './Details/Details';
import PrivateRoute from './Private/PrivateRoute';


function App() {
  return (
    <div className="App">

      <AuthProvider>

        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            {/* <Route exact path="/banner">
           <Banner></Banner>
          </Route> */}
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute exact path="/details">
              <Details> </Details>
            </PrivateRoute>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <Route exact path="/login">
              <Login> </Login>
            </Route>
            {/* <Route exact path="/footer">
             
            </Route> */}
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>






    </div>
  );
}

export default App;
