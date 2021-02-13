import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';

import { Title, Label, Input, SmallText } from '../../../styles/globalElements';
import Container, {
  Extrusora,
  Diametro,
  Material,
  Temperatura,
  Controle,
  ZonaLabel,
  ZonaInput,
  ControleLabel,
  ControleInput,
  SaveButton,
} from './styles';

const Machine = () => {
  const { query } = useRouter();
  const { id } = query;

  const [extrusora, setExtrusora] = useState('');
  const [diametro, setDiametro] = useState('');
  const [materialCheck, setMaterialCheck] = useState('');
  const [zona1, setZona1] = useState('');
  const [zona2, setZona2] = useState('');
  const [zona3, setZona3] = useState('');
  const [zona4, setZona4] = useState('');
  const [zona5, setZona5] = useState('');
  const [zona6, setZona6] = useState('');
  const [velocidade_da_rosca, setVelocidade_da_rosca] = useState('');
  const [amperagem_da_rosca, setAmperagem_da_rosca] = useState('');
  const [pressao_do_material, setPressao_do_material] = useState('');
  const [pressao_do_freio, setPressao_do_freio] = useState('');
  const [temperatura_da_agua, setTemperatura_da_agua] = useState('');
  const [producao, setProducao] = useState('');

  useEffect(() => {
    let data = localStorage.getItem(`machine ${id}`);

    if (data) {
      data = JSON.parse(data);
    } else {
      data = '';
    }

    setExtrusora(data.extrusora);
    setDiametro(data.diametro);
    setMaterialCheck(data.materialCheck);
    setZona1(data.zona1);
    setZona2(data.zona2);
    setZona3(data.zona3);
    setZona4(data.zona4);
    setZona5(data.zona5);
    setZona6(data.zona6);
    setVelocidade_da_rosca(data.velocidade_da_rosca);
    setAmperagem_da_rosca(data.amperagem_da_rosca);
    setPressao_do_material(data.pressao_do_material);
    setPressao_do_freio(data.pressao_do_freio);
    setTemperatura_da_agua(data.temperatura_da_agua);
    setProducao(data.producao);
  }, []);

  const handleClick = () => {
    localStorage.setItem(`machine ${id}`, JSON.stringify({
      extrusora,
      diametro,
      zona1,
      zona2,
      zona3,
      zona4,
      zona5,
      zona6,
      velocidade_da_rosca,
      amperagem_da_rosca,
      pressao_do_material,
      pressao_do_freio,
      temperatura_da_agua,
      producao,
    }));
  };

  return (
    <Container>
    <Title>Máquina {id}</Title>
    <Extrusora>
        <Label htmlFor="extrusora_n">Extrusora nº:</Label>
        <Input
          type="number"
          id="extrusora_n"
          value={extrusora}
          onChange={(e) => setExtrusora(e.target.value)}
        />
    </Extrusora>

    <hr />

    <Diametro>
        <Label htmlFor="diametro_externo">Diâmetro externo <SmallText>(mm)</SmallText>:</Label>
        <br />
        <Input
          type="number"
          id="diametro_externo"
          value={diametro}
          onChange={(e) => setDiametro(e.target.value)}
        />
    </Diametro>
    <div>
      <Label>Material:</Label>

      <br/>

      <Material className="material__container">
          <div className="material__type">
              <Input
                type="checkbox"
                checked={materialCheck === 'PPN'}
                id="PPN"
                name="ppn"
                defaultValue="PPN"
                onChange={() => setMaterialCheck('PPN')}
              />
              <Label htmlFor="PPN">PPN</Label>
          </div>
          <div className="material__type">
              <Input
                type="checkbox"
                checked={materialCheck === 'PPP'}
                id="PPP"
                name="ppp"
                defaultValue="PPP"
                onClick={() => setMaterialCheck('PPP')}
              />
              <Label htmlFor="PPP">PPP</Label>
          </div>
          <div className="material__type">
              <Input
                type="checkbox"
                checked={materialCheck === 'PPZ'}
                id="PPZ"
                name="ppz"
                defaultValue="PPZ"
                onClick={() => setMaterialCheck('PPZ')}
              />
              <Label htmlFor="PPZ">PPZ</Label>
          </div>
          <div className="material__type">
              <Input
                type="checkbox"
                checked={materialCheck === 'PEADN'}
                id="PEADN"
                name="peadn"
                defaultValue="PEADN"
                onClick={() => setMaterialCheck('PEADN')}
              />
              <Label htmlFor="PEADN">PEADN</Label>
          </div>
          <div className="material__type">
              <Input
                type="checkbox"
                checked={materialCheck === 'PEADP'}
                id="PEADP"
                name="peadp"
                defaultValue="PEADP"
                onClick={() => setMaterialCheck('PEADP')}
              />
              <Label htmlFor="PEADP">PEADP</Label>
          </div>
          <div className="material__type">
              <Input
                type="checkbox"
                checked={materialCheck === 'OUTROS'}
                d="OUTROS"
                name="outros"
                defaultValue="OUTROS"
                onClick={() => setMaterialCheck('OUTROS')}
              />
              <Label htmlFor="OUTROS">OUTROS</Label>
          </div>
      </Material>
    </div>

    <hr />

    <Temperatura>
      <Label>Temperaturas <SmallText>(°c)</SmallText></Label>
      <br />
      <br />
      <div className="zona">
          <ZonaLabel htmlFor="zona-1">zona-1</ZonaLabel>
          <ZonaInput type="text" id="zona-1" value={zona1} onChange={(e) => setZona1(e.target.value)} />
      </div>
      <div className="zona">
          <ZonaLabel htmlFor="zona-2">zona-2</ZonaLabel>
          <ZonaInput type="text" id="zona-2" value={zona2} onChange={(e) => setZona2(e.target.value)} />
      </div>
      <div className="zona">
          <ZonaLabel htmlFor="zona-3">zona-3</ZonaLabel>
          <ZonaInput type="text" id="zona-3" value={zona3} onChange={(e) => setZona3(e.target.value)} />
      </div>
      <div className="zona">
          <ZonaLabel htmlFor="zona-4">zona-4</ZonaLabel>
          <ZonaInput type="text" id="zona-4" value={zona4} onChange={(e) => setZona4(e.target.value)} />
      </div>
      <div className="zona">
          <ZonaLabel htmlFor="zona-5">zona-5</ZonaLabel>
          <ZonaInput type="text" id="zona-5" value={zona5} onChange={(e) => setZona5(e.target.value)} />
      </div>
      <div className="zona">
          <ZonaLabel htmlFor="zona-6">zona-6</ZonaLabel>
          <ZonaInput type="text" id="zona-6" value={zona6} onChange={(e) => setZona6(e.target.value)} />
      </div>
    </Temperatura>

    <hr />

    <Controle>
      <Label>Controle de processo</Label>

      <br />
      <br />

      <div className="controle">
        <ControleLabel htmlFor="velocidade_da_rosca">velocidade da rosca &nbsp;<SmallText>(rpm)</SmallText></ControleLabel>
        <ControleInput
          type="text"
          id="velocidade_da_rosca"
          value={velocidade_da_rosca}
          onChange={(e) => setVelocidade_da_rosca(e.target.value)}
        />
      </div>
      <div className="controle">
        <ControleLabel htmlFor="amperagem_da_rosca">amperagem da rosca &nbsp;<SmallText>(A)</SmallText></ControleLabel>
        <ControleInput
          type="text"
          id="amperagem_da_rosca"
          value={amperagem_da_rosca}
          onChange={(e) => setAmperagem_da_rosca(e.target.value)}
        />
      </div>
      <div className="controle">
        <ControleLabel htmlFor="pressao_do_material">pressão do material na saída da rosca &nbsp;<SmallText>(bar)</SmallText></ControleLabel>
        <ControleInput
          type="text"
          id="pressao_do_material"
          value={pressao_do_material}
          onChange={(e) => setPressao_do_material(e.target.value)}
        />
      </div>
      <div className="controle">
        <ControleLabel htmlFor="pressao_do_freio">pressão do freio &nbsp;<SmallText>(bar)</SmallText></ControleLabel>
        <ControleInput
          type="text"
          id="pressao_do_freio"
          value={pressao_do_freio}
          onChange={(e) => setPressao_do_freio(e.target.value)}
        />
      </div>
      <div className="controle">
        <ControleLabel htmlFor="temperatura_da_agua">temperatura da água &nbsp;<SmallText>(°c)</SmallText></ControleLabel>
        <ControleInput
          type="text"
          id="temperatura_da_agua"
          value={temperatura_da_agua}
          onChange={(e) => setTemperatura_da_agua(e.target.value)}
        />
      </div>
      <div className="controle">
        <ControleLabel htmlFor="producao">produção &nbsp;<SmallText>(kg/hora)</SmallText></ControleLabel>
        <ControleInput
          type="text"
          id="producao"
          value={producao}
          onChange={(e) => setProducao(e.target.value)}
        />
      </div>
    </Controle>

    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Link href="/">
        <SaveButton onClick={handleClick}>Salvar</SaveButton>
      </Link>
    </div>
  </Container>
  )
}

export default Machine