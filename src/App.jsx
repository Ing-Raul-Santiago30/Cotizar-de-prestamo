// aqui importa el usestate y esta funcion la utilizas antes del return
import { useState, useEffect } from "react";
// importamos el componente en react de esta forma
import Header from "./Components/Header";
import Button from "./Components/button";
import { formatearDinero, calcularTotalApagar } from "./helpers";

function App() {
  // lo puedes llamar como cantidad y el segundo valor es lo que va a modificar es usestate, y le ponemos el valor inicial en el ustestate
  const [cantidad, setCantidad] = useState(10000); // retorna un arreglo, destrochorin de arreglo
  const [meses, setMeses] = useState(6);
  const [total, setTotal] = useState(0);
  const [pago, setPago] = useState(0);

  useEffect(() => {
    const resultadoTotalPagar = calcularTotalApagar(cantidad, meses);
    setTotal(resultadoTotalPagar);

    // calcular el pago mensual
    setPago(total / meses);
  }, [cantidad, meses, total]);
  const MIN = 0;
  const MAX = 50000;
  const STEP = 100;

  console.log(cantidad);

  // puedo declarar una variable y declararla mas abajo con llaves y crear la variable antes del return
  //const hola ="hola mundo";

  function handleChange(e) {
    setCantidad(+e.target.value); // modifca el valor
  }
  function handleClickDecremento() {
    const valor1 = cantidad - STEP;

    if (valor1 < MIN) {
      alert("cantidad no valida favor  !Digite una cantidad valida!");
      return;
    }
    setCantidad(valor1);
  }

  function handleClickIncremento() {
    const valor2 = cantidad + STEP;
    if (valor2 > MAX) {
      alert("cantidad no valida favor  !Digite una cantidad valida!");
      return;
    }

    setCantidad(valor2);
  }
  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      {/* aqui importamos el header del componente de esta forma en react */}
      <Header />

      {/* creacion del input*/}

      <div className="flex justify-between my-6">
        <Button operador="-" fn={handleClickDecremento} />

        <Button operador="+" fn={handleClickIncremento} />
      </div>
      <input
        type="range"
        className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
        onChange={handleChange}
        min={MIN}
        max={MAX}
        step={STEP}
        value={cantidad}
      />
      <p className="text-center my-10 text-5xl font-extrabold text-indigo-600">
        {formatearDinero(cantidad)}
      </p>

      <h2 className="text-2xl font-extrabold text-gray-500 text-center">
        Elige un <span className="text-indigo-600">Plazo</span> a pagar
      </h2>

      <select
        className="mt-5 w-full p-2 bg-white border border-gray-300 rounded-lg text-center
      text-xl font-bold text-gray-500"
        value={meses}
        onChange={(e) => setMeses(+e.target.value)}
      >
        <option value="6">6 Meses</option>
        <option value="12">12 Meses</option>
        <option value="24">24 Meses</option>
      </select>

      <div className="my-5 space-y-3 bg-gray-50 p-5">
        <h2 className="text-2xl font-extrabold text-gray-500 text-center">
          Resumen <span className="text-indigo-600">de pagos</span>
        </h2>

        <p className="text-xl text-gray-500 text-center font-bold">
          {meses}Meses
        </p>
        <p className="text-xl text-gray-500 text-center font-bold">
          {formatearDinero(total)}Total a pagar
        </p>
        <p className="text-xl text-gray-500 text-center font-bold">
          {formatearDinero(pago)}Mensuales
        </p>
        <br />
        <br />
        <br />
        <footer className="text-center text-gray-500 font-extrabold">
          Todos los Derechos reservados@2023 <br />
          <span className="text-indigo-600">Ing</span> Raul Santiago
        </footer>
      </div>
      {/* aqui podemos leer la variable en pantalla  */}

      {/*{hola} */}

      {/*este h1 tambien lo puedes llevar al componente para tener el codigo mas limpio y reutilizable */}
    </div>
  );
}

export default App;
