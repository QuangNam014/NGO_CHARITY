import React from 'react';

import UserDonate from './UserDonate';
import AdminCashOut from './AdminCashOut';

function ListReceipts({ listProgram, listUserReceipt }) {
    const listReceiptData = [
        {
            id: 1,
            Money: 50000,
            User_Id: 6,
            Program_Id: 5,
            Description: 'Donate cho trẻ em nghèo vùng xâu vùng xa',
        },
        {
            id: 2,
            Money: 12000,
            User_Id: 7,
            Program_Id: 5,
            Description: 'Donate cho trẻ em nghèo vùng xâu vùng xa',
        },
        {
            id: 3,
            Money: 6000,
            User_Id: 10,
            Program_Id: 8,
            Description: 'Donate cho trẻ em nghèo vùng xâu vùng xa',
        },
        {
            id: 4,
            Money: 11000,
            User_Id: 12,
            Program_Id: 9,
            Description: 'Donate cho trẻ em nghèo vùng xâu vùng xa',
        },
        {
            id: 5,
            Money: 3000,
            User_Id: 14,
            Program_Id: 10,
            Description: 'Donate cho trẻ em nghèo vùng xâu vùng xa',
        },
        {
            id: 6,
            Money: 70000,
            User_Id: 18,
            Program_Id: 11,
            Description: 'Donate cho trẻ em nghèo vùng xâu vùng xa',
        },
        {
            id: 7,
            Money: 4300,
            User_Id: 20,
            Program_Id: 11,
            Description: 'Donate cho trẻ em nghèo vùng xâu vùng xa',
        },
        {
            id: 8,
            Money: 8600,
            User_Id: 36,
            Program_Id: 9,
            Description: 'Donate cho trẻ em nghèo vùng xâu vùng xa',
        },
        {
            id: 9,
            Money: 9200,
            User_Id: 42,
            Program_Id: 8,
            Description: 'Donate cho trẻ em nghèo vùng xâu vùng xa',
        },
        {
            id: 10,
            Money: 10000,
            User_Id: 1,
            Program_Id: 8,
            Description: 'Donate cho trẻ em nghèo vùng xâu vùng xa',
        },
        {
            id: 11,
            Money: 30000,
            User_Id: 2,
            Program_Id: 10,
            Description: 'Donate cho trẻ em nghèo vùng xâu vùng xa',
        },
        {
            id: 12,
            Money: 40000,
            User_Id: 1,
            Program_Id: 10,
            Description: 'Donate cho trẻ em nghèo vùng xâu vùng xa',
        },
    ];

    return (
        <div className="row">
            <UserDonate listReceiptData={listReceiptData} listProgram={listProgram} listUserReceipt={listUserReceipt} />
            <AdminCashOut listReceiptData={listReceiptData} listProgram={listProgram} listUserReceipt={listUserReceipt} />
        </div>
    );
}

export default ListReceipts;
