import { useState } from 'react'
import type { Cep } from './models/cep.request'
import { NotredameApi } from './apis/notredame.api';
import type { ErrorApi } from './models/error-api.response';

function App() {

  const [cep, setCep] = useState<Cep | null>(null);
  const [cepPesquisar, setCepesquisar ] = useState<string>("");

  const onClickPesquisar = () => {
    NotredameApi.getCep(cepPesquisar)
      .then((data: Cep) => {
        setCep(data);
        console.log("State cep:" + JSON.stringify(cep));
      })
      .catch((error: ErrorApi) => {
        alert(`${error.status}: ${error.detail}`);
      });
  }

  return (
    <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center" style={{padding: '3vw 0'}}>
      <div className="container-fluid px-3 px-md-5">
        <div className="card shadow p-4 w-100 mx-auto" style={{margin: '0 auto', borderRadius: 16, maxWidth: '100%', minHeight: 400}}>
          <h2 className="mb-4 text-center">Buscar CEP</h2>
          <div className="mb-3">
            <label htmlFor="pesquisar" className="form-label">Pesquise o seu CEP!</label>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <input
                type="text"
                id="pesquisar"
                onChange={(e) => setCepesquisar(e.target.value)}
                className="form-control"
                placeholder="Digite o CEP"
                style={{ flex: 1 }}
              />
              <button
                type="button"
                className="btn btn-primary"
                onClick={onClickPesquisar}
                style={{ whiteSpace: 'nowrap' }}
              >
                Pesquisar
              </button>
            </div>
          </div>
          <div className="table-responsive">
            <table className="table table-striped table-bordered">
              <thead className="table-dark">
                <tr>
                  <th scope="col">Cep</th>
                  <th scope="col">Cidade</th>
                  <th scope="col">Bairro</th>
                  <th scope="col">Uf</th>
                  <th scope="col">Provedor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>Exemplo</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>John</td>
                  <td>Doe</td>
                  <td>@social</td>
                  <td>Exemplo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
