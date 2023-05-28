import React from 'react';
import { Outlet } from 'react-router-dom';

function ContentPage(props) {
    return (
        <div className="admin__pages__content-page--content-body" style={{ minHeight: 700 }}>
            <div className="container-fluid mt-3">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-12">
                                <Outlet />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContentPage;
