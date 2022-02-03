import httpConfig from "./httpConfig.util";

async function getOrigensDenuncia() {
  const { data } = await httpConfig.get('/origens');

  return data;
}

async function getRegistros() {
  const { data } = await httpConfig.get('/registros');

  return data;
}

async function createRegistro(params) {
  const { data } = await httpConfig.post(params, '/registros');

  return data;
}

const registroBOService = {
  getOrigensDenuncia,
  getRegistros,
  createRegistro,
}

export default registroBOService;
