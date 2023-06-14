import React from 'react';

import DetailDonate from './DetailDonate';

function UserDonate({ listReceiptData, listProgram, listUserReceipt }) {
    return (
        <div className="col-md-6 border-right">
            <div className="table-responsive">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="text-right">Donate</h5>
                </div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>User_Id</th>
                            <th>Program_Id</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listReceiptData &&
                            listReceiptData.map((receipt, index) => {
                                const userName = listUserReceipt.find((user) => user.id === receipt.User_Id)?.name;
                                const programTitle = listProgram.find((program) => program.id === receipt.Program_Id)?.title;
                                return (
                                    <tr key={index}>
                                        <th>{receipt.id}</th>
                                        <td>{userName}</td>
                                        <td>{programTitle}</td>
                                        <td>
                                            <DetailDonate receipt={receipt} userName={userName} programTitle={programTitle} />
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UserDonate;
