/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from 'react-cssfx-loading';
import InfiniteScroll from 'react-infinite-scroll-component';

import { ToastError, getListUser } from '~/admin/utils';
import { PathAdmin } from '~/routers/PathAdmin';
import ListUser from './ListUser';

function ManagerUser(props) {
    const [listUser, setListUser] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();

    const fetchApiListUser = () => {
        setIsLoading(true);
        try {
            getListUser()
                .then((result) => {
                    if (result.status === 200) {
                        setTimeout(() => {
                            setListUser(result.data);
                            setIsLoading(false);
                        }, 1500);
                    }
                })
                .catch((error) => {
                    if (error.message === 'Network Error') {
                        navigate(`../${PathAdmin.adminNotFound}`);
                    } else {
                        const errorValid = error.response.data; // {status, message}
                        if (errorValid.status === 404) {
                            ToastError(errorValid.message);
                        }
                    }
                });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchApiListUser();
    }, []);

    return (
        <div className="admin__pages__content-page--card" style={{ minHeight: '500px' }}>
            <div className="card-body">
                <div className="card-title">
                    <h4>Manager User</h4>
                </div>

                {isLoading ? (
                    <div style={{ textAlign: 'center', marginTop: '200px', fontSize: 50 }}>
                        <CircularProgress />
                        <h4>Loading ...</h4>
                    </div>
                ) : (
                    <InfiniteScroll
                        dataLength={listUser.length}
                        next={fetchApiListUser}
                        hasMore={false}
                        endMessage={<p>No more data to load.</p>}
                    >
                        <ListUser listUser={listUser} setListUser={setListUser} fetchApiListUser={fetchApiListUser} />
                    </InfiniteScroll>
                )}
            </div>
        </div>
    );
}

export default ManagerUser;
