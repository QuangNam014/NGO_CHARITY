import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import { PathUser } from './PathUser';
import { PathAdmin } from './PathAdmin';

import {
    AboutUs,
    Donate,
    ForgetPassword,
    HelpCentre,
    HomePage,
    NotFoundUser,
    OutPartner,
    ProfileUser,
    UserLogin,
} from '../user';
import {
    AdminLogin,
    AdminPage,
    DashBoard,
    Donation,
    ManagerAdmin,
    NotFoundAdmin,
    PrivateAdmin,
    Profile,
    AboutAdmin,
} from '../admin';

const router = createBrowserRouter([
    {
        path: PathUser.user,
        element: <App />,
        children: [
            {
                path: PathUser.user,
                element: <HomePage />,
            },
            {
                path: PathUser.userAboutUs,
                element: <AboutUs />,
            },
            {
                path: PathUser.userOutPartner,
                element: <OutPartner />,
            },
            {
                path: PathUser.userDonate,
                element: <Donate />,
            },
            {
                path: PathUser.userHelp,
                element: <HelpCentre />,
            },
            {
                path: PathUser.userProfile,
                element: <ProfileUser />,
            },
        ],
    },
    {
        path: PathAdmin.admin,
        element: (
            <PrivateAdmin>
                <AdminPage />
            </PrivateAdmin>
        ),
        children: [
            {
                path: PathAdmin.admin,
                element: <DashBoard />,
            },
            {
                path: PathAdmin.adminDonation,
                element: <Donation />,
            },
            {
                path: PathAdmin.adminManager,
                element: <ManagerAdmin />,
            },
            {
                path: PathAdmin.adminProfile,
                element: <Profile />,
            },
            {
                path: PathAdmin.adminAbout,
                element: <AboutAdmin />,
            },
        ],
    },
    {
        path: PathUser.userLogin,
        element: <UserLogin />,
    },
    {
        path: PathUser.userForgetPassword,
        element: <ForgetPassword />,
    },
    {
        path: PathUser.userNotFound,
        element: <NotFoundUser />,
    },
    {
        path: PathAdmin.adminLogin,
        element: <AdminLogin />,
    },
    {
        path: PathAdmin.adminNotFound,
        element: <NotFoundAdmin />,
    },
]);

export default router;
