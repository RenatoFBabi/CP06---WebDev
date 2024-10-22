// melhorar a importação de imagens e otimizar o código.

//import ProgressiveWebApps from '../../imgs/Progressive Web Apps.png'
//import Sass from '../../imgs/Sass.png'
//import TurbineSeuCSS from '../../imgs/Turbine seu CSS.png'
//
//export const livros = [
//    {nome: 'Progressive Web Apps', id: 9, src: ProgressiveWebApps},
//    {nome: 'Sass', id: 10, src: Sass},
//    {nome: 'Turbine seu CSS', id: 11, src: TurbineSeuCSS},
//]

import axios from 'axios'

function dadosUltimosLancamentos(){
    const [id, imagem, titulo, resumo, setLivro] = useState([]);
    useEffect(() =>{
        axios.get('https://raw.githubusercontent.com/prof-lucassilva/api-books/main/livros.json')
        .then(response => setLivro(response.id, response.titulo, response.imagem, response.resumo));
    },[]);
    
    return(
        <div>
            {id.map(item =>{
                <p>{item.name}</p>
            })}
        </div>
    );
}
export default dadosUltimosLancamentos;