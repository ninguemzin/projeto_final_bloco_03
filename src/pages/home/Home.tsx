function Home() {
  return (
    <>
      <div className=" grid grid-cols-2 text-teal-800 ">
        <div className="flex flex-col gap-4 items-center justify-center py-4">
          <h2 className="text-5xl font-bold">Seja Bem Vindo!</h2>
          <p className="text-xl">Expresse aqui seus pensamentos e opniões</p>

          <div className="flex justify-around gap-4">
            <div
              className="rounded text-teal-800 
                                            border-teal-700 border-solid border-2 py-2 px-4"
            >
              Novo Produto
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center ">
          <img
            src="https://i.imgur.com/L4ICX81.png"
            alt="Imagem Página Home"
            className="w-2/3 mt-11"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
