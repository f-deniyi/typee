import React, { useEffect, useState } from 'react'
import { Row, Col, Card } from 'reactstrap'
import { LoremIpsum } from 'lorem-ipsum'
// const LoremIpsum = require("lorem-ipsum").LoremIpsum;

const Typing = ({
  handleResult,
  testParagraph,
  paragraph,
  time,
  userText,
  handleUserParagraph,
  handleSectionChange,
  handleTestParagraph
}) => {
  const [timer, setTimer] = useState('')

  function startTimer (duration) {
    var timer = duration,
      minutes,
      seconds
    setInterval(function () {
      minutes = parseInt(timer / 60, 10)
      seconds = parseInt(timer % 60, 10)

      minutes = minutes < 10 ? '0' + minutes : minutes
      seconds = seconds < 10 ? '0' + seconds : seconds

      setTimer(minutes + ':' + seconds)

      if (--timer < 0) {
        timer = duration
      }
    }, 1000)
  }

  useEffect(() => {
    startTimer((Number(time) * 60).toString())
  }, [])

  useEffect(() => {
    if (timer === '00:00') {
      submit()
    }
  }, [timer])

  const submit = () => {
    const paragraphArr = paragraph.split('')
    const testParagraphArr = testParagraph.split('')
    let result = 0
    for (var i = 0; i < paragraph.length; i++) {
      if (paragraphArr[i] === testParagraphArr[i]) {
        result++
      }
    }
    const percentage = Math.floor((result / paragraphArr.length) * 100)
    console.log(percentage)
    handleResult(percentage)
    handleSectionChange('result')
  }

  return (
    <div className='px-4 mt-2'>
      <div>
        <h2 className='text-center text-white mb-4 timer'>{timer}</h2>
      </div>
      <Row className='px-3'>
        <Col>
          <Card className='p-3 text-white test-paragraph'>
            <p>{paragraph}</p>
          </Card>
        </Col>
        <Col>
          <Card className='user-input-card'>
            <textarea
              className=' h-100 p-3 user-input'
              rows='14'
              onChange={e => handleTestParagraph(e.target.value)}
            />
          </Card>
        </Col>
      </Row>
      <div className='w-100 text-white px-4 mt-4'>
        <button className='btn cstm-btn w-100 text-white' onClick={submit}>
          Submit
        </button>
      </div>
    </div>
  )
}

export default Typing
