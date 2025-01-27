import { Link } from "react-router-dom";
import Categoria from "../../models/Categoria";

interface CardCategoriasProps {
  categoria: Categoria;
}

function CardCategorias({ categoria }: CardCategoriasProps) {
  return (
    <div className="border mt-11 flex flex-col rounded-2xl overflow-hidden justify-between shadow-xl shadow-black-50">
      <header className=" px-2 bg-emerald-500 text-white font-bold text-2xl">
        <p className="p-4 text-3xl h-full">{categoria.nome}</p>
      </header>
      <p className="p-8 text-2xl h-full">{categoria.descricao}</p>

      <div className="flex border-2 border-t-teal-600">
        <Link
          to={`/editarcategoria/${categoria.id}`}
          className="w-full text-black-100 hover:bg-emerald-500 
    flex items-center justify-center py-2 "
        >
          <button>Editar</button>
        </Link>

        <Link
          to={`/deletarcategoria/${categoria.id}`}
          className="text-black hover:bg-red-500 w-full 
		flex items-center justify-center"
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardCategorias;
