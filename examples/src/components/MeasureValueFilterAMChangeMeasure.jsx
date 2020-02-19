// (C) 2007-2020 GoodData Corporation
import React, { Component } from "react";
import "@gooddata/react-components/styles/css/main.css";
import { Visualization } from "@gooddata/react-components";

import { projectId, mvfvisualizationAMchangemeasureuri } from "../utils/fixtures";

export class MeasureValueFilterAMChangeMeasure extends Component {
    render() {
        return (
            <div style={{ height: 300 }} className="s-visualization-bubble">
                <Visualization projectId={projectId} uri={mvfvisualizationAMchangemeasureuri} />
            </div>
        );
    }
}

export default MeasureValueFilterAMChangeMeasure;
