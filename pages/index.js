import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Firebase App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          🔼 Next.js + Firebase Template 🔥
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>NextJS Docs &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

					<a href="https://firebase.google.com/docs/web" className={styles.card}>
            <h3>Firebase Docs &rarr;</h3>
            <p>Find in-depth information about Firebase features and info.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="./api/firebase"
            className={styles.card}
          >
            <h3>Firebase API &rarr;</h3>
            <p>Query Firestore through NextJS API routes. (works well with <code className={styles.code}>useSWR</code>)</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>

					<a
            href="https://console.firebase.google.com/"
            className={styles.card}
          >
            <h3>Firebase Console &rarr;</h3>
            <p>
              Monitor and access your Firebase project.
            </p>
          </a>

        </div>
      </main>

      <footer className={styles.footer}>

				Powered by&nbsp;
        <a 
					href="https://vercel.com" target="_blank"
          rel="noopener noreferrer"
				>
          <img 
						src="/vercel.svg" alt="Vercel Logo" 
						className={styles.vercelLogo} 
					/>&nbsp;
        </a>
				&nbsp;and&nbsp;
				<a 
					href="https://firebase.google.com/" target="_blank"
          rel="noopener noreferrer"
				>
					<img 
						src="/firebase.png"	alt="Firebase Logo" 
						className={styles.firebaseLogo}
					/>
        </a>
				
      </footer>
    </div>
  )
}
