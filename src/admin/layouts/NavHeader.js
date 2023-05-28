import React from 'react';

function NavHeader(props) {
    return (
        <div className="admin__layouts__nav-header--nav-header">
            <div className="admin__layouts__nav-header--brand-logo">
                <a href="index.html">
                    <b className="admin__layouts__nav-header--logo-abbr"><img src="/assets/images/logo.png" alt=""/> </b>
                    <span className="admin__layouts__nav-header--logo-compact"><img src="/assets/images/logo-compact.png" alt=""/></span>
                    <span className="admin__layouts__nav-header--brand-title">
                        <img src="/assets/images/logo-text.png" alt=""/>
                    </span>
                </a>
            </div>
        </div>
    );
}

export default NavHeader;