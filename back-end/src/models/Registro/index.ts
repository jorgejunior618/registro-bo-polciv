type Registro = {
  origemDenunciaId: number,
  numeroOficio: string | undefined | null,
  orgao: string | undefined | null,
  arquivo: string | undefined | null,
  dataInicioAcontecimentos: string,
  delegado: string,
  delegacia: string,
  restricaoDados: boolean,
};

export default Registro;
