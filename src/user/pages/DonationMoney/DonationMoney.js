/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { SliderImage } from '~/user/components';

import { PathUser } from '~/routers/PathUser';
import { useDataStoreUser } from '~/user/stores';
import TotalInforDonate from './TotalInforDonate';
import TotalDonate from './TotalDonate';
import AuthenticateAdmin from '~/admin/utils/AuthenticateAdmin';
import './DonationMoney.css';

function DonationMoney(props) {
    const { inforUser } = AuthenticateAdmin;
    const { getInfoUser } = useDataStoreUser();
    const [programId, setprogramId] = useState();

    const [showErrorAmount, setShowErrorAmount] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const initUpdate = {
        money: '',
        user_id: '',
        program_id: '',
    };

    const [formData, setFormData] = useState(initUpdate);

    const handleChangeInput = (e) => {
        const { name, value } = e.target;

        setShowErrorAmount(false);
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleBlurInput = (e) => {
        const value = e.target.value;
        if (!value) {
            setShowErrorAmount(true);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (showErrorAmount || formData.money === '') {
            return null;
        }

        const dataValue = {
            ...formData,
            user_id: inforUser.id,
            program_id: programId.category_Id,
        };
        console.log(dataValue);
    };

    useEffect(() => {
        if (location.state) {
            const program = location.state.program_id;
            setprogramId(program);
        }
        if (!inforUser && location.pathname === '/donation-money') {
            navigate(`../${PathUser.user}`);
        }
    }, [!inforUser, location.pathname, programId]);

    return (
        <Fragment>
            <SliderImage />
            <div className="about-us container-fluid">
                <div className="container">
                    <div className="row natur-row no-margin w-100">
                        <div className="text-part col-md-6">
                            <h2>We are here to help everyone in need</h2>
                            <p>
                                NGOs and charities create various avenues for people to donate, making it convenient for
                                individuals to contribute according to their capacity and preferences. They often have
                                online platforms where donors can make monetary contributions securely and easily. These
                                platforms provide transparency, allowing donors to track how their donations are being
                                utilized and the impact they are making.
                            </p>

                            <p>
                                In addition to monetary donations, NGOs and charities also welcome in-kind donations
                                such as clothes, food, and essential supplies. These items are distributed to vulnerable
                                communities, helping to improve their quality of life and meet their basic needs.
                            </p>
                            <p>
                                Donating to NGOs and charities not only benefits the recipients but also offers personal
                                satisfaction to the donors. It gives individuals a sense of fulfillment, knowing that
                                they have made a difference in someone's life. Moreover, charitable donations often come
                                with tax benefits in many countries, providing an additional incentive for individuals
                                and corporations to contribute.
                            </p>

                            <div className="row my-md-5">
                                <TotalInforDonate
                                    icon="fa-solid fa-people-group"
                                    title="Volunteers"
                                    targetNumber={100}
                                />

                                <TotalInforDonate
                                    icon="fa-solid fa-piggy-bank"
                                    title="Trusted Funds"
                                    targetNumber={50000}
                                    separator=","
                                />
                            </div>
                        </div>

                        <div className="image-part col-md-6">
                            <div className="user__pages__donation-wrap">
                                <TotalDonate targetNumber={1000000} />

                                <form onSubmit={handleSubmit} action="#" className="user__pages__donation--appointment">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="name">Full Name</label>
                                                <div className="input-wrap">
                                                    <div className="icon">
                                                        <span className="fa fa-user"></span>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        defaultValue={getInfoUser.name}
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="name">Email Address</label>
                                                <div className="input-wrap">
                                                    <div className="icon">
                                                        <span className="fa fa-paper-plane"></span>
                                                    </div>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        defaultValue={getInfoUser.email}
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {programId && programId.category_Id !== 0 && (
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label htmlFor="name">Program Name</label>
                                                    <div className="input-wrap">
                                                        <div className="icon">
                                                            <span className="fa fa-paper-plane"></span>
                                                        </div>
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            defaultValue={programId.title}
                                                            readOnly
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {/* <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="name">Select Causes</label>
                                                <div className="form-field">
                                                    <div className="select-wrap">
                                                        <div className="icon">
                                                            <span className="fa fa-chevron-down"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="name">Amount</label>
                                                <div className="input-wrap">
                                                    <div className="icon">
                                                        <span className="fa fa-money"></span>
                                                    </div>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        placeholder="$5"
                                                        value={formData.money}
                                                        onChange={handleChangeInput}
                                                        onBlur={handleBlurInput}
                                                        name="money"
                                                        min={0}
                                                    />
                                                    {showErrorAmount && (
                                                        <span style={{ color: '#ffdc00', fontSize: 20 }}>
                                                            Amount is not empty
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="name">Payment Method</label>
                                                <div className="d-lg-flex">
                                                    <div className="form-radio mr-3">
                                                        <div className="radio">
                                                            <label>
                                                                <input type="radio" name="radio-input" defaultChecked />
                                                                <span className="checkmark"></span>
                                                                <span className="fill-control-description">
                                                                    Credit Card
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="form-radio mr-3">
                                                        <div className="radio">
                                                            <label>
                                                                <input type="radio" name="radio-input" />
                                                                <span className="checkmark"></span>
                                                                <span className="fill-control-description">Paypal</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="form-radio">
                                                        <div className="radio">
                                                            <label>
                                                                <input type="radio" name="radio-input" />
                                                                <span className="checkmark"></span>
                                                                <span className="fill-control-description">
                                                                    Payoneer
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input
                                                    type="submit"
                                                    value="Donate Now"
                                                    className="btn btn-danger py-3 px-4"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default DonationMoney;
