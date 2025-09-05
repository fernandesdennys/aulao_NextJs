/* import styles from '../styles/Estilo.module.css'
import Link from 'next/link' */

import Navegador from './../components/Navegador';

export default function Inicio() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        background: 'black',
        borderRadius: '20px',
        width: '80%',
        margin: 'auto',
        padding: '20px'
      }}
    >
      {<Navegador texto="estilo" destino="estilo" />}
      <Navegador texto="exHeader" destino="exHeader" cor="darkgoldenrod" />
      <Navegador texto="jsx" destino="jsx" cor="crimson" /><Navegador texto="Navegação #01" destino="/navegacao" cor="mediumspringgreen"/>
      <Navegador texto="Navegação #02" destino="/cliente/sp-2/984576" cor="blue" />
      <Navegador texto="Componente com Estado" destino="/estado" cor="teal" />
    </div>
  );
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
