// (C) 2007-2020 GoodData Corporation

import React, { Component } from "react";
import { ColumnChart, Model } from "@gooddata/react-components";

import "@gooddata/react-components/styles/css/main.css";

import {
    totalSalesIdentifier,
    quarterDateIdentifier,
    yearDateDataSetAttributeIdentifier,
    projectId,
} from "../utils/fixtures";

const measures = [
    Model.popMeasure("totalSales", yearDateDataSetAttributeIdentifier).alias("$ Total Sales - SP year ago"),
    Model.measure(totalSalesIdentifier)
        .localIdentifier("totalSales")
        .alias("$ Total Sales"),
];
const attribute = Model.attribute(quarterDateIdentifier);

export class SamePeriodColumnChartLocalizationExample extends Component {
    onLoadingChanged(...params) {
        // eslint-disable-next-line no-console
        return console.log("SamePeriodColumnChartLocalizationExample onLoadingChanged", ...params);
    }

    onError(...params) {
        // eslint-disable-next-line no-console
        return console.log("SamePeriodColumnChartLocalizationExample onError", ...params);
    }

    render() {
        return (
            <div style={{ height: 300 }} className="s-column-chart">
                <ColumnChart
                    projectId={projectId}
                    measures={measures}
                    viewBy={attribute}
                    onLoadingChanged={this.onLoadingChanged}
                    onError={this.onError}
                    locale="de-DE" // de-DE, es-ES, fr-FR, ja-JP, nl-NL, pt-BR, pt-PT, zh-Hans
                />
            </div>
        );
    }
}

export default SamePeriodColumnChartLocalizationExample;
