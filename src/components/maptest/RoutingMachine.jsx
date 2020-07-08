import 'leaflet-routing-machine';
import L from 'leaflet';
import { MapLayer, withLeaflet } from 'react-leaflet';


class RoutingMachine extends MapLayer {

    createLeafletElement() {

        const { map } = this.props;

        let leafletElement = L.Routing.control({


            waypoints: [

                L.latLng(50.64, 3.062), //cathedrale de la treille
                L.latLng(50.63297, 3.05858),   // maison du general Degaulle  
                L.latLng(50.6334152, 3.0208), // euratechnologies
                //L.latLng(50.637638092041016, 3.065408706665039) // opera de lille 

            ],

            routeWhileDragging: true

        }).addTo(map.leafletElement);

        return leafletElement.getPlan();

    }

}
export default withLeaflet(RoutingMachine);

