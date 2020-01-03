// (C) 2007-2020 GoodData Corporation
import React, { Component } from "react";
import { BarChart, Model } from "@gooddata/react-components";

import "@gooddata/react-components/styles/css/main.css";

import {
    totalSalesIdentifier,
    locationResortIdentifier,
    projectId,
    locationNameDisplayFormIdentifier,
} from "../utils/fixtures";

const amount = Model.measure(totalSalesIdentifier)
    .format("#,##0")
    .alias("$ Total Sales");

const locationResort = Model.attribute(locationResortIdentifier);

const locationName = Model.attribute(locationNameDisplayFormIdentifier);

export class BarChartExample2 extends Component {
    onLoadingChanged(...params) {
        // eslint-disable-next-line no-console
        console.info("BarChartExample onLoadingChanged", ...params);
    }

    onError(...params) {
        // eslint-disable-next-line no-console
        console.info("BarChartExample onLoadingChanged", ...params);
    }

    render() {
        return (
            <div style={{ height: 300 }} className="s-bar-chart">
                <BarChart
                    projectId={projectId}
                    measures={[amount]}
                    viewBy={locationResort}
                    stackBy={locationName}
                    onLoadingChanged={this.onLoadingChanged}
                    onError={this.onError}
                />
            </div>
        );
    }
}

export default BarChartExample2;
