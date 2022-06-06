import React from "react";
import { LinePrimaryXAxis, LinePrimaryYAxis } from "../data/rwanda";
import {
  ChartComponent,
  LineSeries,
  Inject,
  DateTime,
  Legend,
  Tooltip,
  SeriesCollectionDirective,
  SeriesDirective
} from "@syncfusion/ej2/ej2-react-charts";
import { LinePrimaryXAxis } from "../data/rwanda";

const LineChart = () => {
  return (
    <ChartComponent
      id="line-chart"
      height="420px"
      primaryXAxis={LinePrimaryXAxis}
    >
      <Inject></Inject>
    </ChartComponent>
  );
};

export default LineChart;
