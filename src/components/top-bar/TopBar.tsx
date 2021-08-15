import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Navbar, Nav, NavItem, Row, Col, NavbarToggler, UncontrolledCollapse } from 'reactstrap';

import { HistoryProps } from '../../interfaces';

import { useFavoriteMoviesSelector } from '../../custom-hook';

import { Search } from '../search';

import './TopBar.scss';

/**
 * TODO ICHSAN
 * INI BELUM SMOOTH TRANSISI COLLAPSE NYA
 */

function NavigationBar(props: HistoryProps) {
  const { favoriteMovies } = useFavoriteMoviesSelector();

  const path = props.history.location.hash;

  return (
    <Navbar expand="md" className="navbar-wrapper">
      <NavbarToggler
        id="navbar-toggler"
        className="navbar navbar-dark outline-none"
      />

      <UncontrolledCollapse toggler="navbar-toggler" navbar className="h-100">
        <Row className="m-0 p-2 w-100">
          <Col lg={2} md={2} sm={2} xs={12} className="m-0 p-0">
            <Nav className="ps-2 pe-2 h-100" navbar>
              <NavItem className="navbar-navitem font-size-16 cari-film">
                <Link to="/">
                  <b>CariFilm.com</b>
                </Link>
              </NavItem>
            </Nav>
          </Col>

          <Col lg={8} md={8} sm={8} xs={12} className="m-0 p-0 d-flex align-items-center">
            <Search />
          </Col>

          <Col lg={2} md={2} sm={2} xs={12} className="m-0 p-0">
            <Nav className="ml-auto d-flex justify-content-end h-100" navbar>
              <NavItem className="navbar-navitem ps-2 pe-2" active={path.includes('#projects')}>
                <Link to="/favorites">
                  <div className="fav-container">
                    <i className="fa fa-heart" />
                    {favoriteMovies.result.length > 0 && (
                      <div className="dot-fav">
                        {favoriteMovies.result.length}
                      </div>
                    )}
                  </div>
                </Link>
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </UncontrolledCollapse>
    </Navbar>
  );
}

export default withRouter(NavigationBar);
