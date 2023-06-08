/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

import AuthenticateAdmin from '~/admin/utils/AuthenticateAdmin';
import ProfileBtn from './ProfileBtn';
import { getUser } from '~/admin/utils';
import './Profile.css';
import getAvatar from '~/admin/utils/GetAvatar';

function Profile(props) {
    const { inforUser } = AuthenticateAdmin;
    const [getInfoUser, setGetInfoUser] = useState({});

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
        <div className="admin__pages__content-page--card" style={{ minHeight: '500px' }}>
            <div className="admin__pages__profile--wrapper">
                <div>
                    {inforUser && getInfoUser && (
                        <div className="admin__pages__profile--wrapper-content">
                            <img
                                alt=""
                                className="admin__pages__profile--wrapper-content-img"
                                src={getAvatar(getInfoUser.image)}
                            />
                            <span className="font-weight-bold">{getInfoUser.role}</span>
                            <span className="font-weight-bold mt-2" style={{ fontSize: '20px' }}>
                                {getInfoUser.name}
                            </span>
                            <span className="text-black-50" style={{ fontSize: '20px' }}>
                                {getInfoUser.email}
                            </span>
                            <ProfileBtn getInfoUser={getInfoUser} fetchApiGetUser={fetchApiGetUser} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Profile;
