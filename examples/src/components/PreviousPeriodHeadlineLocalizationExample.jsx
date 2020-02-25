// (C) 2007-2020 GoodData Corporation

import React, { Component } from "react";
import { Headline, Model } from "@gooddata/react-components";

import "@gooddata/react-components/styles/css/main.css";

import { totalSalesIdentifier, dateDataSetUri, projectId } from "../utils/fixtures";

const primaryMeasure = Model.measure(totalSalesIdentifier)
    .localIdentifier("totalSales")
    .alias("$ Total Sales");

const secondaryMeasure = Model.previousPeriodMeasure("totalSales", [
    { dataSet: dateDataSetUri, periodsAgo: 1 },
]).alias("$ Total Sales - period ago");

const filters = [Model.relativeDateFilter(dateDataSetUri, "GDC.time.year", -2, -1)];

export class PreviousPeriodHeadlineLocalizationExample extends Component {
    onLoadingChanged(...params) {
        // eslint-disable-next-line no-console
        return console.log("PreviousPeriodHeadlineLocalizationExample onLoadingChanged", ...params);
    }

    onError(...params) {
        // eslint-disable-next-line no-console
        return console.log("PreviousPeriodHeadlineLocalizationExample onError", ...params);
    }

    render() {
        return (
            <div style={{ height: 125 }} className="s-headline">
                <Headline
                    projectId={projectId}
                    primaryMeasure={primaryMeasure}
                    secondaryMeasure={secondaryMeasure}
                    filters={filters}
                    onLoadingChanged={this.onLoadingChanged}
                    onError={this.onError}
                    locale="pt-BR" // de-DE, es-ES, fr-FR, ja-JP, nl-NL, pt-BR, pt-PT, zh-Hans
                />
            </div>
        );
    }
}

export default PreviousPeriodHeadlineLocalizationExample;
