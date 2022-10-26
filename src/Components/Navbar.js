import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
const Navbar = () => {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark sticky-top" style={{backgroundColor:" rgb(233, 160, 16)",color:"black"}}>
                <div className="container-fluid">
                    <Link className="navbar-brand text-light" to="/" ><strong style={{color:"brown"}}>Dhinchaak News</strong></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link m-2 py-1 px-2 text-center" to="/" style={{backgroundColor:"rgb(233, 111, 16)",color:"white",fontSize:"1.1rem"}}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  m-2 pśy-1 px-2 text-center" to="/business" style={{backgroundColor:"rgb(233, 111, 16)",color:"white",fontSize:"1.1rem"}}>Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  m-2 py-1 px-2 text-center" to="/entertainment" style={{backgroundColor:"rgb(233, 111, 16)",color:"white",fontSize:"1.1rem"}} >Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  m-2 py-1 px-2 text-center" to="/sports" style={{backgroundColor:"rgb(233, 111, 16)",color:"white",fontSize:"1.1rem"}}>Sports</Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link className="nav-link  m-2 py-1 px-2 text-center" to="/health" style={{backgroundColor:"rgb(233, 111, 16)",color:"white",fontSize:"1.1rem"}}>Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  m-2 py-1 px-2 text-center" to="/science" style={{backgroundColor:"rgb(233, 111, 16)",color:"white",fontSize:"1.1rem"}}>Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  m-2 py-1 px-2 text-center" to="/technology" style={{backgroundColor:"rgb(233, 111, 16)",color:"white",fontSize:"1.1rem"}}>Technology</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  m-2 py-1 px-2 text-center" to="/technology" style={{backgroundColor:"rgb(233, 111, 16)",color:"white",fontSize:"1.1rem"}}><Button /></Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>

        )
    
}
export default Navbar