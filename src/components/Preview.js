import React, { Component } from 'react'
import {
  Row,
  Col
} from 'react-bootstrap'
import { Link } from 'react-router-dom'


class Preview extends Component {
  render() {
    const { article } = this.props
    return (
      <Col xs={12} md={5} mdOffset={1} className='article-preview'>
        <Row>
          <Col xs={10}>
            <Link to={`/article/${article.id}`} ><h4>{article.title}</h4></Link>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={7} md={7}>
          {article.image_url !== null && (
            <img src={article.image_url} alt='article' className='preview-img' onError={(e)=>{e.target.src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png"}}/>
          )}
          </Col>
          <Col xs={12} sm={4} md={4}>
            <p>Author(s): </p>
            {article.authors && article.authors.length > 0
              ? article.authors.map(name => (
                  <p key={name}>{name}</p>
                ))
              : <p>None</p>
            }
          </Col>

        </Row>
      </Col>
    )
  }
}

export default Preview
