// (C) 2007-2018 GoodData Corporation
import React, { Component } from "react";
import "@gooddata/react-components/styles/css/main.css";
import { Visualization } from "@gooddata/react-components";

import { projectId, headlineVisualizationUri } from "../utils/fixtures";

export class VisualizationTable extends Component {
    render() {
        return (
            <div style={{ height: 300 }} className="s-visualization-headline">
                <Visualization
                    projectId={projectId}
                    uri="aahd857se2pk"
                    onFiredDrillEvent={data => {
                        console.log(data.drillContext);
                        console.log(data.executionContext);
                    }}
                    drillableItems={[
                        HeaderPredicateFactory.uriMatch("/gdc/md/kubxkbygwjir29slb7piz2c5l5mu96mt/obj/2352"),
                        HeaderPredicateFactory.uriMatch("/gdc/md/kubxkbygwjir29slb7piz2c5l5mu96mt/obj/6760"),
                    ]}
                    config={{ disableDrillUnderline: false }}
                />
            </div>
        );
    }
}

export default VisualizationTable;
