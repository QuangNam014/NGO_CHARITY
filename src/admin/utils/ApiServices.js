import axios from 'axios';
// import { getToken } from '../configs/axiosToken';

// Authenication
export const RegisterModel = async (value) => {
    const data = await axios.post('http://localhost:5065/api/Authenication/Register', value);
    return data.data;
};

export const LoginModel = async (value) => {
    const data = await axios.post('http://localhost:5065/api/Authenication/Login', value);
    return data.data;
};

export const getListAdmin = async () => {
    const data = await axios.get('http://localhost:5065/api/Authenication/ListAdmin');
    return data.data;
};

export const SendEmail = async (value) => {
    const data = await axios.post('http://localhost:5065/api/Authenication/SendEmail', value, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return data.data;
};

export const changePassword = async (email, value) => {
    const data = await axios.put(`http://localhost:5065/api/Authenication/ChangePassword/${email}`, value);
    return data.data;
};

// User
export const getUser = async (value) => {
    const data = await axios.get(`http://localhost:5065/api/User/GetUser/${value}`);
    return data.data;
};

export const updateUser = async (email, formData) => {
    const data = await axios.put(`http://localhost:5065/api/User/UpdateUser/${email}`, formData);
    return data.data;
};
