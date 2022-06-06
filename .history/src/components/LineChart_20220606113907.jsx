import React from "react";
import {
  LinePrimaryXAxis,
  LinePrimaryYAxis,
  lineCustomSeries
} from "../data/rwanda";
import {
  ChartComponent,
  LineSeries,
  Inject,
  DateTime,
  Legend,
  Tooltip,
  SeriesCollectionDirective,
  SeriesDirective
} from "@syncfusion/ej2-react-charts";

const LineChart = () => {
  return (
    <ChartComponent
      id="line-chart"
      height="420px"
      primaryXAxis={LinePrimaryXAxis}
      LinePrimaryYAxis={LinePrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background="#ffff"
    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default LineChart;
