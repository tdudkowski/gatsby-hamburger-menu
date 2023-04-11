import React from "react"
import { Link } from "gatsby"

const Menu = () => {

    return (
            <ul>
                <li><Link to="/">Home page</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/404">404</Link></li>
            </ul>
    )

}

export default Menu