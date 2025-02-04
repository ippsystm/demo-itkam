import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {HashRouter, BrowserRouter, Route, withRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Loading/Global";
import store from "./redux/redux-store";
//import {withSuspense} from "./components/hoc/withSuspense";
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
//import ProfileContainer from "./components/Profile/ProfileContainer";
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    {/* <Route path='/dialogs' component={Dialogs}/>
                        <Route path='/profile' component={Profile}/>*/}
                    {/*<Route path='/dialogs'
                           render={() => {
                               return <React.Suspense fallback={<Preloader/>}>
                                   <DialogsContainer/>
                               </React.Suspense>
                           }}/>*/}
                    {/*<Route path='/dialogs'
                           render={withSuspense(DialogsContainer)}/>*/}
                    <React.Suspense fallback={<Preloader/>}>
                        <Route path='/dialogs'
                               render={() => <DialogsContainer/>}/>
                        <Route path='/profile/:userId?'
                               render={() => <ProfileContainer/>}/>
                        <Route path='/users'
                               render={() => <UsersContainer/>}/>
                        <Route path='/login'
                               render={() => <Login/>}/>
                    </React.Suspense>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,//наша компонента обязана уже быть обёрнута BrowserRouter, иначе не сработает withRouter
    connect(mapStateToProps, {initializeApp}))(App);

let SamuraiJSApp = (props) => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}

export default SamuraiJSApp;
