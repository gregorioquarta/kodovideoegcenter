'use client'
import Image from 'next/image'
import Login from '../login'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Login></Login>
      <div className={styles.description}>
        
        <iframe width="1120" height="630" src="https://www.youtube.com/embed/0b8vXEDMT1Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        
      </div>
    </main>
  )
}
