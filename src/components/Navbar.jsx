import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)

    useEffect(() => {
        try {
            const raw = localStorage.getItem('user')
            if (raw) setUser(JSON.parse(raw))
        } catch (err) {
            setUser(null)
        }

        const onUserChange = () => {
            try {
                const raw = localStorage.getItem('user')
                setUser(raw ? JSON.parse(raw) : null)
            } catch (err) {
                setUser(null)
            }
        }

        window.addEventListener('userChanged', onUserChange)
        return () => window.removeEventListener('userChanged', onUserChange)
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        setUser(null)
        window.dispatchEvent(new Event('userChanged'))
        navigate('/')
    }

    return (
        <section className="row">
            <div className="col-md-12">

                <nav
                    className="navbar navbar-expand-md px-4 py-3"
                    style={{
                        background: "linear-gradient(to right, #0f172a, #1e293b)",
                        boxShadow: "0 4px 15px rgba(0,0,0,0.4)"
                    }}
                >

                    {/* Logo */}
                    <Link
                        to="/"
                        className="navbar-brand"
                        style={{
                            color: "#22d3ee",
                            fontSize: "32px",
                            fontWeight: "bold",
                            fontFamily: "Georgia, serif",
                            letterSpacing: "2px"
                        }}
                    >
                        Wiseman Motors
                    </Link>

                    {/* Toggle Button */}
                    <button
                        className="navbar-toggler bg-light"
                        data-bs-target="#navbarcollapse"
                        data-bs-toggle="collapse"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navbar Links */}
                    <div
                        className="collapse navbar-collapse"
                        id="navbarcollapse"
                    >

                        <div className="navbar-nav mx-auto gap-3">

                            <Link
                                to="/"
                                className="nav-link"
                                style={{
                                    color: "white",
                                    fontSize: "18px",
                                    fontWeight: "600"
                                }}
                            >
                                Home
                            </Link>

                            <Link
                                to="/Addproduct"
                                className="nav-link"
                                style={{
                                    color: "white",
                                    fontSize: "18px",
                                    fontWeight: "600"
                                }}
                            >
                                Add Product
                            </Link>

                            {!user && (
                                <Link
                                    to="/signup"
                                    className="nav-link"
                                    style={{
                                        color: "white",
                                        fontSize: "18px",
                                        fontWeight: "600"
                                    }}
                                >
                                    Signup
                                </Link>
                            )}

                            {!user && (
                                <Link
                                    to="/signin"
                                    className="nav-link"
                                    style={{
                                        color: "white",
                                        fontSize: "18px",
                                        fontWeight: "600"
                                    }}
                                >
                                    Signin
                                </Link>
                            )}
                        </div>

                        {/* User Section */}
                        <div className="d-flex align-items-center">

                            <small
                                className="me-3"
                                style={{
                                    color: "#cbd5e1",
                                    fontSize: "14px",
                                    fontStyle: "italic"
                                }}
                            >
                                {user
                                    ? `Logged in as ${user?.email || user?.username}`
                                    : "Welcome Guest"}
                            </small>

                            {user ? (
                                <button
                                    className="btn"
                                    onClick={handleLogout}
                                    style={{
                                        backgroundColor: "#ef4444",
                                        color: "white",
                                        borderRadius: "30px",
                                        padding: "8px 20px",
                                        fontWeight: "bold",
                                        border: "none"
                                    }}
                                >
                                    Logout
                                </button>
                            ) : null}
                        </div>
                    </div>
                </nav>
            </div>
        </section>
    )
}

export default Navbar