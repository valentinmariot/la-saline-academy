import BasicIcon from "@/components/basicIcon/basicIcon";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Accueil - La Saline Academy</title>
      </Head>
      <h1>Title1 - Gotham Bold (5m)</h1>
      <h2>Titre h2</h2>
      <h3>Titre h3</h3>
      <h4>Titre h4</h4>
      <h5>Titre h5</h5>
      <span>span</span>
      <b>Bold</b>
      <p>Paragraphe</p>
      <i>Italic</i>
      <u>underline</u>

      <a href="" className="btn btn-purple-solid">
        <BasicIcon name="tiktok" />
        Tiktok
      </a>
      <h1>Title1 - Gotham Bold (5m)</h1>
      <h2>Titre h2</h2>
      <h3>Titre h3</h3>
      <h4>Titre h4</h4>
      <h5>Titre h5</h5>
      <span>span</span>
      <b>Bold</b>
      <p>Paragraphe</p>
      <i>Italic</i>
      <u>underline</u>
    </>
  );
};

export default Home;
