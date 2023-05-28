import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { PathUser } from './PathUser';
import { PathAdmin } from './PathAdmin';
import { AboutUs, Donate, HelpCentre, HomePage, NotFoundUser, OutPartner } from '../user';
import { AdminPage, DashBoard, Donation, ManagerAdmin, NotFoundAdmin } from '../admin';

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
        ],
    },
    {
        path: PathAdmin.admin,
        element: <AdminPage />,
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
        ],
    },
    {
        path: PathUser.userNotFound,
        element: <NotFoundUser />,
    },
    {
        path: PathAdmin.adminNotFound,
        element: <NotFoundAdmin />,
    },
]);

export default router;
