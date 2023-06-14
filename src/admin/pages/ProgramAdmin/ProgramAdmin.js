/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import { CircularProgress } from 'react-cssfx-loading';

import { ModalComponent } from '~/admin/components';
import { ToastError, getListProgram } from '~/admin/utils';
import { PathAdmin } from '~/routers/PathAdmin';
import ListProgram from './ListProgram';
import CreateProgram from './CreateProgram';

function ProgramAdmin(props) {
    const [showModal, setShowModal] = useState(false);
    const [listProgram, setListProgram] = useState([]);
    const [listCategory, setListCategory] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    const navigate = useNavigate();

    const fetchApiProgram = () => {
        setIsLoading(true);
        try {
            getListProgram()
                .then((result) => {
                    if (result.status === 200) {
                        setTimeout(() => {
                            setListProgram(result.data);
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
        setListCategory([
            { id: 1, title: 'Children' },
            { id: 2, title: 'HealthCare' },
            { id: 3, title: 'Disaster Relief' },
            { id: 4, title: 'Women Empowerment' },
        ]);

        fetchApiProgram();
    }, []);

    return (
        <div className="admin__pages__content-page--card" style={{ minHeight: '500px' }}>
            <div className="card-body">
                <div className="card-title">
                    <h4>Program admin</h4>
                </div>

                <button
                    type="button"
                    className="btn mb-1 btn-info"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="add account"
                    onClick={openModal}
                >
                    <i className="fa-solid fa-plus"></i>
                </button>

                <ModalComponent showModal={showModal} closeModal={closeModal} contentLabel="Create Admin">
                    <CreateProgram
                        listCategory={listCategory}
                        closeModal={closeModal}
                        fetchApiProgram={fetchApiProgram}
                    />
                </ModalComponent>

                {isLoading ? (
                    <div style={{ textAlign: 'center', marginTop: '200px', fontSize: 50 }}>
                        <CircularProgress />
                        <h4>Loading ...</h4>
                    </div>
                ) : (
                    <InfiniteScroll
                        dataLength={listProgram.length}
                        next={fetchApiProgram}
                        hasMore={false}
                        endMessage={<p>No more data to load.</p>}
                    >
                        <ListProgram listCategory={listCategory} fetchApiProgram={fetchApiProgram} listProgram={listProgram} setListProgram={setListProgram} />
                    </InfiniteScroll>
                )}
            </div>
        </div>
    );
}

export default ProgramAdmin;
