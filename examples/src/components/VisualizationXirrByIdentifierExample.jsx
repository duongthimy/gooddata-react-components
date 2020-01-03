// (C) 2007-2020 GoodData Corporation
import React, { Component } from "react";
import "@gooddata/react-components/styles/css/main.css";
import { Visualization } from "@gooddata/react-components";

import { projectId, xirrVisualizationIdentifier } from "../utils/fixtures";

export class VisualizationTable extends Component {
    render() {
        return (
            <div style={{ height: 300 }} className="s-visualization-treemap">
                <Visualization projectId={projectId} identifier={xirrVisualizationIdentifier} />
            </div>
        );
    }
}

export default VisualizationTable;
