import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import About from './Components/about/About'
import { Footer } from './Components/footer/Footer'
import Header from './Components/header/Header'
import { IndexNavbar } from './Components/navbar/index'
import { Class } from './Components/class/Class';
import { Teacher } from './Components/teacher/Teacher';
import { SingUp } from './Components/singUp/SingUp';
import { Login } from './Components/login/Login';
import { ForgotPassword } from './Components/forgotPassword/ForgotPassword';
import { ResetPassword } from './Components/forgotPassword/ResetPassword';
import { Profile } from './Components/profile/Profile';
import { ProfileTeacher } from './Components/profile-teacher/ProfileTeacher';
import { ClassTeacher } from './Components/class-teacher/ClassTeacher';
import { ClassUpload } from './Components/class-upload/ClassUpload';
import { Contract } from './Components/contract/Contract';
import { StClasses } from './Components/st-classes/StClasses';
import MyProvider from './utils/MyProvider'

function App() {
  return (
    <div className="App">
      <Router>
        <MyProvider>
          <IndexNavbar />
          <Switch>
            <Route exact path="/">
              <Header />
              <About />
            </Route>
            <Route path="/registro">
              <SingUp />
            </Route>
            <Route path="/iniciar-sesion">
              <Login />
            </Route>
            <Route path="/recuperar-clave">
              <ForgotPassword />
            </Route>
            <Route path="/cambiar-clave">
              <ResetPassword />
            </Route>
            <Route path="/mi-perfil">
              <Profile />
            </Route>
            <Route path="/mi-perfil-profesor">
              <ProfileTeacher />
            </Route>
            <Route path="/clases">
              <Class />
            </Route>
            <Route path="/profesores">
              <Teacher />
            </Route>
            <Route path="/clase-del-profesor">
              <ClassTeacher />
            </Route>
            <Route path="/nueva-clase">
              <ClassUpload />
            </Route>
            <Route path="/mis-clases">
              <StClasses />
            </Route>
            <Route path="/contrataciones">
              <Contract />
            </Route>
            <Redirect to="/" />
          </Switch>
          <Footer />
        </MyProvider>
      </Router>
    </div>
  )
}

export default App
