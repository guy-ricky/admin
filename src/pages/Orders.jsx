import React, { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../features/auth/authSlice';

const Orders = () => {
  const columns = [
    { field: 'id', headerName: 'Order-Id', width: 90 },
    { field: 'date', headerName: 'Order_Date', width: 160 },
    { field: 'product', headerName: 'Products', width: 200 },
    { field: 'status', headerName: 'OrderStatus', width: 130 },
    { field: 'orderby', headerName: 'Client', width: 90 },
  ];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  const orderstate = useSelector((state) => state.auth.orders);
  const data1 = orderstate
    ? orderstate.flatMap((order) =>
        order.products.map((product, index) => ({
          id: `${order._id}-${index}`,
          date: new Date(order.createdAt).toLocaleString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour24: true,
          }),
          product: product.product?product.product.title : 'N/A',
          status: order.orderStatus,
          orderby: order.orderby.username,
        }))
      )
    : [];

  return (
    <div style={{ height: 400, width: '100%'}} className='mt-16 md:mt-2'>
      <DataGrid
        rows={data1}
        columns={columns}
        pageSize={5}
        checkboxSelection
      />
    </div>
  );
};

export default Orders;
