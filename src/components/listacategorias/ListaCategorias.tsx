import { useState, useEffect } from "react";
import { DNA } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import Categoria from "../../models/Categoria";
import CardCategorias from "../categoria/CardCategorias";
import { buscar } from "../../services/Service";

function ListaCategorias() {
  const navigate = useNavigate();
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchCategorias() {
      try {
        await buscar("/categoria", setCategorias);
      } catch (error: any) {
        if (error.toString().includes("403")) {
          console.error("Erro ao buscar categorias:", error); // Ou outro redirecionamento apropriado
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchCategorias();
  }, [navigate]);

  return (
    <>
      {isLoading ? (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      ) : (
        <div className="flex justify-center w-full my-4">
          <div className="container flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categorias.map((categoria) => (
                <CardCategorias key={categoria.id} categoria={categoria} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ListaCategorias;
