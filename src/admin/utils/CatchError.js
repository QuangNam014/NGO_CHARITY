import { useNavigate } from 'react-router-dom';

import { PathAdmin } from '~/routers/PathAdmin';
import { ToastError } from './ToastMessage';

export const CatchError = (error, status) => {
    const navigate = useNavigate();

    if (error.message === 'Network Error') {
        navigate(PathAdmin.adminNotFound);
    } else {
        if (error.response.status === 400) {
            let errorValid = error.response.data; // {status, message}
            if (errorValid.status === status) {
                ToastError(errorValid.message);
            }
        }
    }
};
