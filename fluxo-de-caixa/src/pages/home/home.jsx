import Container from "../../components/container/container";
import styles from "./home.module.css";

export default function Home() {
  return (
    <Container>
      <div className={styles.content}>
        <div>Fluxo de caixa</div>
      </div>
    </Container>
  );
}
