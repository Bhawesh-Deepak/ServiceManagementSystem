import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand animate-charcter" href="#">
        LE- SERVICE
    </a>
    <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
    >
        <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link className="nav-link" to='/'>
                    Home <span className="sr-only">(current)</span>
                </Link>
            </li>

            <li className="nav-item active">
                <Link className="nav-link" to='/Products'>
                    Rent Flat <span className="sr-only">(current)</span>
                </Link>
            </li>

            <li className="nav-item active">
                <Link className="nav-link" to='/Invoice'>
                    Tax Filling <span className="sr-only">(current)</span>
                </Link>
            </li>

            <li className="nav-item active">
                <Link className="nav-link" to='/Invoice'>
                    Tutor <span className="sr-only">(current)</span>
                </Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link" to='/Invoice'>
                    Order Milk <span className="sr-only">(current)</span>
                </Link>
            </li>

            <li className="nav-item active">
                <Link className="nav-link" to='/Invoice'>
                    Sell Purchase Book <span className="sr-only">(current)</span>
                </Link>
            </li>

           
        </ul>

    </div>
</nav>
  )
}
