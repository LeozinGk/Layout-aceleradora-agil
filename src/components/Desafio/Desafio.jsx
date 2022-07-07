import { useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import './desafio.styles.css'

const Desafio = () => {

    const [name, setName] = useState('')

    const [nota1, setNota1] = useState('')

    const [nota2, setNota2] = useState('')

    const [frequencia, setFrequencia] = useState('')

    const [table, setTable] = useState([])


    function handleCreateStudent() {

        const aluno = {
            id: Math.random(),
            name: name,
            nota1: Number(nota1),
            nota2: Number(nota2),
            notatotal: (Number(nota1)+Number(nota2))/2,
            frequencia: frequencia
        }

        if ((Number(nota1)+Number(nota2))/2 >= 6) {
            let infoaprovacao = document.getElementById('infoalunos')

            infoaprovacao.style.backgroundColor='red'
        }

        setTable([...table, aluno])
        setName('')
        setNota1('')
        setNota2('')
        setFrequencia('')
    }


    return (
        <section className='desafioalunos'>
            <header>
                <h1>Dados do aluno:</h1>

                <div className='input-container'>
                    <input
                        type='text'
                        placeholder='Name'
                        onChange={e => setName(e.target.value)}
                        value={name}
                    />
                    <input
                        type='number'
                        placeholder='Nota do primeiro semestre'
                        onChange={e => setNota1(e.target.value)}
                        value={nota1}
                    />
                    <input
                        type='number'
                        placeholder='Nota do segundo semestre'
                        onChange={e => setNota2(e.target.value)}
                        value={nota2}
                    />
                    <input
                        type='number'
                        placeholder='Frequência'
                        onChange={e => setFrequencia(e.target.value)}
                        value={frequencia}
                    />

                    <button className='add-aluno'
                    onClick={handleCreateStudent}>
                        Adicionar aluno
                        <FiPlus size={16} color='#fff' />
                    </button>
                </div>
            </header>

            <main>
                    <table>
                        <tr id='infoalunos'>
                            <td className='partedecimatable'>Nome</td>
                            <td className='partedecimatable'>1° Semestre</td>
                            <td className='partedecimatable'>2° Semestre</td>
                            <td className='partedecimatable'>Notal Final</td>
                            <td className='partedecimatable'>Frequência</td>
                        </tr>
                        {table.map(aluno =>
                            <tr>
                                <td>{aluno.name} </td>
                                <td>{aluno.nota1}</td>
                                <td>{aluno.nota2}</td>
                                <td>{aluno.notatotal}</td>
                                <td>{aluno.frequencia + '%'}</td>
                            </tr>
                        )}
                    </table>
            </main>
        </section >
    )
}

export default Desafio