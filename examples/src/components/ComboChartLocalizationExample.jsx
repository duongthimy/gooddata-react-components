// (C) 2007-2020 GoodData Corporation
import React, { Component } from "react";
import { ComboChart, Model } from "@gooddata/react-components";

import "@gooddata/react-components/styles/css/main.css";

import {
    projectId,
    franchiseFeesAdRoyaltyIdentifier,
    franchiseFeesInitialFranchiseFeeIdentifier,
    locationResortIdentifier,
} from "../utils/fixtures";

const columnMeasures = [
    Model.measure(franchiseFeesInitialFranchiseFeeIdentifier)
        .format("#,##0")
        .localIdentifier("franchiseFeesInitialFranchiseFeeIdentifier"),
];

const lineMeasures = [
    Model.measure(franchiseFeesAdRoyaltyIdentifier)
        .format("#,##0")
        .localIdentifier("franchiseFeesAdRoyaltyIdentifier"),
];

const locationResort = Model.attribute(locationResortIdentifier).localIdentifier("location_resort");

export class ComboChartLocalizationExample extends Component {
    onLoadingChanged(...params) {
        // eslint-disable-next-line no-console
        return console.log("ComboChartLocalizationExample onLoadingChanged", ...params);
    }

    onError(...params) {
        // eslint-disable-next-line no-console
        return console.log("ComboChartLocalizationExample onError", ...params);
    }

    render() {
        return (
            <div style={{ height: 300 }} className="s-combo-chart">
                <ComboChart
                    projectId={projectId}
                    primaryMeasures={columnMeasures}
                    secondaryMeasures={lineMeasures}
                    viewBy={locationResort}
                    onLoadingChanged={this.onLoadingChanged}
                    onError={this.onError}
                    locale="es-ES" // de-DE, es-ES, fr-FR, ja-JP, nl-NL, pt-BR, pt-PT, zh-Hans
                />
            </div>
        );
    }
}

export default ComboChartLocalizationExample;
