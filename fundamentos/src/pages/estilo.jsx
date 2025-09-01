import styles from '../styles/Estilo.module.css'
import Link from 'next/link'

export default function Estiloso() {
  return (
    <div className={styles.roxo}>
    <Link className={styles.link_style} href="/">
      Voltar
      </Link>
      <h1>Estilo usando CSS Módulos</h1>
    </div>
  )
}