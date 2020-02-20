// (C) 2007-2020 GoodData Corporation
import React, { Component } from "react";
import { BarChart, Model } from "@gooddata/react-components";

import "@gooddata/react-components/styles/css/main.css";

import ExampleWithExport from "./utils/ExampleWithExport";
import {
    dateDataSetUri,
    locationResortIdentifier,
    projectId,
    totalSalesIdentifier,
    franchisedSalesIdentifier,
    locationNameDisplayFormIdentifier,
} from "../utils/fixtures";

const measures = [
    Model.measure(franchisedSalesIdentifier)
        .format("#,##0")
        .localIdentifier("franchiseSales")
        .title("Franchise Sales"),
];

const attributes = [Model.attribute(locationNameDisplayFormIdentifier).localIdentifier("locationName")];
const betweenFilter = Model.measureValueFilter("franchiseSales").condition("BETWEEN", {
    from: 5000000,
    to: 8000000,
});

export class MVFExportRangeExample extends Component {
    onLoadingChanged(...params) {
        // eslint-disable-next-line no-console
        console.info("MVFExportExample onLoadingChanged", ...params);
    }

    onError(...params) {
        // eslint-disable-next-line no-console
        console.info("MVFExportExample onLoadingChanged", ...params);
    }

    render() {
        return (
            <ExampleWithExport>
                {onExportReady => (
                    <div style={{ height: 300 }} className="s-bar-chart">
                        <BarChart
                            projectId={projectId}
                            measures={measures}
                            viewBy={attributes}
                            filters={[betweenFilter]}
                            onExportReady={onExportReady}
                            onLoadingChanged={this.onLoadingChanged}
                            onError={this.onError}
                        />
                    </div>
                )}
            </ExampleWithExport>
        );
    }
}

export default MVFExportRangeExample;
