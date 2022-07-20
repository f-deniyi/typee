import React, { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import { Card, Row, Col } from 'reactstrap'
import { BiTimeFive } from 'react-icons/bi'
import { RiFileTextFill } from 'react-icons/ri'

const Setup = ({ handleSectionChange, setTime, setUserText, time }) => {
  const [textType, setTextType] = useState('')
  const [timeType, setTimeType] = useState('')

  useEffect(() => {
    console.log(textType)
    if (textType === 'auto') {
      setUserText(null)
    }
  }, [textType])

  return (
    <div>
      <Row className='p-4'>
        <Col>
          <Card className='p-3 text-white h-100 mb-2'>
            <div className='text-center'>
              <RiFileTextFill color='white' size='60' />
            </div>
            <p>Select text type</p>

            <p className='px-2'>-Auto: For auto generated text</p>
            <p className='px-2'>-Manual: Manually type your preferred text</p>
            <div>
              <select
                className='w-100 form-control'
                onChange={e => {
                  setTextType(e.target.value)
                }}
              >
                <option disabled selected>
                  Select text type
                </option>
                <option value='auto'>Auto</option>
                <option value='manual'>Manual</option>
              </select>
            </div>
            <div className='mt-3 mb-2'>
              {textType === 'manual' && (
                <textArea
                  rows='5'
                  onChange={e => setUserText(e.target.value)}
                  className='form-control w-100'
                  placeholder='Enter your preferred text'
                />
              )}
            </div>
          </Card>
        </Col>
        <Col>
          <Card className='p-3 text-white h-100 mb-2'>
            <div className='text-center'>
              <BiTimeFive color='white' size='60' />
            </div>
            <p>Select preferred time</p>
            <p className='px-2'>-Custom: Manually type your preferred time</p>
            <div>
              <select
                className='w-100 form-control'
                onChange={e => {
                  setTimeType(e.target.value)
                  setTime(e.target.value)
                }}
              >
                <option disabled selected>
                  Select time
                </option>
                <option value='1'>1 min</option>
                <option value='2'>2 mins</option>
                <option value='3'>3 mins</option>
                <option value='5'>5 mins</option>
                <option value='custom'>Custom</option>
              </select>
            </div>
            <div className='mt-3'>
              {timeType === 'custom' && (
                <input
                  onChange={e => setTime(e.target.value)}
                  className='form-control w-100'
                  placeholder='Enter your preferred time in minutes'
                  type='number'
                />
              )}
            </div>
          </Card>
        </Col>
      </Row>
      <div className='w-100 text-white px-4 mb-2'>
        <button
          disabled={!time || time === 'custom'}
          className='btn cstm-btn w-100 text-white'
          onClick={() => {
            handleSectionChange('typing')
          }}
        >
          Start
        </button>
      </div>
    </div>
  )
}

export default Setup
