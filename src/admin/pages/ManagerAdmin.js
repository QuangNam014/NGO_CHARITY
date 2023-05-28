import { useState } from 'react';
import Modal from 'react-modal';
import './ModalStyles.css';

function ManagerAdmin(props) {
    const customStyles = {
        overlay: {
            backgroundColor: '#2f2e2ebf',
        },
        content: {
            animation: 'fadeIn 1s ease-in-out',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    const [showModal, setShowModal] = useState(false);

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

                <Modal isOpen={showModal} onRequestClose={closeModal} contentLabel="Create admin" style={customStyles}>
                    <div className="card text-center" style={{ minWidth: 500 }}>
                        <div className="card-body">
                            <div className="admin__modal_style_icon" onClick={closeModal}>
                                <i className="fa-solid fa-circle-xmark"></i>
                            </div>
                            <div className="form-validation">
                                <form className="form-valide" action="#" method="post">
                                    <div className="mb-3">
                                        <h3>Create new admin</h3>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-4 col-form-label" htmlFor="val-username">
                                            UserName <span className="text-danger">*</span>
                                        </label>
                                        <div className="col-lg-6">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="val-username"
                                                name="val-username"
                                                placeholder="Enter username"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-4 col-form-label" htmlFor="val-username">
                                            Email <span className="text-danger">*</span>
                                        </label>
                                        <div className="col-lg-6">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="val-username"
                                                name="val-username"
                                                placeholder="Enter email"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-4 col-form-label" htmlFor="val-email">
                                            Password <span className="text-danger">*</span>
                                        </label>
                                        <div className="col-lg-6">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="val-email"
                                                name="val-email"
                                                placeholder="Enter password"
                                            />
                                        </div>
                                    </div>
                                    <button className="btn btn-primary" onClick={closeModal}>
                                        Create
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </Modal>

                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>Nam</td>
                                <td>nam@gmail.com</td>
                                <td>0123456789</td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn mb-1 btn-outline-warning"
                                        data-toggle="tooltip"
                                        data-placement="bottom"
                                        title="reset password"
                                    >
                                        <i className="fa-solid fa-arrows-rotate"></i>
                                    </button>
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
                            <tr>
                                <th>2</th>
                                <td>Chuyên</td>
                                <td>chuyen@gmail.com</td>
                                <td>0123456789</td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn mb-1 btn-outline-warning"
                                        data-toggle="tooltip"
                                        data-placement="bottom"
                                        title="reset password"
                                    >
                                        <i className="fa-solid fa-arrows-rotate"></i>
                                    </button>
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
                            <tr>
                                <th>3</th>
                                <td>Hân</td>
                                <td>han@gmail.com</td>
                                <td>0123456789</td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn mb-1 btn-outline-warning"
                                        data-toggle="tooltip"
                                        data-placement="bottom"
                                        title="reset password"
                                    >
                                        <i className="fa-solid fa-arrows-rotate"></i>
                                    </button>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ManagerAdmin;
