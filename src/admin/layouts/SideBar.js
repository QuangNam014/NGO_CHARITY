import { Link } from 'react-router-dom';

import { PathAdmin } from '../../routers/PathAdmin';
import AuthenticateAdmin from '../utils/AuthenticateAdmin';
import { useLoginStore } from '../stores';

function SideBar(props) {
    const { inforUser } = AuthenticateAdmin;
    const { checkRole } = useLoginStore();
    const isRole = checkRole === 'Manager' || (inforUser && inforUser.role === 'Manager');
    return (
        <div className="admin__layouts__sidebar--nk-sidebar">
            <div className="admin__layouts__sidebar--nk-nav-scroll">
                <ul className="admin__layouts__sidebar--metismenu" id="menu">
                    <li>
                        <Link to={PathAdmin.admin} aria-expanded="false">
                            <i className="icon-speedometer menu-icon"></i>
                            <span className="admin__layouts__sidebar--nav-text">Dashboard</span>
                        </Link>
                    </li>

                    <li>
                        <Link to={PathAdmin.adminDonation} aria-expanded="false">
                            <i className="icon-speedometer menu-icon"></i>
                            <span className="admin__layouts__sidebar--nav-text">Donation</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={PathAdmin.adminAbout} aria-expanded="false">
                            <i className="icon-speedometer menu-icon"></i>
                            <span className="admin__layouts__sidebar--nav-text">About Management</span>
                        </Link>
                    </li>
                    {isRole && (
                        <li>
                            <Link to={PathAdmin.adminManager} aria-expanded="false">
                                <i className="icon-speedometer menu-icon"></i>
                                <span className="admin__layouts__sidebar--nav-text">Quản lý Admin</span>
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default SideBar;
