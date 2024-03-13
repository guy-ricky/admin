import React, { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../features/customers/CustomerSlice';

const Customers = () => {
  const columns = [
    { field: 'id', headerName: 'User-Id', width: 90 },
    { field: 'username', headerName: 'Username', width: 130 },
    { field: 'email', headerName: 'Email', width: 130 },
    { field: 'role', headerName: 'Role', width: 90 },
  ];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const customerstate = useSelector((state) => state.customer.customers);
  const data1 = customerstate.map((customer) => ({
      id: customer._id,
      username: customer.username,
      email: customer.email,
      role: customer.role,
    }));

  return (
    <div className='mt-16 md:mt-2 w-full h-screen'>
      <DataGrid
        rows={data1}
        columns={columns}
        pageSize={5}
        checkboxSelection
      />
    </div>
  );
};

export default Customers;
