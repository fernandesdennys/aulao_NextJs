import styles from '../styles/Estilo.module.css'
import Layout from '../components/Layout'
import Link from 'next/link'

export default function Estiloso() {
  return (
      <Layout titulo='Exemplo de CSS Modularizado'>  
    <div className={styles.background}>
      <h1>Estilos usando CSS Módulos</h1>
    </div>
      </Layout>
  )
}
