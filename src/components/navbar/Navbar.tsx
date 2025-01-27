import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="w-full flex justify-center py-4 bg-green-500 text-white">
        <div className="container flex justify-between items-center text-lg">
          <div className="flex items-center gap-2">
            <img
              src="https://i.imgur.com/L4ICX81.png"
              alt="Imagem Página Home"
              className="w-9"
            />
            <Link to="/home" className="text-2xl font-bold">
              Farmacia
            </Link>
          </div>
          <div className="flex gap-4 items-center">
            <span>Produto</span>
            <Link to="/categoria" className="hover:underline">
              Categorias
            </Link>
            <Link to="/cadastrarcategoria" className="hover:underline">
              Cadastrar Categoria
            </Link>
            <span>Sair</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
