import { Fragment, useEffect, useState } from 'react';

import { ModalComponent } from '~/admin/components';
import InputToolTip from '~/admin/components/TippyTooltip/InputToolTip';
import { ToastSuccess, updateUser } from '~/admin/utils';
import getAvatar from '~/admin/utils/GetAvatar';

function ProfileBtnEdit({ getInfoUser, fetchApiGetUser }) {
    const initUpdate = {
        name: '',
        address: '',
        phone: '',
        region: '',
    };
    const [showModal, setShowModal] = useState(false);
    const [avatar, setAvatar] = useState();
    const [formData, setFormData] = useState(initUpdate);
    const [showErrorName, setShowErrorName] = useState(false);
    const [showErrorFile, setShowErrorFile] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    useEffect(() => {
        setFormData(getInfoUser);

        return () => {
            avatar && URL.revokeObjectURL(avatar.pre);
        };
    }, [avatar, getInfoUser]);

    const handleAvatar = (e) => {
        const file = e.target.files[0];

        const allowedFormats = ['image/jpeg', 'image/png', 'image/gif'];
        const fileExtension = file.type;

        if (allowedFormats.includes(fileExtension)) {
            setShowErrorFile(false);
        } else {
            setShowErrorFile(true);
        }

        file.pre = URL.createObjectURL(file);
        setAvatar(file);
        e.target.value = null;
    };

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setShowErrorName(false);
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.name === '') {
            setShowErrorName(true);
        }
        if (showErrorFile || showErrorName) {
            return;
        }

        const formDataValid = new FormData();
        formDataValid.append('Id', getInfoUser.id);
        formDataValid.append('Email', getInfoUser.email);
        formDataValid.append('Name', formData.name);
        formDataValid.append('Address', formData.address);
        formDataValid.append('Phone', formData.phone);
        formDataValid.append('Region', formData.region);
        formDataValid.append('photo', avatar);

        try {
            updateUser(getInfoUser.email, formDataValid)
                .then((result) => {
                    if (result.status === '200') {
                        fetchApiGetUser();
                        closeModal();
                        window.location.reload();
                        ToastSuccess(result.message);
                    }
                })
                .catch((error) => console.log(error));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Fragment>
            <InputToolTip
                content="Edit"
                placement="bottom"
                classBtn="btn-warning"
                icon="fa-solid fa-pen-to-square"
                openModal={openModal}
            />
            <ModalComponent showModal={showModal} closeModal={closeModal} contentLabel="Infor Admin">
                <form onSubmit={handleSubmit} method="post">
                    <div className="container rounded bg-white  profile__pages_detail--wrapper">
                        <div className="row">
                            <div className="col-md-4 border-right">
                                <div className="d-flex flex-column align-items-center text-center p-3">
                                    <img
                                        className="rounded-circle mt-5 profile__pages_detail--wrapper-img"
                                        alt=""
                                        src={getAvatar(getInfoUser.image)}
                                    />
                                    <input className="mt-2 mb-2" type="file" name="photo" onChange={handleAvatar} />
                                    {avatar && !showErrorFile && <img width={100} src={avatar.pre} alt="avatar" />}
                                    {showErrorFile && <div className="text-danger">Allow file jpeg, png, gif</div>}
                                </div>
                            </div>

                            <div className="col-md-8 border-right">
                                <div>
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <h4 className="text-right">Update Profile</h4>
                                    </div>

                                    <div className="row mt-2">
                                        <div className="col-md-4">
                                            <label className="profile__pages_detail--labels mt-2">FullName:</label>
                                        </div>
                                        <div className="col-md-8">
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Enter fullName"
                                                className="form-control profile__pages_detail--form-control"
                                                onChange={handleChangeInput}
                                                value={formData.name}
                                            />
                                            {showErrorName && (
                                                <p style={{ marginTop: '-20px', textAlign: 'left', color: 'red' }}>
                                                    Name is not required
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="row mt-2">
                                        <div className="col-md-4">
                                            <label className="profile__pages_detail--labels mt-2">Address:</label>
                                        </div>
                                        <div className="col-md-8">
                                            <input
                                                type="text"
                                                name="address"
                                                placeholder="Enter Address"
                                                className="form-control profile__pages_detail--form-control"
                                                onChange={handleChangeInput}
                                                value={formData.address || ''}
                                            />
                                        </div>
                                    </div>

                                    <div className="row mt-2">
                                        <div className="col-md-4">
                                            <label className="profile__pages_detail--labels mt-2">Phone:</label>
                                        </div>
                                        <div className="col-md-8">
                                            <input
                                                type="text"
                                                name="phone"
                                                placeholder="Enter Phone"
                                                className="form-control profile__pages_detail--form-control"
                                                onChange={handleChangeInput}
                                                value={formData.phone || ''}
                                            />
                                        </div>
                                    </div>

                                    <div className="row mt-2">
                                        <div className="col-md-4">
                                            <label className="profile__pages_detail--labels mt-2">Region:</label>
                                        </div>
                                        <div className="col-md-8">
                                            <input
                                                type="text"
                                                name="region"
                                                placeholder="Enter Region"
                                                className="form-control profile__pages_detail--form-control"
                                                onChange={handleChangeInput}
                                                value={formData.region || ''}
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-5 text-center">
                                        <button
                                            // onClick={closeModal}
                                            className="btn profile__pages_detail--profile-button"
                                            type="submit"
                                        >
                                            Saved Profile
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </ModalComponent>
        </Fragment>
    );
}

export default ProfileBtnEdit;
