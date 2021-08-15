import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col, Spinner } from 'reactstrap';

import { LandingPageProps, LandingPageState } from './LandingPage.interfaces';
import { QuerySearch } from '../../interfaces';

import { MovieCard } from '../../components';

import { getDataSearch, qsParse } from '../../helpers';

import './LandingPage.scss';

class LandingPage extends Component<LandingPageProps, LandingPageState> {
  state: LandingPageState = {
    data: null,
    movies: [],
    isLoading: false,
    page: 1,
    query: (qsParse(this.props.location.search || '') as QuerySearch).query || '',
  };

  componentDidMount = async () => {
    try {
      window.addEventListener('scroll', this.scrollListener, true);

      this.getSearch();
    } catch (error) {
      console.log(error.message);
    }
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.scrollListener, true);
  }

  componentDidUpdate = () => {
    const query = (qsParse(this.props.location.search || '') as QuerySearch).query || '';

    if (query !== this.state.query) {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setTimeout(() => {
        this.setState({ query, page: 1, data: null, movies: [] }, () => {
          this.getSearch();
        });
      }, 500);
    }
  }

  scrollListener = () => {
    const list = document.getElementById('search-data');

    if (!list) return;

    if ((window.innerHeight + window.scrollY + 30) >= document.body.scrollHeight) {
      const { page, data, isLoading } = this.state;

      if (page <= (data?.total_pages || 1) && !isLoading) {
        this.getSearch();
        return;
      }
    }
  };

  getSearch = async () => {
    try {
      const { query, page } = this.state;

      if (!query) return;

      this.setState({ isLoading: true });

      const data = await getDataSearch(query, page);

      this.setState(prevState => ({
        isLoading: false,
        page: page + 1,
        data,
        movies: [...prevState.movies, ...data.results],
      }));
    } catch (error) {
      console.log(error.message);
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { data, movies, isLoading } = this.state;

    return (
      <div
        className="p-5"
      >
        {!data && (
          <div>
            Please put keyword on search box
          </div>
        )}
        {data && (
          <div
            id="search-data"
          >
            <Row className="mb-3">
              <Col>
                <div>
                  Search Results: {data.total_results} movies
                </div>
              </Col>
            </Row>

            <Row className="m-0 p-0">
              {movies.map(item => {
                return (
                  <Col
                    md={2}
                    lg={2}
                    sm={2}
                    xs={12}
                    key={item.id}
                    className="m-0 p-0 border-radius-10px"
                  >
                    <MovieCard data={item} />
                  </Col>
                );
              })}
            </Row>
          </div>
        )}

        {isLoading && (
          <div className="w-100 d-flex align-items-center justify-content-center">
            <Spinner size="md" />
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(LandingPage);
