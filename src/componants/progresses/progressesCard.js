import Progresses from './progresses'
import './progresses.scss';
import datas from "./../../datas/data.json"

function ProgressesCard(props) {
    var rand = Math.floor(Math.random()*datas.cities.length);
    var rCity = datas.cities[rand];
    return(
        <div className="card mb-3 shadow">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={rCity.img} className="card-img" alt={rCity.name}/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Qualité d'air extérieur aléatoire</h5>
              <Progresses width = {rCity.global} name = {rCity.name} successLimit = {66} dangerLimit = {33} invers={true}/>
              <Progresses width = {rCity.CO2} name = "CO2" successLimit = {33} dangerLimit = {66}/>
              <Progresses width = {rCity['Pression de l\'air']} name = "Pression de l'air" successLimit = {33} dangerLimit = {66}/>
              <Progresses width = {rCity['Taux d\'humidité']} name = "Taux d'humidité" successLimit = {33} dangerLimit = {66}/>
              <p>Température : {rCity.Température}</p>
            </div>
          </div>
        </div>
      </div>
               );
}
export default ProgressesCard;