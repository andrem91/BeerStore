import Origem from './Origem'
import { useState, useEffect} from 'react'

function Origens() {

    const [origens, setOrigens] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await fetch("http://localhost/FullStackProject/full-stack-project/src/database/api/origem.php")
            const dados = await request.json()
            setOrigens(dados)
        }
        fetchData()
    }, [])

    return(
            <>
            {origens && origens.map(item => <Origem key={item.id_origem} origem={item.origem} />)}
            </>
    )
}

    export default Origens