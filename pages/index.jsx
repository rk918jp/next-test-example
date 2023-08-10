import Head from 'next/head'
import Image from 'next/image'

import styles from '@/pages/index.module.css'
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <Link href={"/form"} className={styles.card}>
            <h3>Form &rarr;</h3>
            <p>Example page includes form.</p>
          </Link>
          <Link href={"/dummy"} className={styles.card}>
            <h3>Dummy &rarr;</h3>
            <p>This is dummy link.</p>
          </Link>
          <Link href={"/dummy"} className={styles.card}>
            <h3>Dummy &rarr;</h3>
            <p>This is dummy link.</p>
          </Link>
          <Link href={"/dummy"} className={styles.card}>
            <h3>Dummy &rarr;</h3>
            <p>This is dummy link.</p>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
