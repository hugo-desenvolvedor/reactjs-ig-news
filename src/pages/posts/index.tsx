import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
    return (
        <>
        <Head>
            <title>Post | Ignews</title>
        </Head>

        <main className={styles.container}>
            <div className={styles.posts}>
                <a href="#">
                    <time>post date</time>
                    <strong>post title</strong>
                    <p>post text</p>
                </a>
                <a href="#">
                    <time>post date 2</time>
                    <strong>post title 2</strong>
                    <p>post text 2</p>
                </a>
                <a href="#">
                    <time>post date 3</time>
                    <strong>post title 3</strong>
                    <p>post text 3</p>
                </a>
            </div>
        </main>
        </>
    )
}