export default function jsx() {
  const a = 15;
  const b = 3;
  console.log(a * b);
  const titulo = <h1>JSX é um Conceito Central</h1>;

  function subtitulo() {
    return <h2>{'Next.js'.toUpperCase()}</h2>
  }

  return (
    <div>
      {titulo}
      {subtitulo()}
      {a * b} <br />
      
      <p>{JSON.stringify({ nome: 'Dennys', Idade: 32 })}</p>
    </div>
  );
}
