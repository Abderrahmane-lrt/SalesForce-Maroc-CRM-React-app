import { useSelector } from "react-redux";

const OpportunitiesSelector = () => {
    const opportunities = useSelector((state) => state.opportunities);
    console.log(JSON.stringify(opportunities));
    return ( 
    <ul>
     {
        opportunities.map((element, index) => <li key={index}>{element.status}</li>)
     }
    </ul>

     );
}
 
export default OpportunitiesSelector;