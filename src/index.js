import React from 'react'
import ReactDom from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'

import { Pedido } from './components/Produto'
import { Cartao } from './components/Cartao';
import { FeedBack } from './components/Feedback'


const App = () => {

    const textoOk = "Já chegou";
    const textoNOk = "Não chegou";
    const funcaoOk = () => alert("Agradecemos a confirmação");
    const funcaoNOk = () => alert("Vamos verificar o ocorrido");
    const feedback = <FeedBack
        textoOk={textoOk}
        textoNOk={textoNOk}
        funcaoOk={funcaoOk}
        funcaoNok={funcaoNOk}
    />
    return (
        <div className='container border rounded mt-2'>
            <div className='row border-bottom m-2'>
                <h1 className='display-5 text-center'>Seus pedidos</h1>
            </div>

            <div className="row">
                <div className="col-sm-12 col-md-6 my-2">
                    {/*Entrada do primeiro pedido*/}
                    <Cartao cabecalho="22/04/2021">
                        <Pedido
                            icone="fa-solid fa-hdd fa-2x"
                            titulo="Kingston"
                            descricao="SSD Kingston A400 - SATA" />
                        {feedback}
                    </Cartao>
                </div>
                <div className="col-sm-12 col-md-6 my-2">
                    {/*Entrada do segundo pedido*/}
                    <Cartao cabecalho="20/08/2022">
                        <Pedido
                            icone="fa-solid fa-book fa-2x"
                            titulo="Livro"
                            descricao="Concrete Mathematics - Donald Knuth" />
                        {feedback}
                    </Cartao>
                </div>
                <div className="col-sm-12 col-md-6 my-2">
                    {/*Entrada do terceiro pedido*/}
                    <Cartao cabecalho="21/08/2022">
                        <Pedido
                            data='21/08/2022'
                            icone="fa-solid fa-laptop fa-2x"
                            titulo="Notebook"
                            descricao="Notebook Dell- 8Gb - i5" />
                        {feedback}
                    </Cartao>
                </div>
            </div>

        </div>

    )
}
ReactDom.createRoot(document.querySelector("#root")).render(<App />);