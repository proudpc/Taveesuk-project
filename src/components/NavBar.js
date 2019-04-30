import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class NavBar extends Component{
  render(){
    return (
      <NavWrapper className="navbar nav-expand-sm navbar-dark px-sm-5">
        <div className="container d-flex justify-content-between">
          <Link to="/" className= "navbar-brand nav-link d-flex align-items-center">
            <img src={logo} alt="tavee" className="navbar-brand" />
            <div className="nav-item mt-3">taveesuk</div>
          </Link>
        {/*<Link to="/" className="nav-link">
          <img src={logo} alt="tavee"
            className="navbar-brand" />
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
                taveesuk
            </li>
          </ul>
        </Link>
          <Link to='/cart' className= "ml-0">
            <ButtonContainer>
            <span className= "mr-2">
              <i className= "fas fa-cart-plus" />
            </span>
              my cart
            </ButtonContainer>
          </Link>*/}
        </div>
      </NavWrapper>
    );
  }
}
const NavWrapper= styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`
