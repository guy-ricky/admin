import React, {useEffect} from 'react' 
import {
  Container,
  CssBaseline,
  Box,
  Avatar,  
  TextField,
  Card
} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {Link, useNavigate} from 'react-router-dom'
import {useFormik} from 'formik'
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { login } from '../features/auth/authSlice';

const Login = () => {

  let schema = Yup.object().shape({
    email: Yup
      .string()
      .email("Email should be valid")
      .required("Email is Required"),
      password: Yup.string().required("Password is Required"),
  });
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: schema,
    onSubmit: values => {
      dispatch(login(values));
    },
  });

  const authState = useSelector((state) => state);

  const { user, isError, isSuccess, isLoading, message } = authState.auth;

  useEffect(() => {
    if (isSuccess) {
      navigate("/dashboard");
    } else {
      navigate("");
    }
  }, [user, isError, isSuccess, isLoading, navigate]);

  return (
    <Container sx={{ marginTop:8, display: 'flex', flexDirection: 'column', alignItems: 'center'}} onSubmit={formik.handleSubmit}>
         <div className="error text-center">
          {message.message === "Rejected" ? "You are not an Admin" : ""}
        </div>
    <Card className='border-solid border-2 border-blue-600 w-72 rounded-xl'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          className="border-[#232f3e]"
        >
           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <h1>Sign In</h1>
          <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1,   display: 'flex',
            flexDirection: 'column',
            alignItems: 'center' }}>
            <TextField
              size="small"
              margin="normal"
              required
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={formik.handleChange("email")}
              value={formik.values.email}
              autoFocus
            />
            <div className='text-xs text-red-500'>    
              {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
              ) : null}
            </div>
            <TextField
              size='small'
              margin="normal"
              required
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={formik.handleChange("password")}
              value={formik.values.password}
              autoComplete="current-password"
            />
          <div className='text-xs text-red-500'>    
              {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
              ) : null}
            </div>
            <button className="bg-blue-600 p-2 rounded-lg w-64 text-white hover:bg-[#febd69] hover:text-[#232f3e] shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 mt-4" type='submit'>
              Sign In
            </button>
            <div className='p-2 flex'>
              <Link className='text-sm'>Forgot Password?</Link>
              
            </div>
          </Box>
        </Box>
      </Card>
      </Container>
  )
}

export default Login