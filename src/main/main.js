import Counter from './Counter';
import img from './img/tite.jpg';
import css from './css/main.css';
function Main() {
    console.log('Bienvenido')
  return (
    <div className="main-container">
        
        <Counter datos={['Cruz', '20960', '5A']}/>
        <img src={img}  className="main-image" alt="guts"/>

    </div>
  )
}

export default Main