import Header from "../components/ExemploHeader"
import Layout from './../components/Layout';
import styles from "../styles/Layout.module.css"

export default function ExHeadr(){
  return (
    <Layout titulo="Usando componentes">
      <div className={styles.bcheader}>
        <Header titulo="Dennys Fernandes" />
        <Header titulo="Next.Js & React"/>
      </div>
    </Layout>
  )
}