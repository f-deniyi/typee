import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { GiKeyboard } from 'react-icons/gi'

export default function Home () {
  return (
    <div className={styles.container}>
      <Head>
        <title>Typee</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Orbitron:wght@400;500;600;700;800;900&family=Play:wght@400;700&display=swap'
          rel='stylesheet'
        />
      </Head>

      <main className={styles.main}>
        <div className={`${styles.hero} text-center}`}>
          <h6>Welcome to</h6>
          <h1 className='logo'>Typee</h1>
          <p className='my-4'>Improve your typing speed and skills</p>
          <GiKeyboard size='100' />
          <div>
            <Link href='/challenge-setup'>
              <a>
                {' '}
                <button className='btn bg-white'>Get Started</button>
              </a>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
