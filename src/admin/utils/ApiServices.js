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

export const resetPassword = async (email) => {
    const data = await axios.put(`http://localhost:5065/api/Authenication/ResetPassword/${email}`, email);
    return data.data;
};

// User
export const getListUser = async () => {
    const data = await axios.get('http://localhost:5065/api/User/ListUser');
    return data.data;
};

export const getUser = async (value) => {
    const data = await axios.get(`http://localhost:5065/api/User/GetUser/${value}`);
    return data.data;
};

export const updateUser = async (email, formData) => {
    const data = await axios.put(`http://localhost:5065/api/User/UpdateUser/${email}`, formData);
    return data.data;
};

export const deleteUser = async (email) => {
    const data = await axios.delete(`http://localhost:5065/api/User/DeleteEmployee/${email}`);
    return data.data;
};

// Program
export const getListProgram = async () => {
    const data = await axios.get('http://localhost:5065/api/Program/GetAll');
    return data.data;
};

export const createProgram = async (value) => {
    const data = await axios.post('http://localhost:5065/api/Program/AddPrograms', value);
    return data.data;
};

export const updateProgram = async (id, formData) => {
    const data = await axios.put(`http://localhost:5065/api/Program/UpdateProgram/${id}`, formData);
    return data.data;
};

export const deleteProgram = async (id) => {
    const data = await axios.delete(`http://localhost:5065/api/Program/DeleteProgram/${id}`);
    return data.data;
};

// Chart
export const getListChartMap = async () => {
    const data = await axios.get('http://localhost:5065/api/Chart/ListRegion');
    return data.data;
};

// Receipt
export const GetListUserReceipt = async () => {
    const data = await axios.get('http://localhost:5065/api/User/GetListUserReceipt');
    return data.data;
};
