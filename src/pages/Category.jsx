import React, {useEffect}   from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import { createCategory,getAProductCategory,resetState,updateAProductCategory } from '../features/category/categorySlice';
import {Paper, Container,CssBaseline} from '@mui/material'
import 'react-toastify/dist/ReactToastify.css';

const Category = () => {

    let schema = yup.object().shape({
        title: yup.string().required("Category Name is Required"),
      });

    const dispatch = useDispatch();
    const location = useLocation();
    const getCatId = location.pathname.split("/")[3];
    const navigate = useNavigate();
    const newCategory = useSelector((state) => state.category);

    const {
        isSuccess,
        isError,
        isLoading,
        createdCategory,
        categoryName,
        updatedCategory,
      } = newCategory;

      useEffect(() => {
        if (getCatId !== undefined) {
          dispatch(getAProductCategory(getCatId));
        } else {
          dispatch(resetState());
        }
      }, [getCatId, dispatch]);

      useEffect(() => {
        if (isSuccess && createdCategory) {
          toast.success("Category Added Successfullly!");
        }
        if (isSuccess && updatedCategory) {
          toast.success("Category Updated Successfullly!");
          navigate("/admin/list-category");
        }
        if (isError) {
          toast.error("Something Went Wrong!");
        }
      }, [isSuccess, isError, isLoading, createdCategory, updatedCategory, navigate]);

      const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
          title: categoryName || "",
        },

        validationSchema: schema,
    onSubmit: (values) => {
      if (getCatId !== undefined) {
        const data = { id: getCatId, CatData: values };
        dispatch(updateAProductCategory(data));
        dispatch(resetState());
      } else {
        dispatch(createCategory(values));
        formik.resetForm();
        setTimeout(() => {
          dispatch(resetState());
        }, 300);
      }
    },
  });
  return (
    <Container className='mt-20 md:mt-1 flex items-center'>
        
         <form action="" onSubmit={formik.handleSubmit}>
         <Paper elevation={24} className='w-72 mx-auto my-8'>
            <CssBaseline/>
            <h1 className='text-center py-2 text-blue-600 font-medium'>  {getCatId !== undefined ? "Edit" : "Add"} Category</h1>
            <div className='p-2 flex flex-col gap-3 items-center text-sm'>
            <input type="text" placeholder='Category-Name' required onChange={formik.handleChange("title")} value={formik.values.title} className='block w-64 border-solid border-2 border-gray-400 p-1 rounded-lg'/>  
            <div className="bg-red text-md">
            {formik.touched.title && formik.errors.title}
          </div>          
            <button className="bg-blue-600 p-2 mb-2 rounded-lg w-64 text-white hover:bg-[#febd69] hover:text-[#232f3e] shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 mt-4" type='submit'>
            {getCatId !== undefined ? "Edit" : "Add"} Category
            </button>
            <ToastContainer />
            </div>           
        </Paper>
         </form>
        </Container>
  )
}

export default Category