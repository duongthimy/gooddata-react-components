// (C) 2007-2019 GoodData Corporation
import React, { Component } from "react";
import { PivotTable, Model } from "@gooddata/react-components";

import "@gooddata/react-components/styles/css/main.css";
import {
    projectId,
    franchiseFeesIdentifier,
    franchisedSalesIdentifier,
    locationNameDisplayFormIdentifier,
} from "../utils/fixtures";

const measures = [
    Model.measure(franchiseFeesIdentifier)
        .localIdentifier("franchiseFees")
        .title("Franchise Fees")
        .format("#,##0"),
    Model.measure(franchisedSalesIdentifier)
        .localIdentifier("franchiseSales")
        .title("Franchise Sales")
        .format("#,##0"),
    Model.arithmeticMeasure(["franchiseSales", "franchiseFees"], "change")
        .localIdentifier("franchiseFeesFormattedAsPercentage")
        .title("Change formatted as %")
        .format("#,##0%"),
];

const attributes = [Model.attribute(locationNameDisplayFormIdentifier).localIdentifier("locationName")];

const greaterThanFilter = {
    measureValueFilter: {
        measure: {
            localIdentifier: "franchiseFeesFormattedAsPercentage",
        },
        condition: {
            comparison: {
                operator: "GREATER_THAN",
                value: 10, // 1000% / 100 = 10
            },
        },
    },
};

export class MeasureValueFilterExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filters: [],
        };
    }

    renderPresetButton(label, appliedFilters, isActive) {
        return (
            <button
                className={`gd-button gd-button-secondary s-filter-button ${isActive ? "is-active" : ""}`}
                onClick={() =>
                    this.setState({
                        filters: appliedFilters,
                    })
                }
            >
                {label}
            </button>
        );
    }

    render() {
        const { filters } = this.state;
        return (
            <div>
                <div>
                    {this.renderPresetButton("All franchise fees", [], filters.length === 0)}
                    {this.renderPresetButton(
                        "Franchise fees greater than 1000%",
                        [greaterThanFilter],
                        filters.length > 0,
                    )}
                </div>
                <hr className="separator" />
                <div style={{ height: 300 }} className="s-pivot-table">
                    <PivotTable
                        projectId={projectId}
                        measures={measures}
                        rows={attributes}
                        filters={filters}
                    />
                </div>
            </div>
        );
    }
}

export default MeasureValueFilterExample;
