import Titulo from "./components/Titulo"
import Aluno from "./components/Aluno"
import Nota from "./components/Nota"
import Produto from "./components/Produto"

function App() {
  return (
    <>
      <Titulo />
      <Aluno nome="Carlos" turma="Desenvolvimento de Sistemas" />
      <Aluno nome="Ana" turma="Multimidia" />
      <Aluno nome="Sophia" turma="Administraçao" />
      <Nota disc="React" nota={8} />
      <Nota disc="React" nota={9.5} />
      <Nota disc="React" nota={3.5} />
      <Produto
        nome="Teclado Mecânico"
        descricao="Teclado com iluminação RGB"
        preco={250}
        disp={true}
      />
      <button>Comprar</button>
      <Produto
        nome="Garrafa"
        descricao="Garrafa de agua termica"
        preco={90}
        disp={true}
      />
      <button>Comprar</button>
      <Produto
        nome="Mouse"
        descricao="Mouse rgb sem fio"
        preco={150}
        disp={true}
      />
      <button>Comprar</button>
      <Produto
        nome="Fone rgb"
        descricao="Fone rgb bluetooth com acustica"
        preco={200}
        disp={true}
      />
      <button>Comprar</button>

    </>
  )
}

export default App