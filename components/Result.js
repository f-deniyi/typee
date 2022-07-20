import React from 'react'
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const Result = ({ result }) => {
  const restartTest = () => {
    window.location.reload()
  }
  return (
    <div className='text-center'>
      <p className='text-white' style={{
        fontSize:'25px'
      }}>Test result</p>

      <div className='text-center d-flex justify-content-center my-4 '>
        <div style={{ width: 350, height: 350 }}>
          <CircularProgressbar
            value={result}
            text={`${result}%`}
            styles={buildStyles({
              // rotation: 0.25,
              strokeLinecap: 'butt',
              textSize: '16px',
              pathTransitionDuration: 0.5,
              pathColor: `rgba(62, 152, 199, ${result / 100})`,
              textColor: 'white',
              trailColor: 'white',
              backgroundColor: '#3e98c7'
            })}
          />
        </div>
      </div>
      <div className='my-2'>
        <button className='cstm-btn btn text-white px-5' onClick={restartTest}>
          {' '}
          Retake test
        </button>
      </div>
    </div>
  )
}

export default Result
