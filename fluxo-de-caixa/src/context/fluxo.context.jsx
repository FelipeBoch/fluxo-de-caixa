import { createContext, useState, useMemo } from "react";

export const FluxoContext = createContext({
  saldo: 0,
  setSaldo: () => null,
  movimentacoes: {},
  setMovimentacoes: () => null,
});

export const FluxoProvider = ({ children }) => {
  const [saldo, setSaldo] = useState(0);

  const [movimentacoes, setMovimentacoes] = useState([
    {
      id: null,
      situacao: null,
      tempoChegadaMotorista: null,
      tempoEstimado: null,
      valorEstimado: null,
      valor: null,
      notaPassageiro: null,
      notaMotorista: null,
    },
  ]);

  const contextValue = useMemo(
    () => ({
      saldo,
      setSaldo,
      movimentacoes,
      setMovimentacoes,
    }),
    [saldo, setSaldo, movimentacoes, setMovimentacoes]
  );
  return (
    <FluxoContext.Provider value={contextValue}>
      {children}
    </FluxoContext.Provider>
  );
};
