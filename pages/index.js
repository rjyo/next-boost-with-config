import Head from "next/head";
import styles from "../styles/Home.module.css";
import getConfig from "next/config";

export default function Home({ now, secret, folder }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>now: {now}</div>
        <div>folder(public): {folder}</div>
        <div>secret(server): {secret}</div>
      </main>
    </div>
  );
}

export const getServerSideProps = async ({ params }) => {
  const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
  // Will only be available on the server-side
  console.log(serverRuntimeConfig.mySecret);
  // Will be available on both server-side and client-side
  console.log(publicRuntimeConfig.staticFolder);

  return {
    props: {
      now: new Date().toISOString(),
      secret: serverRuntimeConfig.mySecret,
      folder: publicRuntimeConfig.staticFolder,
    },
  };
};
