import React, { useEffect, useState } from 'react'
import { LoremIpsum } from 'lorem-ipsum'
import styles from '../styles/Home.module.css'
import { Card, Row, Col } from 'reactstrap'
import { BiTimeFive } from 'react-icons/bi'
import { RiFileTextFill } from 'react-icons/ri'
import Settings from '../components/Settings'
import Typing from '../components/Typing'
import Result from '../components/Result'

const Setup = () => {
  const [section, setSection] = useState('settings')
  const [paragraph, setParagraph] = useState('')
  const [userParagraph, setUserParagraph] = useState('')
  const [testParagraph, setTestParagraph] = useState('')
  const [userText, setUserText] = useState(null)
  const [time, setTime] = useState(null)
  const [result, setResult] = useState('')

  const handleSectionChange = sec => {
    setSection(sec)
  }
  const handleTestResult = res => {
    setResult(res)
  }

  const handleUserParagraph = par => {
    setUserParagraph(par)
  }

  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    }
  })

  const handleParagrpah = () => {
    console.log(userText)
    if (userText) {
      setParagraph(userText)
    } else {
      setParagraph(lorem.generateParagraphs(2))
    }
  }

  const handleTestParagraph = e => {
    setTestParagraph(e)
  }

  const handleResult = res => {
    setResult(res)
  }

  useEffect(() => {
    handleSectionChange('settings')
  }, [])

  useEffect(() => {
    if (section === 'typing') {
      handleParagrpah()
    }
  }, [section])

  return (
    <div className='px-2 wrapper'>
      <div className='text-center '>
        <h2 className='logo mt-3 text-center text-white'>Typee</h2>
      </div>
      {section === 'settings' && (
        <Settings
          handleSectionChange={handleSectionChange}
          setTime={setTime}
          setUserText={setUserText}
          time={time}
        />
      )}
      {section === 'typing' && (
        <Typing
          handleSectionChange={handleSectionChange}
          paragraph={paragraph}
          userText={userText}
          time={time}
          userParagraph={userParagraph}
          testParagraph={testParagraph}
          handleResult={handleTestResult}
          handleTestParagraph={handleTestParagraph}
        />
      )}
      {section === 'result' && (
        <Result handleSectionChange={handleSectionChange} result={result} />
      )}
    </div>
  )
}

export default Setup
