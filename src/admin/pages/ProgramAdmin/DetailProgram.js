/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect, useState } from 'react';
import { ModalComponent } from '~/admin/components';
import InputProgram from './InputProgram';

function DetailProgram({ item, listCategory }) {
    const [showModal, setShowModal] = useState(false);
    const [selectedCategoryTitle, setSelectedCategoryTitle] = useState('');

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);
    // const handleDetailProgram = () => {
    // console.log(item);
    // };

    useEffect(() => {
        const selectedCategory = listCategory.find((category) => category.id === item.category_Id);
        if (selectedCategory) {
            setSelectedCategoryTitle(selectedCategory.title);
        } else {
            setSelectedCategoryTitle('');
        }
    }, [item.category_Id]);

    return (
        <Fragment>
            <button
                type="button"
                className="btn mb-1 ml-2 btn-outline-info"
                data-toggle="tooltip"
                data-placement="bottom"
                title="delete account"
                onClick={openModal}
            >
                <i className="fa-solid fa-circle-info"></i>
            </button>

            <ModalComponent showModal={showModal} closeModal={closeModal} contentLabel="Infor Admin">
                {item && (
                    <div className="container rounded bg-white  profile__pages_detail--wrapper">
                        <div className="row">
                            <div className="col-md-3 border-right">
                                <div className="d-flex flex-column align-items-center text-center p-3">
                                    <img
                                        className="rounded-circle mt-5 profile__pages_detail--wrapper-img"
                                        alt=""
                                        src={item.image}
                                    />
                                </div>
                            </div>

                            <div className="col-md-5 border-right">
                                <div>
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <h4 className="text-right">Create Program</h4>
                                    </div>

                                    <InputProgram
                                        labelName="Title"
                                        inputName="title"
                                        defaultValue={item.title}
                                        readOnly
                                    />
                                    <InputProgram
                                        labelName="Budget"
                                        inputName="budget"
                                        inputType="number"
                                        min={0}
                                        defaultValue={item.budget}
                                        readOnly
                                    />

                                    <div className="row mt-2">
                                        <div className="col-md-12 text-left">
                                            <label className="profile__pages_detail--labels mt-2">Category</label>
                                        </div>
                                        <div className="col-md-12">
                                            <input
                                                type="text"
                                                name="category_id"
                                                className="form-control profile__pages_detail--form-control"
                                                defaultValue={selectedCategoryTitle}
                                                readOnly
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 border-right">
                                <div>
                                    <div className="row mt-5">
                                        <div className="col-md-12" style={{ textAlign: 'left' }}>
                                            <label className="profile__pages_detail--labels mt-2">Description:</label>
                                        </div>
                                        <div className="col-md-12">
                                            <textarea
                                                type="text"
                                                rows="8"
                                                name="description"
                                                placeholder="Enter description"
                                                className="form-control profile__pages_detail--form-control"
                                                defaultValue={item.description ? item.description : ''}
                                                readOnly
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-5 text-center">
                            <button className="btn profile__pages_detail--profile-button" type="submit">
                                Saved Profile
                            </button>
                        </div>
                    </div>
                )}
            </ModalComponent>
        </Fragment>
    );
}

export default DetailProgram;
