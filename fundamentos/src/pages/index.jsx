import styles from '../styles/Estilo.module.css'
import Link from 'next/link'

export default function Inicio() {
  return (
    <div>
      <Link className={styles.link_style} href="/estilo">
      Estiloso
      </Link >

      <h1>Fundamentos de Next.js & React</h1>
      <h2>Vamos estudar esse FRAMEWORK</h2>
    </div>
  )
}