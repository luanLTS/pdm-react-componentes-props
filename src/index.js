import React from 'react'
import ReactDom from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'


const App = () => {
    return (
        <div className='container border rounded mt-2'>
            <div className='row border-bottom m-2'>
                <h1 className='display-5 text-center'>Seus pedidos</h1>
            </div>

            
        </div>
        
    )
}




ReactDom.createRoot(document.querySelector("#root")).render(<App/>);