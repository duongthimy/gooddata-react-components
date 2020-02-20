// (C) 2007-2020 GoodData Corporation
import React from "react";

import ExampleWithSource from "../components/utils/ExampleWithSource";
import BarChartExportExample from "../components/BarChartExportExample";
import TableExportExample from "../components/TableExportExample";
import PivotTableExportExample from "../components/PivotTableExportExample";
import VisualizationColumnChartExportExample from "../components/VisualizationColumnChartExportExample";
import HeadlineExportExample from "../components/HeadlineExportExample";
import MVFExportExample from "../components/MVFExportExample";
import MVFExportRangeExample from "../components/MVFExportRangeExample";

import BarChartExportExampleSRC from "!raw-loader!../components/BarChartExportExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import TableExportExampleSRC from "!raw-loader!../components/TableExportExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import PivotTableExportExampleSRC from "!raw-loader!../components/PivotTableExportExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import VisualizationColumnChartExportExampleSRC from "!raw-loader!../components/VisualizationColumnChartExportExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import HeadlineExportExampleSRC from "!raw-loader!../components/HeadlineExportExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import MVFExportExampleSRC from "!raw-loader!../components/MVFExportExample";
import MVFExportRangeExampleSRC from "!raw-loader!../components/MVFExportRangeExample";

export const Export = () => (
    <div>
        <h1>Export</h1>
        <p>
            These examples show how to export data for components like
            <code>ColumnChart, Table/Pivot Table or Visualization</code>.
        </p>

        <hr className="separator" />

        <h2>Export Chart Data</h2>
        <ExampleWithSource for={BarChartExportExample} source={BarChartExportExampleSRC} />

        <hr className="separator" />

        <h2>Export Table Data</h2>
        <ExampleWithSource for={TableExportExample} source={TableExportExampleSRC} />

        <hr className="separator" />

        <h2>Export Pivot Table Data</h2>
        <ExampleWithSource for={PivotTableExportExample} source={PivotTableExportExampleSRC} />

        <hr className="separator" />

        <h2>Export Visualization Data</h2>
        <ExampleWithSource
            for={VisualizationColumnChartExportExample}
            source={VisualizationColumnChartExportExampleSRC}
        />

        <hr className="separator" />

        <h2>Export Headline Data</h2>
        <ExampleWithSource for={HeadlineExportExample} source={HeadlineExportExampleSRC} />

        <hr className="separator" />

        <h2>Export Measure Value Filter</h2>
        <h3>Comparison operator</h3>
        <ExampleWithSource for={MVFExportExample} source={MVFExportExampleSRC} />

        <hr className="separator" />

        <h3>Range operator</h3>
        <ExampleWithSource for={MVFExportRangeExample} source={MVFExportRangeExampleSRC} />
    </div>
);

export default Export;
