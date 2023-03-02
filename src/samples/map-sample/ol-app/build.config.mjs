// SPDX-FileCopyrightText: con terra GmbH and contributors
// SPDX-License-Identifier: Apache-2.0
import { defineBuildConfig } from "@open-pioneer/build-support";

export default defineBuildConfig({
    styles: "./app.css",
    services: {
        Provider: {
            provides: ["config.MapConfig"]
        }
    },
    ui: {
        references: ["config.MapConfig", "map-sample-logging.LogService", "open-layers-map-service"]
    }
});
