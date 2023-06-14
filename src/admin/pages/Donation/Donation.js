/* eslint-disable react-hooks/exhaustive-deps */
import AuthenticateAdmin from '~/admin/utils/AuthenticateAdmin';
import ListReceipts from './ListReceipts';
import { useEffect, useState } from 'react';
import { GetListUserReceipt, ToastError, getListProgram } from '~/admin/utils';
import { useNavigate } from 'react-router-dom';
import { PathAdmin } from '~/routers/PathAdmin';
import { ModalComponent } from '~/admin/components';
import CreateCashOut from './CreateCashOut';

function Donation(props) {
    const [listProgram, setListProgram] = useState([]);
    const [listCategory, setListCategory] = useState([]);
    const [listUserReceipt, setListUserReceipt] = useState([]);

    const [showModal, setShowModal] = useState(false);
    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);
    const { inforUser } = AuthenticateAdmin;

    const navigate = useNavigate();

    const fetchApiProgram = () => {
        // setIsLoading(true);
        try {
            getListProgram()
                .then((result) => {
                    if (result.status === 200) {
                        setTimeout(() => {
                            setListProgram(result.data);
                            // setIsLoading(false);
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

    const fetchApiUserReceipt = () => {
        // setIsLoading(true);
        try {
            GetListUserReceipt()
                .then((result) => {
                    if (result.status === 200) {
                        setTimeout(() => {
                            setListUserReceipt(result.data);
                            // setIsLoading(false);
                        }, 1500);
                    }
                })
                .catch((error) => {
                    if (error.message === 'Network Error') {
                        navigate(`../${PathAdmin.adminNotFound}`);
                    } else {
                        const errorValid = error.response.data;
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
        fetchApiUserReceipt();
        fetchApiProgram();
    }, []);

    return (
        <div className="admin__pages__content-page--card" style={{ minHeight: '500px' }}>
            <div className="card-body">
                <div className="card-title border-bottom mb-3">
                    <h4>Donation Admin</h4>
                </div>

                {inforUser && inforUser.role === 'Manager' && (
                    <button
                        type="button"
                        className="btn mb-3 btn-info border-bottom"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="cash out"
                        onClick={openModal}
                    >
                        <i className="fa-solid fa-plus"></i>
                    </button>
                )}

                <ModalComponent showModal={showModal} closeModal={closeModal} contentLabel="Create Cash Out">
                    <CreateCashOut closeModal={closeModal} listCategory={listCategory} listProgram={listProgram} inforUser={inforUser} />
                </ModalComponent>

                <ListReceipts listProgram={listProgram} listUserReceipt={listUserReceipt} />
            </div>
        </div>
    );
}

export default Donation;
