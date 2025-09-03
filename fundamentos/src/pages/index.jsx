/* import styles from '../styles/Estilo.module.css'
import Link from 'next/link' */

import Navegador from './../components/Navegador';

export default function Inicio() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      height: '100vh'
    }}>
        <Navegador texto="estilo" destino="estilo"/>
        <Navegador texto="exHeader" destino="exHeader" cor="darkgoldenrod"/>
        <Navegador texto="jsx" destino="jsx" cor="crimson"/>
    </div>
  )
}
/* export default function Inicio() {
  return (
    <div>
      <Link className={styles.link_style} href="/estilo">
      Estilo
      </Link >

      <h1>Fundamentos de Next.js & React</h1>
      <h2>Vamos estudar esse FRAMEWORK</h2>
    </div>
  )
} */