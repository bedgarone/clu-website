import Head from "next/head";
import Image from "next/image";
import styles from "../styles/main.module.scss";
import Container from "@mui/material/Container";
import Navbar from "../components/Navbar";

import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function Home() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#2c2c2c",
      },
      secondary: {
        main: "#e3e3e3",
      },
    },
    typography: {
      fontFamily: "Inter",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.container}>
        <Head>
          <title>Coro Litúrgico Universitário</title>
          <meta
            name="description"
            content="O Coro Litúrgico Universitário é um coro formado por estudantes universitários, oriundos de várias universidades do norte do país, com o objetivo de promover a Liturgia solene, tendo como parte integrante a tradição musical da Igreja, um tesouro de inestimável valor."
          />
          <link rel="icon" href="/favicon.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;400;600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;400;600&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap"
            rel="stylesheet"
          />
        </Head>

        <Navbar />

        <Container maxWidth="lg" className={styles.main}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </Container>
      </div>
    </ThemeProvider>
  );
}
