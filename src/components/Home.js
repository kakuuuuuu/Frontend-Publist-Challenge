import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap'
import Preview from './Preview'
import '../App.css'

class Home extends Component {

  render() {
    const { data } = this.props
    return (
      <Grid>
        <Row>
          <Col mdOffset={1}>
            <h2>Articles</h2>
          </Col>
          {/* Creates Preview component for each article object in data */}
          {data && data.length > 0 && (
            data.map(article => (
              <Preview article={article} key={article.id}/>
            ))
          )}
        </Row>
      </Grid>
    );
  }
}

function mapStateToProps({ data }) {
  return {
    data
  }
}



export default connect(
  mapStateToProps,
  null
)(Home)
