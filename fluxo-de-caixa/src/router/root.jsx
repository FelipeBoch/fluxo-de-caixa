import styles from "./root.module.css";
import Container from "../components/container/container";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <section className={styles.content}>
      <header className={styles.header}>
        <Container>
          <div className={styles.header_content}>
            <div className={styles.imagem_box}>
              <img
                className={styles.icon}
                src='../../src/assets/icon.png'
                alt=''
              />
            </div>
          </div>
        </Container>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </section>
  );
}
