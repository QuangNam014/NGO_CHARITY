import React from 'react';
import { Link } from 'react-router-dom';
import { PathAdmin } from '../../routers/PathAdmin';


function SideBar(props) {
    return (
        <div className="admin__layouts__sidebar--nk-sidebar">           
            <div className="admin__layouts__sidebar--nk-nav-scroll">
                <ul className="admin__layouts__sidebar--metismenu" id="menu">
                    <li >
                        <Link to={PathAdmin.admin} aria-expanded="false">
                            <i className="icon-speedometer menu-icon"></i><span className="admin__layouts__sidebar--nav-text">Dashboard</span>
                        </Link>
                    </li>
                    {/* <li className={isActive === 2 ? "mega-menu mega-menu-sm layout__admin-sidebar-active" : "mega-menu mega-menu-sm"} onClick={() => handleActive(2)}>
                        <Link aria-expanded="false">
                            <i className="icon-speedometer menu-icon"></i><span className="nav-text">Layouts</span>
                        </Link>
                    </li> */}
                    <li >
                        <Link to={PathAdmin.adminDonation} aria-expanded="false">
                            <i className="icon-speedometer menu-icon"></i><span className="admin__layouts__sidebar--nav-text">Donation</span>
                        </Link>
                    </li>
                    <li >
                        <Link to={PathAdmin.adminManager} aria-expanded="false">
                            <i className="icon-speedometer menu-icon"></i><span className="admin__layouts__sidebar--nav-text">Quản lý Admin</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SideBar;