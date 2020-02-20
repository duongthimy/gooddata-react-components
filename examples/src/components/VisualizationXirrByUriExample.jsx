// (C) 2007-2018 GoodData Corporation
import React, { Component } from "react";
import "@gooddata/react-components/styles/css/main.css";
import { Visualization } from "@gooddata/react-components";

import { projectId, xirrVisualizationUri } from "../utils/fixtures";

export class VisualizationXirrExample extends Component {
    render() {
        return (
            <div style={{ height: 300 }} className="s-visualization-donut">
                <Visualization projectId={projectId} uri={xirrVisualizationUri} />
            </div>
        );
    }
}

export default VisualizationXirrExample;
