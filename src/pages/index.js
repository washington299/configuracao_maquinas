import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap"></link>
        <title>Ficha referencial de preparação e regulagem extrusora tarugos</title>
      </Head>

      <h1>Ficha referencial de preparação e regulagem extrusora tarugos</h1>

      <div className="extrusora-n">
          <label htmlFor="extrusora_n">Extrusora nº:</label>
          <input type="number" id="extrusora_n" />
      </div>

      <hr />

      <div className="diametro-externo">
          <label htmlFor="diametro_externo">Diâmetro externo <span>(mm)</span>:</label>
          <br />
          <input type="number" id="diametro_externo" />
      </div>

      <div className="material">
          <label>Material:</label>
          <br/>
          <div className="material__container">
              <div className="material__type">
                  <input type="checkbox" id="PPN" />
                  <label htmlFor="PPN">PPN</label>
              </div>
              <div className="material__type">
                  <input type="checkbox" id="PPP" />
                  <label htmlFor="PPP">PPP</label>
              </div>
              <div className="material__type">
                  <input type="checkbox" id="PPZ" />
                  <label htmlFor="PPZ">PPZ</label>
              </div>
              <div className="material__type">
                  <input type="checkbox" id="PEADN" />
                  <label htmlFor="PEADN">PEADN</label>
              </div>
              <div className="material__type">
                  <input type="checkbox" id="PEADP" />
                  <label htmlFor="PEADP">PEADP</label>
              </div>
              <div className="material__type">
                  <input type="checkbox" id="OUTROS" />
                  <label htmlFor="OUTROS">OUTROS</label>
              </div>
          </div>
      </div>

      <hr />

      <div className="temperaturas">
          <label>Temperaturas <span>(°c)</span></label>
          <br />
          <br />
          <div className="zona">
              <label htmlFor="zona-1" className="zona__label">zona-1</label>
              <input type="text" className="zona__input" id="zona-1" />
          </div>
          <div className="zona">
              <label htmlFor="zona-2" className="zona__label">zona-2</label>
              <input type="text" className="zona__input" id="zona-2" />
          </div>
          <div className="zona">
              <label htmlFor="zona-3" className="zona__label">zona-3</label>
              <input type="text" className="zona__input" id="zona-3" />
          </div>
          <div className="zona">
              <label htmlFor="zona-4" className="zona__label">zona-4</label>
              <input type="text" className="zona__input" id="zona-4" />
          </div>
          <div className="zona">
              <label htmlFor="zona-5" className="zona__label">zona-5</label>
              <input type="text" className="zona__input" id="zona-5" />
          </div>
          <div className="zona">
              <label htmlFor="zona-6" className="zona__label">zona-6</label>
              <input type="text" className="zona__input" id="zona-6" />
          </div>
      </div>

      <hr />

      <div className="controle-de-processo">
          <label>Controle de processo</label>
          <br />
          <br />
          <div className="controle">
              <label htmlFor="velocidade_da_rosca" className="controle__label">velocidade da rosca &nbsp;<span>(rpm)</span></label>
              <input type="text" className="controle__input" id="velocidade_da_rosca" />
          </div>
          <div className="controle">
              <label htmlFor="amperagem_da_rosca" className="controle__label">amperagem da rosca &nbsp;<span>(A)</span></label>
              <input type="text" className="controle__input" id="amperagem_da_rosca" />
          </div>
          <div className="controle">
              <label htmlFor="pressao_do_material" className="controle__label">pressão do material na saída da rosca &nbsp;<span>(bar)</span></label>
              <input type="text" className="controle__input" id="pressao_do_material" />
          </div>
          <div className="controle">
              <label htmlFor="pressao_do_freio" className="controle__label">pressão do freio &nbsp;<span>(bar)</span></label>
              <input type="text" className="controle__input" id="pressao_do_freio" />
          </div>
          <div className="controle">
              <label htmlFor="temperatura_da_agua" className="controle__label">temperatura da água &nbsp;<span>(°c)</span></label>
              <input type="text" className="controle__input" id="temperatura_da_agua" />
          </div>
          <div className="controle">
              <label htmlFor="producao" className="controle__label">produção &nbsp;<span>(kg/hora)</span></label>
              <input type="text" className="controle__input" id="producao" />
          </div>
      </div>
    </div>
  )
}
