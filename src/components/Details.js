import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Grid,
  Row,
  Col,
  Table
} from 'react-bootstrap'
import dateFormat from 'dateformat'


class Details extends Component {

  render(){
    const { article } = this.props
    return(
      <div>
      {article && (
        <Grid>
          <Row>
            <Col>
              <a href={article.url}>
                <h3 className='text-center'>{article.title}</h3>
              </a>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
            {/* Only renders image if url is provided */}
            {article.image_url !== null && (
              <a href={article.url}>
                {/* Changes url to backup image if article image is broken */}
                <img src={article.image_url} alt='article' className='details-img' onError={(e)=>{e.target.src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png"}}/>
              </a>
            )}
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <p>Description: {article.description} </p>
              {/* Only renders author(s) if they are provided */}
              {article.authors && article.authors.length> 0
                ? (<p className='bold'>By: {article.authors.map(name => (<span>{name} <br /></span>))}
                  </p>)
                : null
              }
              <p>{dateFormat(article.published_at, "dddd, mmmm dS, yyyy")}</p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={8}>
              <Table striped bordered condensed hover>
                <tbody>
                  <tr>
                    <td>Word Count</td>
                    <td>{article.word_count}</td>
                  </tr>
                  <tr>
                    <td>Read Time</td>
                    <td>{article.read_time}</td>
                  </tr>
                  <tr>
                    <td>Score</td>
                    <td>{article.score}</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Grid>)}
      </div>
    )
  }
}

function mapStateToProps( state, ownProps ) {
  return {
    article: state.data.find(article => article.id === ownProps.match.params.id)
  }
}

export default connect(
  mapStateToProps
)(Details)
