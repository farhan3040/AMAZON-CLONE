import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{ basket, user }]=useStateValue();
    // console.log(basket);
    const login = () =>{
        if (user) {
            auth.signOut();
        }
    };

    return (
        <nav className="Header">
            {/* logo on left side ->img */}
            <Link to="/">
            <img 
            className="header_logo" 
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
            alt="" 
            />
            </Link>
            {/* search bar */}
            <div className="header_search">
            <input tupe="text" className="header_searchInput"/>
            <SearchIcon className="header_searchIcon"/>
            </div>

            {/* 3 link */}

            <div className="header_nav">
                
            {/* 1 link */}
            <Link to={!user && "/Login"} className="header_link">
                <div onClick = {login} className="header_option">
                    <span className="header_optionLineOne">Hello {user?.email}</span>
                    <span className="header_optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                </div>
            </Link>

            {/* 2 link */}
            <Link to="/" className="header_link">
            <div className="header_option">
                <span className="header_optionLineOne">Return</span>
                <span className="header_optionLineTwo">& Orders</span>
            </div>
            </Link>

            {/* 3 link */}
            <Link to="/" className="header_link">
            <div className="header_option">
                <span className="header_optionLineOne">your</span>
                <span className="header_optionLineTwo">Prime</span>
            </div>
            </Link>

            {/* 4 link */}
            <Link to="/checkout" className="header_link">
                <div className="header_optionBasket">
                    {/* shopping Basket Icon */}
                    <ShoppingBasketIcon />
                    {/* number of items in the basket  */}
                    <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
                </div>
            </Link>
            </div>

            {/* basket icon with number */}
        </nav>
    )
}

export default Header

