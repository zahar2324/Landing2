import '../Main/Main.scss'
import Benefits from './Benefits/Benefits'
import Gellery from './Gellery/Gellery'
import Question from './Question/Question'
import Tariffs from './Tariffs/Tariffs'
const Main: React.FC = () =>{
    return(
        <>
        <main className="main">
        <Benefits/>
         <Gellery/>
        <Tariffs/>
        <Question/>
        
        </main>
        </>
    )
}
export default Main