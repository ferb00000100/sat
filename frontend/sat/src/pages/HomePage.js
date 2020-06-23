import React from 'react';
import { Col } from 'reactstrap';
const HomePage = () => {

    return(
      <>
          <h1>Security Office</h1>
            <Col>
                <div className="jumbotron">
                      <h1 className="display-3">Auditing Platform</h1>
                      <p className="lead">Click the links above to get information about Sumo Logic collectors and Rumble scans.</p>
                      <hr className="my-4"></hr>
                          <p>Good Times</p>
                          <p className="lead">
                              <a className="btn btn-danger btn-lg" href="/" role="button">ISO Home</a>
                          </p>
                </div>
              </Col>

        </>
    )
}

export default HomePage;