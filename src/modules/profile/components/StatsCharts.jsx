import { AverangeErrorsByLevel } from "./charts-generals/AverangeErrorsByLevel";
import { AverangePointsByLevel } from "./charts-generals/AverangePointsByLevel";
import { AverangeTimeVsDate } from "./charts-generals/AverangeTimeVsDate";
import { ErrorsByLevelPie } from "./charts-generals/ErrorsByLevelPie";
import { PointsByTime } from "./charts-levels/PointsByTime";
import { TimeByDate } from "./charts-levels/TimeByDate";
import { TimeVsPoints } from "./charts-levels/TimeVsPoints";

export const StatsCharts = ({ stats, isAllLevels }) => {


    return (
        <>
            {isAllLevels ?
                <>
                    <h3 className="text-center m-3">Estadisticas generales</h3>
                    <div className="d-md-flex">
                        <AverangeErrorsByLevel stats={stats} />
                        <AverangePointsByLevel stats={stats} />
                    </div>
                    <ErrorsByLevelPie stats={stats} />
                    <AverangeTimeVsDate stats={stats} />
                </>
                :
                <>
                    <h3 className="text-center m-3">Estadisticas por nivel</h3>
                    <TimeByDate stats={stats} />
                    <PointsByTime stats={stats} />
                    <TimeVsPoints stats={stats} />
                </>
            }
        </>
    );
};