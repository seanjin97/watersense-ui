import React, {useState, useEffect} from 'react';
import Overview from '../components/Overview/Overview';
import Goals from '../components/Overview/Goals';





function MonthlyOverview() {
	const [data, setData] = useState({});
	const getData = async() => {
		const response = await fetch
		('https://watersense-api-watersense-seanjin97.cloud.okteto.net/analytics/overview/test1')

		setData(await response.json())
	}

	
	
	useEffect(() => {
		getData()
	  },[]);
	return (
		<div className="App" id='main'>
			
			<div>
				<Overview data = {data}/>
				<br></br>
				<Goals/>
			</div>
	

			
		</div>
	);
}

export default MonthlyOverview;
