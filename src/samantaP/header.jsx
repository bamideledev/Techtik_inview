import React from "react";
import './Header.css'
import Head from "./hompagesam";
import Search from "./search";
import Navbar from "./nav";

const Header = () => {
    return(
        <div>
            <Head/>
            <Search/>
            <Navbar/>
        </div>
    )
}
export default Header