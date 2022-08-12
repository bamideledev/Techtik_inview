import React from "react";
import { Link } from "react-router-dom";


const Search = () => {
    window.addEventListener('scroll', function(){
        const search = document.querySelector('.search')
        search.classList.toggle('active', window.scrollY > 100)
    })
    return(
        <div>
           <section className="search">
            <div className="container c_flex">
                <div className="logo width">
                    <img src="hospital.png" alt="#"/>
                </div>
                <div className="search-box f_flex">
                    <i className="fa fa-search"></i>
                    <input type='text' placeholder= 'Search and enter...'/>
                    <span>All Categories</span>
                </div>

                <div className="icon f_flex width">
                    <i className="fa fa-user icon_circle"></i>
                   <div className="cart">
                    <Link to = '/cart'>
                        <i className="fa fa-shopping-bag icon-circle"></i>
                        <span>0</span>
                    </Link>
                   </div>
                </div>
            </div>
           </section>
        </div>
    )
}
export default Search;