/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ModalComponent } from '~/admin/components';
import { ToastError, ToastSuccess, getListAdmin } from '~/admin/utils';
import { PathAdmin } from '~/routers/PathAdmin';
import CreateAdmin from './CreateAdmin';
import ResetPassword from './ResetPassword';

function ManagerAdmin(props) {
    const [showModal, setShowModal] = useState(false);
    const [listAdmin, setListAdmin] = useState([]);

    const navigate = useNavigate();

    const fetchApiListAdmin = () => {
        try {
            getListAdmin()
                .then((result) => {
                    if (result.status === 200) {
                        setListAdmin(result.data);
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
        fetchApiListAdmin();
    }, []);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    return (
        <div className="admin__pages__content-page--card" style={{ minHeight: '500px' }}>
            <div className="card-body">
                <div className="card-title">
                    <h4>Manager Admin</h4>
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
                    <CreateAdmin closeModal={closeModal} listAdmin={listAdmin} fetchApiListAdmin={fetchApiListAdmin} />
                </ModalComponent>

                {listAdmin.length > 0 ? (
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listAdmin.map((item) => (
                                    <tr key={item.id}>
                                        <th>{item.id}</th>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>
                                            <ResetPassword email={item.email} />
                                            <button
                                                type="button"
                                                className="btn mb-1 ml-2 btn-outline-danger"
                                                data-toggle="tooltip"
                                                data-placement="bottom"
                                                title="delete account"
                                            >
                                                <i className="fa-solid fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div>Hiện tại chưa có admin nào</div>
                )}
            </div>
        </div>
    );
}

export default ManagerAdmin;
