export default function Header(props) {
//props é somente leitura
  return (
    <header>
      <h1>{props.titulo}</h1>
      <h1>{props.nome}</h1>
    </header>
  )
}
