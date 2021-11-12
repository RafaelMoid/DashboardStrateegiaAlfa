
import "./chartJourneyHorizontal.css";

const ProgressH = ({ done }) => (
    <div className="progressH">
        <div className="progress-doneH" style={{
            opacity:1,
            width: `${done}%`
        }}>
            <p className="progressTxtH">{done}%</p>
        </div>
    </div> 
);

const ProgressH2 = ({ done }) => (
<div className="progressH">
    <div className="progress-doneH2" style={{
        opacity:1,
        width: `${done}%`
    }}>
        <p className="progressTxtH">{done}%</p>
    </div>
</div> 
);

const ProgressH3 = ({ done }) => (
<div className="progressH">
    <div className="progress-doneH3" style={{
        opacity:1,
        width: `${done}%`
    }}>
        <p className="progressTxtH">{done}%</p>
    </div>
</div> 
);

const ProgressH4 = ({ done }) => (
<div className="progressH">
    <div className="progress-doneH4" style={{
        opacity:1,
        width: `${done}%`
    }}>
        <p className="progressTxtH">{done}%</p>
    </div>
    
</div> 
);

const ChartJourHori = () => {
    return (
        <div className="chartJourHoriWrapper">
            <ProgressH done="70"/>
            <ProgressH2 done="25"/>
            <ProgressH3 done="23"/>
            <ProgressH4 done="44"/>
        </div>
    )
}

export default ChartJourHori;