function Produto(props) {


  return (
    <>
        <p>Nome: {props.nome} </p>
        <p>Descriçao: {props.descricao} </p>
        <p>Preço: {props.preco} </p>
        <p>Estoque: {props.disp? "Disponivel" : "Fora de estoque"} </p>

    </>
  )
}


export default Produto