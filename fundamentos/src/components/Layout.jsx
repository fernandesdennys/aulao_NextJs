import styles from '../styles/Layout.module.css'
import Link from 'next/link'
export default function Layout(props) {
  return (
    <div className={styles.layout}>
      {/* CABEÇALHO */}
      <div className={styles.header}>
        <h1>{props.titulo ?? 'Mais um exemplo'}</h1>
      <Link className={styles.header} href='/'>Voltar</Link>
      </div>
      
      {/* CONTEUDO */}
      <div className={styles.container}>
      {props.children}
      </div>
    </div>
  )
}