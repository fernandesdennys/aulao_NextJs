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
      {<Navegador texto="estilo" destino="estilo" cor="#007777" />}
      <Navegador texto="exHeader" destino="exHeader" cor="#006666" />
      <Navegador texto="jsx" destino="jsx" cor="#005555" /><Navegador texto="Navegação #01" destino="/navegacao" cor="#004444"/>
      <Navegador texto="Navegação #02" destino="/cliente/sp-2/984576" cor="#003333" />
      <Navegador texto="Componente com Estado" destino="/estado" cor="#477774" />
      <Navegador texto="Integração com API #01" destino="/integracao_1" cor="#466664" />
      <Navegador texto="Conteúdo Estático" destino="/estatico" cor="#466664" />
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
