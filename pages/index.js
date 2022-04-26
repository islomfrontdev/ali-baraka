import Head from "next/head";
import Loading from "../src/components/Loading";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ali Baraka</title>
        <meta name="description" content="Bog'dorchilik" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Loading />
    </div>
  );
}
