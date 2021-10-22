import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/header';
import Wrapper from '../components/ui/wrapper';
import Card from '../components/card';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Wrapper>
        <Card />
      </Wrapper>
    </div>
  )
}
