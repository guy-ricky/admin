import React, { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import {getCategories} from '../features/category/categorySlice'
import {Link} from  'react-router-dom'
const Categories = () => {
  const columns = [
    { field: 'id', headerName: 'Cat-Id', width: 90 },
    { field: 'title', headerName: 'Title', width: 130 },
    { field: 'createdAt', headerName: 'Date of creation', width: 200 },
  ];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const categorystate = useSelector((state) => state.category.categories);
  const data1 = categorystate && categorystate.length
  ? categorystate.map((category) => ({
      id: category._id,
      title: category.title,
      createdAt: new Date(category.createdAt).toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour24: true,
      }),
    }))
  : [];

  return (
    <div className='mt-16 md:mt-2 w-full h-screen'>
      <div className='pl-2'>   
        <Link className='bg-blue-600 p-2 rounded-lg w-40 text-white hover:bg-[#febd69] hover:text-[#232f3e] shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 mt-4' to="/category">Add Category</Link>
  </div>
    <DataGrid
      rows={data1}
      columns={columns}
      pageSize={5}
      checkboxSelection
      className='mt-4'
    />
  </div>    
  );
};

export default Categories;
