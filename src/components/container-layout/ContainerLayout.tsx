import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

import { routerContainer } from '../../config';

import { SimpleLoading } from '../simple-loading';
import { TopBar } from '../top-bar';
import { Footer } from '../footer';

import { configMoviesFailed, configMoviesFetch, configMoviesSuccess } from '../../redux';

import { getMovieConfig } from '../../helpers';

function ContainerLayout() {
  const dispatch = useDispatch();

  const initialLoad = async () => {
    try {
      dispatch(configMoviesFetch());

      const result = await getMovieConfig();

      dispatch(configMoviesSuccess(result));
    } catch (error) {
      console.log(error.message);
      dispatch(configMoviesFailed(error.message));
    }
  };

  useEffect(() => {
    initialLoad();
  }, []);

  return (
    <div className="app">
      <Row className="sticky m-0">
        <Col lg={12} md={12} sm={12} xs={12} className="p-0 w-100">
          <TopBar />
        </Col>
      </Row>

      <Row className="m-0 min-h-80vh">
        <Col lg={12} md={12} sm={12} xs={12} className="p-0 w-100">
          <Suspense fallback={<SimpleLoading />}>
            <Switch>
              {routerContainer.map((route, idx) =>
                route.component
                  ? <Route key={idx} path={route.path} exact={route.exact} component={route.component} />
                  : null
              )}
            </Switch>
          </Suspense>
        </Col>
      </Row>

      <Row className="m-0">
        <Col lg={12} md={12} sm={12} xs={12} className="p-0 w-100">
          <Footer />
        </Col>
      </Row>
    </div>
  );
}

export default ContainerLayout;
