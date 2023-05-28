import { Fragment } from 'react';
import NavHeader from './NavHeader';
import SideBar from './SideBar';
import Footer from './Footer';
import Header from './Header';
import Loader from './Loader';

import { ContentPage } from '../pages';

function AdminPage(props) {
    return (
        // <RouterProvider router={router}>
        <Fragment>
            {/* Loader */}
            {/* <Loader /> */}
            {/* <div id="admin__layouts--main-wrapper" className='show menu-toggle'> */}
            {/* Nav Header */}
            <NavHeader />

            {/* header */}
            <Header />

            {/* Side bar */}
            <SideBar />

            {/* Content */}
            <ContentPage />

            {/* Footer */}
            <Footer />
            {/* </div> */}
        </Fragment>
        // </RouterProvider>
    );
}

export default AdminPage;
