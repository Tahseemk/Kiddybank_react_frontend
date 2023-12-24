import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/reducers/authSlice';

const Sidebar = () => {
    const dispatch = useDispatch();
    return (
        <>
            <aside id="sidebar" className="sidebar">
                <ul className="sidebar-nav" id="sidebar-nav">
                    <li className="nav-item">
                        <a className="nav-link " href="index.html">
                            <i className="bi bi-grid"></i>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="#">
                            <i className="bi bi-person"></i>
                            <span>Password</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="#">
                            <i className="bi bi-question-circle"></i>
                            <span>Account</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="#">
                            <i className="bi bi-envelope"></i>
                            <span>Bills</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="#">
                            <i className="bi bi-card-list"></i>
                            <span>Service</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="#">
                            <i className="bi bi-box-arrow-in-right"></i>
                            <span>About Us</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a onClick={() => dispatch(logout())} className="nav-link collapsed" href="#">
                            <i className="bi bi-dash-circle"></i>
                            <span>Log Out</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="#">
                            <i className="bi bi-file-earmark"></i>
                            <span>Download</span>
                        </a>
                    </li>
                </ul>
            </aside>
        </>
    )
}

export default Sidebar
