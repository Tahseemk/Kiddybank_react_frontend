import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import IsLoadingHOC from '../../components/LoaderHOC';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { withoutAuthAxios } from './../../services/api';
import { setAccessToken, setUser } from '../../redux/reducers/authSlice';
import { useFormik } from 'formik';
import { phoneRegExp } from '../../utils/constants';

function Login(props) {
  const { setLoading } = props
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      mobile: '',
      password: '',
    },
    validationSchema: Yup.object({

      mobile: Yup.string()
        .matches(phoneRegExp, 'Phone number is not valid')
        .required("This field is required"),

      password: Yup.string()
        .required("This field is required")
        .min(5, 'Password must be at least 5 characters'),

    }),
    onSubmit: async values => {
      try {
        const payload = values
        setLoading(true)
        const response = await withoutAuthAxios().post("/mobile/login", payload)
        const resData = response.data
        setLoading(false)
        if (resData.status === "true") {
          dispatch(setUser(resData.data));
          dispatch(setAccessToken(resData.data.jwtToken));
          toast.success('Logged in successfully');
          formik.resetForm();
          navigate('/');
        } else {
          toast.error(resData.message || 'An error occurred.');
        }
      } catch (error) {
        console.log("error.response", error.response)
        setLoading(false)
        toast.error(error.response.data.message);
      }
    },
  });
  return (
    <>
      <main>
        <div className="container">
          <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="pt-4 pb-2">
                        <h5 className="card-title text-center pb-0 text-gradient">Invest in technology to duble your assets</h5>
                      </div>
                      <form onSubmit={formik.handleSubmit} className="row g-3 needs-validation" noValidate>
                        <div className="col-12">
                          <label htmlFor="yourUsername" className="form-label">Phone</label>
                          <div className="input-group has-validation">
                            <span className="input-group-text" id="inputGroupPrepend"><i className="bi bi-phone"></i></span>
                            <input
                              required
                              name="mobile"
                              onChange={formik.handleChange}
                              value={formik.values.mobile}
                              onBlur={formik.handleBlur}
                              type="text" className="form-control" placeholder="Enter Email" />                                                        <div className="invalid-feedback">Please enter your username.</div>
                          </div>
                          {formik.touched.mobile && formik.errors.mobile ? (<span className="text-danger">{formik.errors.mobile}</span>) : null}
                        </div>
                        <div className="col-12">
                          <label htmlFor="yourUsername" className="form-label">Password</label>
                          <div className="input-group has-validation">
                            <span className="input-group-text" id="inputGroupPrepend"><i className="bi bi-person-fill-lock"></i></span>
                            <input
                              required
                              name="password"
                              onChange={formik.handleChange}
                              value={formik.values.password}
                              onBlur={formik.handleBlur}
                              type="password" className="form-control" placeholder="Enter Password" />
                          </div>
                          {formik.touched.password && formik.errors.password ? (<span className="text-danger">{formik.errors.password}</span>) : null}
                        </div>
                        <div className="col-12">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe" />
                            <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <button className="btn btn-primary w-100 input-group-text border-0" type="submit">Login</button>
                        </div>
                        <div className="col-12">
                          <p className="small mb-0">Don't have account? <Link to="/signup" href="pages-register.html">Create an account</Link></p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default IsLoadingHOC(Login)
