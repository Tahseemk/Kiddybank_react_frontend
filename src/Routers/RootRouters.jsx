import React from 'react';
import Login from '../pages/Auth/Login';
import Signup from '../pages/Auth/Signup';
import ForgotPassword from '../pages/Auth/ForgotPassword';
import ResetPassword from '../pages/Auth/ResetPassword';
import Home from '../pages/Home/Home';
import ChangePassword from '../pages/User/ChangePassword';
import BankDetails from '../pages/User/BankDetails';
import MyBill from '../pages/User/MyBill';
import Checkout from '../pages/Checkout/Checkout';
import PageNotFound from '../components/PageNotFound';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from './PrivateRoute';



function RootRouters() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/signup" element={<Signup />} />
                    <Route exact path="/forgot-password" element={<ForgotPassword />} />
                    <Route exact path="/reset-password" element={<ResetPassword />} />
                    <Route
                        path="/"
                        element={
                            <PrivateRoute >
                                <Home />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/change-password"
                        element={
                            <PrivateRoute>
                                <ChangePassword />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/bank-details"
                        element={
                            <PrivateRoute>
                                <BankDetails />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/my-bill"
                        element={
                            <PrivateRoute>
                                <MyBill />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/checkout"
                        element={
                            <PrivateRoute>
                                <Checkout />
                            </PrivateRoute>
                        }
                    />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </Router>

        </div>
    )
}

export default RootRouters
