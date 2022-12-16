import React from 'react'
import {Link} from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer" style={{ marginTop: 70 }}>
            <div className="container ">
                <div className="row" style={{ display: "flex", content: "center" }}>
                    <div className="col-2" style={{ padding: 20 }}>
                        <Link to='/'>
                            <span style={{ 'fontSize': '24px' }} className="fa fa-home"></span>
                        </Link>
                    </div>

                    <div className="col-3" style={{ padding: 20 }}>
                        <Link to='/Orders'>
                            <span style={{ 'fontSize': '24px' }} className="fa fa-shopping-cart"></span>
                        </Link>
                    </div>
                    <div className="col-2" style={{ padding: 18 }}>
                        <Link to="/Transport">
                            <span style={{ 'fontSize': '24px' }} className="fa fa-car"></span>
                        </Link>


                    </div>

                    <div className="col-2" style={{ padding: 18 }}>
                        <a href="#">
                            <span style={{ 'fontSize': '24px' }} className="fa fa-search"></span>
                        </a>


                    </div>

                    <div className="col-2" style={{ padding: 18 }}>
                        <Link to='/Message'>
                            <span style={{ 'fontSize': '24px' }} className="fa fa-comment"></span>
                        </Link>


                    </div>
                </div>
            </div>
        </footer>
  )
}
