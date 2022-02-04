import httpConfig from "./httpConfig.util";

async function getOrigensDenuncia() {
  const { data } = await httpConfig.get('/origens');

  return data;
}

async function getNomes() {
  const { data } = await httpConfig.get('/nomes', '3004');

  return data;
}

async function getRegistros() {
  const { data } = await httpConfig.get('/registros');

  return data;
}

async function createRegistro(params) {
  const formatedData = params.dataInicioAcontecimentos
    .split('/')
    .reverse()
    .join('-');
  const dataInicioAcontecimentos = 
    `${formatedData}T${params.horaInicioAcontecimentos}`;
  const arquivo = params.arquivoBase64;
  
  const body = {
    origemDenunciaId: params.origemDenunciaId,
    numeroOficio: params.numeroOficio,
    orgao: params.orgao,
    delegado: params.delegado,
    delegacia: params.delegacia,
    restricaoDados: params.restricaoDados,
    dataInicioAcontecimentos,
    arquivo,
  }
  const { data } = await httpConfig.post(body, '/registros');

  return data;
}

const registroBOService = {
  getOrigensDenuncia,
  getRegistros,
  getNomes,
  createRegistro,
}

export default registroBOService;
