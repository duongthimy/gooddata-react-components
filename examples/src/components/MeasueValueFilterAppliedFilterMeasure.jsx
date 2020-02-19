// (C) 2020 GoodData Corporation

// (C) 2007-2020 GoodData Corporation
import React, { Component } from "react";
import "@gooddata/react-components/styles/css/main.css";
import { Visualization } from "@gooddata/react-components";

import { projectId, mvfvisualizationAppliesFilterMeasureuri } from "../utils/fixtures";

export class MeasueValueFilterAppliedFilterMeasure extends Component {
    render() {
        return (
            <div style={{ height: 300 }} className="s-visualization-bubble">
                <Visualization projectId={projectId} uri={mvfvisualizationAppliesFilterMeasureuri} />
            </div>
        );
    }
}

export default MeasueValueFilterAppliedFilterMeasure;
