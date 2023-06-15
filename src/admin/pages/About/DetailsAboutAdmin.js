import React, { Fragment, useEffect, useState } from 'react';
import '../About/css/DetailsAboutCSS.module.css';
import Modal from 'react-modal';
import axios from 'axios';

function DetailsAboutAdmin({ item, fetchApiAbout }) {
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

    console.log(item);

    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);
    const [about, setAbout] = useState(item);

    useEffect(() => {
        axios
            .get('http://localhost:5065/api/About')
            .then((res) => {
                console.log(res);
                setAbout(res.data);
                fetchApiAbout();
            })
            .catch((error) => {
                console.log('Error fetching about data:', error);
            });
    }, []);

    console.log('about.name:', about.name);
    console.log('about.name:', about?.name);
    return (
        <Fragment>
            <button
                type="button"
                className="btn mb-1 btn-outline-primary"
                data-toggle="tooltip"
                data-placement="bottom"
                title="details"
                onClick={openModal}
            >
                <i className="fa-solid fa-info"></i>
            </button>
            <Modal isOpen={showModal} onRequestClose={closeModal} style={customStyles} contentLabel="About Details">
                {about ? (
                    <form id="aboutForm" encType="multipart/form-data">
                        <div className="details-container">
                            <h1 className="details-title" style={{ textAlign: 'center' }}>
                                About Details
                            </h1>
                            <div className="details-content">
                                <div className="details-field">
                                    <label htmlFor="name">Name:</label>
                                    <p>{about.name}</p>
                                </div>
                                <div className="details-field">
                                    <label htmlFor="accountName">Account Name:</label>
                                    <p>{about.account_Name}</p>
                                </div>
                                <div className="details-field">
                                    <label htmlFor="accountNumber">Account Number:</label>
                                    <p>{about.account_Number}</p>
                                </div>
                                <div className="details-field">
                                    <label htmlFor="accountBank">Account Bank:</label>
                                    <p>{about.account_Bank}</p>
                                </div>
                                <div className="details-field">
                                    <label htmlFor="image">Image:</label>
                                    <img src={about.image} alt="About Image" className="details-image" />
                                </div>
                                <div className="details-field">
                                    <label htmlFor="createdAt">Created At:</label>
                                    <p>{about.createdAt}</p>
                                </div>
                                <div className="details-field">
                                    <label htmlFor="updatedAt">Updated At:</label>
                                    <p>{about.updatedAt}</p>
                                </div>
                            </div>
                        </div>
                    </form>
                ) : (
                    <p>Loading...</p>
                )}
            </Modal>
        </Fragment>
    );
}

export default DetailsAboutAdmin;
