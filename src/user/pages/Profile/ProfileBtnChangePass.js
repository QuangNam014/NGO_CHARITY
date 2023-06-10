import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import InputChangePass from './InputChangePass';
import { ToastSuccess, changePassword } from '~/admin/utils';
import { PathUser } from '~/routers/PathUser';

function ProfileBtnChangePass({ getInfoUser }) {
    const [showOldPassError, setShowOldPassError] = useState(false);
    const navigate = useNavigate();

    const initDataFomik = {
        oldPassword: '',
        newpassword: '',
        confirmpassword: '',
    };

    const onSubmit = async (data) => {
        const validData = await validateData(data);
        // cho them email vao validDta

        const resquestData = {
            ...validData,
            email: getInfoUser.email,
        };

        try {
            changePassword(getInfoUser.email, resquestData)
                .then((result) => {
                    if (result.status === 200) {
                        fomik.resetForm();
                        ToastSuccess(result.message);
                    }
                })
                .catch((error) => {
                    if (error.message === 'Network Error') {
                        navigate(`../${PathUser.userNotFound}`);
                    } else {
                        const errorValid = error.response.data;
                        if (errorValid.status === 400) {
                            setShowOldPassError(true);
                        }
                    }
                });
        } catch (error) {
            console.log(error);
        }
    };

    const validationSchema = Yup.object().shape({
        oldPassword: Yup.string().required('Password is required'),
        newpassword: Yup.string().required('New password is required'),
        confirmpassword: Yup.string()
            .required('Confirm password is required')
            .oneOf([Yup.ref('newpassword')], 'Your confirm passwords do not match with new password.'),
    });

    const validateData = async (data) => {
        try {
            // Loại bỏ khoảng trắng đầu và cuối của input name trước khi xác nhận
            const cleanedData = {
                ...data,
                newpassword: data.newpassword.trim(),
                oldPassword: data.oldPassword.trim(),
                confirmpassword: data.confirmpassword.trim(),
            };

            // Xác nhận dữ liệu với schema
            await validationSchema.validate(cleanedData, { abortEarly: false });
            return cleanedData;
        } catch (errors) {
            console.log('Validation failed', errors);
        }
    };

    const fomik = useFormik({
        initialValues: initDataFomik,
        onSubmit,
        validationSchema,
    });

    useEffect(() => {
        setShowOldPassError(false);
    }, [fomik.values]);

    return (
        <form onSubmit={fomik.handleSubmit} method="post">
            <div className="container rounded bg-white">
                <div className="row">
                    <div className="col-md-12 border-right">
                        <div>
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right">Change Password</h4>
                            </div>

                            <InputChangePass
                                showOldPassError={showOldPassError}
                                requiredLabel={true}
                                labelName="Password Old"
                                inputName="password"
                                placeholder="Enter Password"
                                onChange={fomik.handleChange}
                                value={fomik.values.oldPassword}
                                touched={fomik.touched.oldPassword}
                                error={fomik.errors.oldPassword}
                                {...fomik.getFieldProps('oldPassword')}
                            />

                            <InputChangePass
                                requiredLabel={true}
                                labelName="New Password"
                                inputName="password"
                                placeholder="Enter New Password"
                                onChange={fomik.handleChange}
                                value={fomik.values.newpassword}
                                touched={fomik.touched.newpassword}
                                error={fomik.errors.newpassword}
                                {...fomik.getFieldProps('newpassword')}
                            />

                            <InputChangePass
                                requiredLabel={true}
                                labelName="Confirm Password"
                                inputName="password"
                                placeholder="Enter Password"
                                onChange={fomik.handleChange}
                                value={fomik.values.confirmpassword}
                                touched={fomik.touched.confirmpassword}
                                error={fomik.errors.confirmpassword}
                                {...fomik.getFieldProps('confirmpassword')}
                            />

                            <div className="mt-5 text-center">
                                <button className="btn profile__pages_detail--profile-button" type="submit">
                                    Saved Profile
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default ProfileBtnChangePass;
