import React, { useState } from 'react';
import Modal from 'react-modal';
import './css/CreateAboutCSS.module.css';
import axios from 'axios';

function CreateAboutAdmin({ showModal, closeModal, customStyles }) {
    const initialValue = {
        name: '',
        account_Name: '',
        account_Number: '',
        account_Bank: '',
        description: '',
    };

    const [dataInput, setDataInput] = useState(initialValue);
    const [photo, setPhoto] = useState(null);

    const handleFileChange = (e) => {
        setPhoto(e.target.files[0]);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setDataInput({
            ...dataInput,
            [name]: value,
        });
    };

    const formData = new FormData();
    formData.append('Name', dataInput.name);
    formData.append('Account_Name', dataInput.account_Name);
    formData.append('Account_Number', dataInput.account_Number);
    formData.append('Account_Bank', dataInput.account_Bank);
    formData.append('Description', dataInput.description);
    formData.append('photo', photo);
    // console.log("dataInput",dataInput);
    console.log('formData', formData);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:5065/api/About', formData)
            .then((result) => {
                console.log(result);
                closeModal();
            })
            .catch((error) => console.log(error));
    };

    console.log(dataInput.account_Name);

    return (
        <Modal isOpen={showModal} onRequestClose={closeModal} contentLabel="Create about" style={customStyles}>
            <div class="container">
                <h1>Add a new about</h1>
                <form id="aboutForm" onSubmit={handleSubmit} encType="multipart/form-data">
                    <div>
                        <label htmlFor="name">Project Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="project name"
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="cardHolderName">Account name:</label>
                        <input
                            type="text"
                            id="accountName"
                            name="Account_Name"
                            placeholder="account name"
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="accountNumber">Account number:</label>
                        <input
                            type="text"
                            id="accountNumber"
                            name="Account_Number"
                            placeholder="account number"
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="accountBank">Account bank name:</label>
                        <input
                            type="text"
                            id="accountBank"
                            name="Account_Bank"
                            placeholder="account bank name"
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="description">Description:</label>
                        <textarea
                            id="description"
                            name="description"
                            placeholder="describe about project"
                            onChange={handleInputChange}
                            required
                        ></textarea>
                    </div>

                    <div>
                        <label htmlFor="photo">Image:</label>
                        <div className="input-file-container">
                            <input
                                type="file"
                                id="photo"
                                name="photo"
                                className="input-file"
                                onChange={handleFileChange}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="files">Other images:</label>
                        <div className="input-file-container">
                            <input
                                type="file"
                                id="files"
                                name="files"
                                className="input-file"
                                onChange={handleFileChange}
                                multiple
                            />
                        </div>
                    </div>
                    <div class="form-submit">
                        <button type="submit" onClick={handleSubmit}>
                            Thêm
                        </button>
                    </div>
                </form>
            </div>

            {/* <div className="card text-center" style={{ minWidth: 500 }}>
                <div className="card-body">
                    <div className="admin__modal_style_icon" onClick={closeModal}>
                        <i className="fa-solid fa-circle-xmark"></i>
                    </div>
                    <div className="form-validation">
                        <form className="form-valide" action="#" method="post">
                            <div className="mb-3">
                                <h3>Create new about</h3>
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
            </div> */}
        </Modal>
    );
}

export default CreateAboutAdmin;
