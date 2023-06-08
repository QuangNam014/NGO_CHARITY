/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import NavHeader from './NavHeader';
import SideBar from './SideBar';
import Footer from './Footer';
import Header from './Header';
// import Loader from './Loader';
import { ContentPage } from '../pages';
import { getUser } from '../utils';
import AuthenticateAdmin from '../utils/AuthenticateAdmin';
function AdminPage(props) {
    const [getInfoUser, setGetInfoUser] = useState({});

    const { inforUser } = AuthenticateAdmin;
    const fetchApiGetUser = () => {
        if (inforUser) {
            getUser(inforUser.email)
                .then((result) => setGetInfoUser(result))
                .catch((error) => console.log(error));
        }
    };

    useEffect(() => {
        fetchApiGetUser();
    }, []);

    return (
        <Fragment>
            <ToastContainer />

            <div>
                {/* Loader */}
                {/* <Loader /> */}
                {/* <div id="admin__layouts--main-wrapper" className='show menu-toggle'> */}
                {/* Nav Header */}
                <NavHeader />

                {/* header */}
                <Header getInfoUser={getInfoUser} />

                {/* Side bar */}
                <SideBar />

                {/* Content */}
                <ContentPage />

                {/* Footer */}
                <Footer />
                {/* </div> */}
            </div>
        </Fragment>
    );
}

export default AdminPage;
