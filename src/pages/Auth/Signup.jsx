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

function Signup(props) {
    const { setLoading } = props
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            mobile: '',
            password: '',
            confirm_password: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required("This fiels is required")
                .min(3, 'This field must be at least 3 characters'),

            email: Yup.string()
                .required("This field is required"),

            mobile: Yup.string()
                .matches(phoneRegExp, 'Phone number is not valid')
                .required("This field is required"),

            password: Yup.string()
                .required("This field is required")
                .min(5, 'Password must be at least 5 characters'),

            confirm_password: Yup.string()
                .required("This field is required")
                .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
        }),
        onSubmit: async values => {
            try {
                const payload = values
                setLoading(true)
                const response = await withoutAuthAxios().post("/mobile/signup", payload)
                const resData = response.data
                console.log("response", resData)
                setLoading(false)
                if (resData.status === "true") {
                    toast.success(resData.message);
                    formik.resetForm();
                    navigate('/login');
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
                                    <div className="d-flex justify-content-center pb-2">
                                        <div className="pagetitle">
                                            <h5 className="card-title text-center pb-0 text-gradient mb-2">Invest in technology to duble your assets</h5>
                                        </div>
                                    </div>
                                    <div className="card mb-3">
                                        <div className="card-body">
                                            <div className="pt-2 pb-2">
                                                <h5 className="card-title text-center pb-0 fs-4">Create an Account</h5>
                                                <p className="text-center small">Enter your personal details to create account</p>
                                            </div>
                                            <form onSubmit={formik.handleSubmit} className="row g-3 needs-validation" noValidate>
                                                <div className="col-12">
                                                    <label htmlFor="yourName" className="form-label">Your Name</label>
                                                    <div className="input-group has-validation">
                                                        <span className="input-group-text" id="inputGroupPrepend"><i className="bi bi-people"></i></span>
                                                        <input
                                                            required
                                                            name="name"
                                                            onChange={formik.handleChange}
                                                            value={formik.values.name}
                                                            onBlur={formik.handleBlur}
                                                            type="text" className="form-control" placeholder="Enter Name" />
                                                    </div>
                                                    {formik.touched.name && formik.errors.name ? (<span className="text-danger">{formik.errors.name}</span>) : null}
                                                </div>
                                                <div className="col-12">
                                                    <label htmlFor="yourUsername" className="form-label">Email</label>
                                                    <div className="input-group has-validation">
                                                        <span className="input-group-text" id="inputGroupPrepend"><i className="bi bi-people"></i></span>
                                                        <input
                                                            required
                                                            name="email"
                                                            onChange={formik.handleChange}
                                                            value={formik.values.email}
                                                            onBlur={formik.handleBlur}
                                                            type="email" className="form-control" placeholder="Enter Email" />                                                        <div className="invalid-feedback">Please enter your username.</div>
                                                    </div>
                                                    {formik.touched.email && formik.errors.email ? (<span className="text-danger">{formik.errors.email}</span>) : null}
                                                </div>
                                                <div className="col-12">
                                                    <label htmlFor="yourName" className="form-label">Phone</label>
                                                    <div className="input-group has-validation">
                                                        <span className="input-group-text" id="inputGroupPrepend"><i className="bi bi-phone"></i></span>
                                                        <input
                                                            required
                                                            name="mobile"
                                                            onChange={formik.handleChange}
                                                            value={formik.values.mobile}
                                                            onBlur={formik.handleBlur}
                                                            type="text" className="form-control" placeholder="Enter Phone" />
                                                    </div>
                                                    {formik.touched.mobile && formik.errors.mobile ? (<span className="text-danger">{formik.errors.mobile}</span>) : null}
                                                </div>
                                                {/* <div className="col-12">
                                                    <label htmlFor="yourUsername" className="form-label">Verification code</label>
                                                    <div className="input-group has-validation">
                                                        <span className="input-group-text" id="inputGroupPrepend"><i className="bi bi-card-list"></i></span>
                                                        <input type="text" name="username" className="form-control" placeholder="Enter verification code" id="yourUsername" required="" />
                                                        <div className="invalid-feedback">Please enter your username.</div>
                                                    </div>
                                                </div> */}
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
                                                    <label htmlFor="yourUsername" className="form-label">Confirm Password</label>
                                                    <div className="input-group has-validation">
                                                        <span className="input-group-text" id="inputGroupPrepend"><i className="bi bi-person-fill-lock"></i></span>
                                                        <input
                                                            required
                                                            name="confirm_password"
                                                            onChange={formik.handleChange}
                                                            value={formik.values.confirm_password}
                                                            onBlur={formik.handleBlur}
                                                            type="password" className="form-control" placeholder="Enter confirm Password" />
                                                    </div>
                                                    {formik.touched.confirm_password && formik.errors.confirm_password ? (<span className="text-danger">{formik.errors.confirm_password}</span>) : null}
                                                </div>
                                                {/* <div className="col-12">
                                                    <label htmlFor="yourUsername" className="form-label">Invitation code (Optional)</label>
                                                    <div className="input-group has-validation">
                                                        <span className="input-group-text" id="inputGroupPrepend"><i className="bi bi-person-fill-add"></i></span>
                                                        <input type="text" name="username" placeholder="123456" className="form-control" id="yourUsername" required />
                                                        <div className="invalid-feedback">Please choose a username.</div>
                                                    </div>
                                                </div> */}
                                                <div className="col-12">
                                                    <div className="form-check">
                                                        <input className="form-check-input" name="terms" type="checkbox" value="" id="acceptTerms" required />
                                                        <label className="form-check-label" htmlFor="acceptTerms">I agree and accept the <a href="#">terms and conditions</a></label>
                                                        <div className="invalid-feedback">You must agree before submitting.</div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <button className="btn btn-primary w-100 input-group-text border-0" type="submit">Create Account</button>
                                                </div>
                                                <div className="col-12">
                                                    <p className="small mb-0">Already have an account? <Link to="/login">Log in</Link></p>
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

export default IsLoadingHOC(Signup)