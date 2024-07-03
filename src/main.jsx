import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/styles/styles.css";
import App from './App.jsx'
import {createBrowserRouter} from 'react-router-dom'
import {RouterProvider} from 'react-router-dom'
import {ProfileList} from './modules/profile/ProfileList.jsx'
import {profiles} from './static/profiles.js';
import {ProfileStats} from './modules/profile/ProfileStats.jsx'
import {Header} from './components/Header.jsx';
import {ThemeProvider} from "@mui/material";
import {theme} from "./assets/themes/theme.js";
import { Login } from './auth/Login.jsx';
import { RecoveryPasswordSetEmail } from './auth/RecoveryPasswordSetEmail.jsx';
import { RecoveryPasswordSetPass } from './auth/RecoveryPasswordSetPass.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <ProfileList profiles={profiles}/>,
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/recovery-password",
        element: <RecoveryPasswordSetEmail/>
    },
    {
        path: "/recovery-password/new-password",
        element: <RecoveryPasswordSetPass/>
    },
    {
        path: "/profile/:profileId",
        element: <ProfileStats/>,
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Header/>
        <ThemeProvider theme={theme}>
            <RouterProvider router={router}/>
        </ThemeProvider>
    </React.StrictMode>,
)
