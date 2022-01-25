import "./Chart.css"
import ChartBars from "./ChartBars" 

const Chart = ({dataPoints}) =>{

    const dataPointValues = dataPoints.map((e)=> e.value);
    const totalMaximum = Math.max(...dataPointValues);

    return(
        <div className="chart">
            {dataPoints.map((e)=> 
                <ChartBars
                    key={e.label}
                    value={e.value} 
                    maxValue={totalMaximum}  
                    label={e.label}
                />       
            )}

        </div>

    )
}

export default Chart;