import React from 'react'
import data from '../data/quotes'
import { Row, Col, Card } from 'antd'
import { HeartOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'

const shuffle = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

const quotesArrayShuffle = shuffle(data)
const limit = 2

const Quotes = () => {
  return (
    <section className="quotes page-container" style={{ padding: '30px', marginBottom: '20px' }}>
      <div style={{ padding: '30px' }}>
        <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]}>
          {quotesArrayShuffle.map(quote => (
            <Col sm={24} xs={24} md={12} lg={8}>
              <Card title={quote.book ? `${quote.book} ${quote.book} - ${quote.author}` : quote.author}>
                {quote.content.map((q, index) => {
                  if (index < limit) {
                    return (
                      <div style={{ display: 'flex', marginTop: '1rem' }}>
                        <HeartOutlined style={{ margin: '10px 5px 0 0' }} />
                        <p style={{ marginTop: '5px' }}>{q}</p>
                      </div>
                    )
                  }
                })}
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  )
}

export default Quotes
