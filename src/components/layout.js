import React from "react"
import Menu from "./hamburger/hamburger"
import "./layout.css"

const Layout = ({children}) => {

    return (
        <div className="container">
            <header>
                <h1>Gatsby Hamburger Demo</h1>
                <Menu />                
            </header>
            <main>{children}</main>
            <footer>Footer</footer>
        </div>
    )
}

export default Layout