import "./Chart.css"
import ChartBars from "./ChartBars"

const Chart = () =>{

    return(
        <div className="chart">
            {dataPoints.map((element, i)=> 
                <ChartBars
                    key={i}
                    value={dataPoints.value} 
                    MaxValue={null}  
                    label={dataPoints.label}
                />       
            )}

        </div>

    )
}

export default Chart;