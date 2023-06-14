import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

import { ToastError, ToastSuccess, deleteProgram } from '~/admin/utils';
import { PathAdmin } from '~/routers/PathAdmin';
import UpdateProgram from './UpdateProgram';
import DetailProgram from './DetailProgram';

function ListProgram({ listCategory, listProgram, setListProgram, fetchApiProgram }) {
    const navigate = useNavigate();

    const handleDeleteProgram = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                try {
                    deleteProgram(id)
                        .then((result) => {
                            if (result.status === '200') {
                                Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
                                setListProgram(listProgram.filter((program) => program.id !== id));
                                ToastSuccess(result.message);
                            }
                            // loi khi api tra responese string chờ sua
                            // if (result.status === 200) {
                            //     Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
                            //     setListProgram(listProgram.filter((program) => program.id !== id));
                            //     ToastSuccess(result.message);
                            // }
                        })
                        .catch((error) => {
                            if (error.message === 'Network Error') {
                                navigate(`../${PathAdmin.adminNotFound}`);
                            } else {
                                const errorValid = error.response.data;
                                if (errorValid.status === 400) {
                                    ToastError(errorValid.message);
                                }
                            }
                        });
                } catch (error) {
                    console.log(error);
                }
            }
        });
    };

    return (
        <Fragment>
            {listProgram.length > 0 ? (
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Budget</th>
                                <th>Image</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listProgram.map((item, index) => (
                                <tr key={index}>
                                    <th>{item.id}</th>
                                    <td>{item.title}</td>
                                    <td>{item.budget}</td>
                                    <td>
                                        <img src={item.image} alt="" width={100} />
                                    </td>
                                    <td>
                                        <DetailProgram item={item} listCategory={listCategory} />

                                        <UpdateProgram
                                            item={item}
                                            listCategory={listCategory}
                                            fetchApiProgram={fetchApiProgram}
                                        />

                                        <button
                                            type="button"
                                            className="btn mb-1 ml-2 btn-outline-danger"
                                            data-toggle="tooltip"
                                            data-placement="bottom"
                                            title="delete account"
                                            onClick={() => handleDeleteProgram(item.id)}
                                        >
                                            <i className="fa-solid fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div>Hiện tại chưa có admin nào</div>
            )}
        </Fragment>
    );
}

export default ListProgram;
