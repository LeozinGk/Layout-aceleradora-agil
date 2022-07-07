import './layout.styles.css'
import ContactForm from './Formulario'
import Desafio from '../Desafio/Desafio'

const Layout = () => {
    return (
        <>
            <div className="board">
                <div className="topo">TOPO</div>
                <div className='menusuperior'>
                    <ul>
                        <li><a href='#'>Menu1</a></li>
                        <li><a href='#'>Menu2</a></li>
                        <li><a href='#'>Menu3</a></li>
                    </ul>
                </div>
                <div className="menulateral1">
                    <ul>
                        <li><a href='#'>Menu</a></li>
                        <li><a href='#'>link</a></li>
                        <li><a href='#'>link</a></li>
                        <li><a href='#'>link</a></li>
                        <li><a href='#'>link</a></li>
                    </ul>
                </div>
                <div className="conteudo"><ContactForm /></div>
                <div className="menulateral2">COLUNA DE APOIO</div>
                <div className='rodape'>...RODAPE...</div>
            </div>
            
            <div id='desafio'>
                <Desafio />
            </div>
        </>
    )
}

export default Layout