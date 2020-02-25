// (C) 2007-2020 GoodData Corporation
import React, { Component } from "react";
import { Headline, Model } from "@gooddata/react-components";

import "@gooddata/react-components/styles/css/main.css";

import { projectId, franchiseFeesIdentifier, franchiseFeesAdRoyaltyIdentifier } from "../utils/fixtures";

const primaryMeasure = Model.measure(franchiseFeesIdentifier).format("#,##0");
const secondaryMeasure = Model.measure(franchiseFeesAdRoyaltyIdentifier).format("#,##0");

export class HeadlineLocalizationExample extends Component {
    onLoadingChanged(...params) {
        // eslint-disable-next-line no-console
        return console.log("HeadlineLocalizationExample onLoadingChanged", ...params);
    }

    onError(...params) {
        // eslint-disable-next-line no-console
        return console.log("HeadlineLocalizationExample onError", ...params);
    }

    render() {
        return (
            <div className="s-headline" style={{ display: "flex" }}>
                <style jsx>
                    {`
                        .column {
                            flex: "1 1 50%";
                        }
                    `}
                </style>
                <div className="column">
                    <Headline
                        projectId={projectId}
                        primaryMeasure={primaryMeasure}
                        onLoadingChanged={this.onLoadingChanged}
                        onError={this.onError}
                    />
                </div>
                <div className="column">
                    <Headline
                        projectId={projectId}
                        primaryMeasure={primaryMeasure}
                        secondaryMeasure={secondaryMeasure}
                        onLoadingChanged={this.onLoadingChanged}
                        onError={this.onError}
                        locale="de-DE" // de-DE, es-ES, fr-FR, ja-JP, nl-NL, pt-BR, pt-PT, zh-Hans
                    />
                </div>
            </div>
        );
    }
}

export default HeadlineLocalizationExample;
