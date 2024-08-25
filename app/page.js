import Navbr from "./components/nav";
import Hero from "./components/hero1";
import About from "./components/about";
import Partenaires from "./components/partenaires";
import Whyus from "./components/whyus";
import Contact from "./components/contact";
import Head from 'next/head';
export const metadata = {
  title: "SAIDTEX",
  description: "Saidtex, le leader de l'industrie textile au Maroc. Avec plus de 50 ans d'expertise, nous offrons des solutions de pointe en filature, finissage, tissage et bonneterie. En tant que partenaire privilégié, nous sommes fiers de servir nos clients locaux et internationaux avec un accent fort sur la qualité et le service. Explorez notre gamme de produits et bénéficiez de notre expérience inégalée dès aujourd'hui.",
  keywords: "Machines textiles, Filature Maroc, Finissage Maroc, Bonneterie Maroc, Tissage Maroc, Équipement textile Maroc, Machines neuves, Machines anciennes, Industrie textile, Maroc, Machines Maroc",
  icons:{
    icon:['./favicon.ico?v=1'],
  },
  robots: {
    index: true,
    follow: true,
  }
};
export default function Home() {
  return (
    <div>
     <Head>
        <title>SAIDTEX</title>
        <meta name="description" content="Saidtex, le leader de l'industrie textile au Maroc. Avec plus de 50 ans d'expertise, nous offrons des solutions de pointe en filature, finissage, tissage et bonneterie. En tant que partenaire privilégié, nous sommes fiers de servir nos clients locaux et internationaux avec un accent fort sur la qualité et le service. Explorez notre gamme de produits et bénéficiez de notre expérience inégalée dès aujourd'hui." />
        <meta name="keywords" content="Machines textiles, Filature Maroc, Finissage Maroc, Bonneterie Maroc, Tissage Maroc, Équipement textile Maroc, Machines neuves, Machines anciennes, Industrie textile, Maroc, Machines Maroc" />
        <link rel="icon" href="./favicon.ico" type="image/x-icon" />
    </Head>
      <Navbr />
      <Hero />
      <About />
      <Partenaires />
      <Whyus />
      <Contact />
    </div>
  );
}
