import React, { useState, useEffect, useRef } from 'react'
import BIRDS from 'vanta/dist/vanta.birds.min'

function Home() {
    const [vantaEffect, setVantaEffect] = useState(null)
    const myRef = useRef(null)

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(BIRDS({
                el: myRef.current
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])

    return (
        <>
            <main id="main" className="main">
                <section className="section dashboard">
                    <div className="row">
                        <div className="col-lg-12 mb-4">
                            <div id="bird-element" className='vanta' ref={myRef}>
                                Foreground content goes here
                            </div>
                        </div>
                        <div className="col-lg-12 mb-4">
                            <div className="row">
                                <div className="col-xxl-12 col-md-12">
                                    <div className="card card-waves mb-4">

                                        <div className="card-body p-5">
                                            <div className="row align-items-center justify-content-between">
                                                <div className="col">
                                                    <h5 className="card-title text-gradient pb-0">Say Hello To MITRA</h5>
                                                    <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                    <a className="btn btn-primary input-group-text border-0 w-100" href="#!">Join Us
                                                    </a>
                                                </div>
                                                <div className="col d-none d-lg-block mt-xxl-n4 text-center"><img className="img-fluid px-xl-4 mt-xxl-n5" src="assets/img/robote-09-1.png" /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title text-gradient pb-0 pt-0">Balance (₹)</h5>
                                    <h5 className="card-title pt-2">297.40</h5>
                                    <p className="card-text d-flex gap-2"><a href="#" className="btn btn-primary w-50 input-group-text border-0">Recharge <i className="bi bi-cash-stack"></i></a><a href="#" className="btn btn-primary w-50 input-group-text border-0 ">Withdraw <i className="bi bi-cash-stack"></i></a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="card">
                                <div className="card-body" style={{ "background": "url(assets/img/at-work.svg)", backgroundPosition: "right", backgroundRepeat: "no-repeat", margin: "4px" }}>
                                    <div>
                                        <h5 className="card-title pt-2">Invite friends <br />
                                            and earn rewards
                                        </h5>
                                        <p className="card-text d-flex gap-2"><a href="#" className="btn btn-primary w-50 input-group-text border-0">Invite a Friend</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pagetitle">
                            <h1 className="text-white pb-2">Dynamic Information</h1>
                        </div>
                        <div className="col-lg-12">
                            <div className="row">

                                <div className="col-xxl-3 col-md-6">
                                    <div className="card info-card sales-card">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center">
                                                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center input-group-text">
                                                    <i className="bi bi-cash-stack"></i>
                                                </div>
                                                <div className="ps-3">
                                                    <h6 className="text-gradient">Congratulation to 89**16 Withdraw ₹297 success.</h6>
                                                    <span className="small pt-1 fw-bold">2023-08-25 </span> <span className="text-muted small pt-2 ps-1">09:49:44</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-3 col-md-6">
                                    <div className="card info-card sales-card">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center">
                                                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center input-group-text">
                                                    <i className="bi bi-cash-stack"></i>
                                                </div>
                                                <div className="ps-3">
                                                    <h6 className="text-gradient">Congratulation to 89**16 Withdraw ₹297 success.</h6>
                                                    <span className="small pt-1 fw-bold">2023-08-25 </span> <span className="text-muted small pt-2 ps-1">09:49:44</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-3 col-md-6">
                                    <div className="card info-card sales-card">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center">
                                                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center input-group-text">
                                                    <i className="bi bi-cash-stack"></i>
                                                </div>
                                                <div className="ps-3">
                                                    <h6 className="text-gradient">Congratulation to 89**16 Withdraw ₹297 success.</h6>
                                                    <span className="small pt-1 fw-bold">2023-08-25 </span> <span className="text-muted small pt-2 ps-1">09:49:44</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-3 col-md-6">
                                    <div className="card info-card sales-card">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center">
                                                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center input-group-text">
                                                    <i className="bi bi-cash-stack"></i>
                                                </div>
                                                <div className="ps-3">
                                                    <h6 className="text-gradient">Congratulation to 89**16 Withdraw ₹297 success.</h6>
                                                    <span className="small pt-1 fw-bold">2023-08-25 </span> <span className="text-muted small pt-2 ps-1">09:49:44</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
        </>
    )
}

export default Home
