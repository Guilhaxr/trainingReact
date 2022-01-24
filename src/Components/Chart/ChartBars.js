

const ChartBars = ({label, max, maxValue, value}) =>{
    let barFillHeight = "0%";

    if(max > 0){
        barFillHeight =  Math.round((maxValue / value) * 100) + "%";
    }

    return(
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height: barFillHeight }}></div>
            </div>
                <div className="chart-bar__label">{label}</div>
        </div>

    )
}

export default ChartBars;