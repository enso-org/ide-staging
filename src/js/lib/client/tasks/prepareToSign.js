const fs       = require('fs');
const path     = require('path')
const { dist } = require('../../../../../build/paths')



// =================
// === Constants ===
// =================

const GRAALVM = 'graalvm-ce-java11-21.1.0'
const resourcesRoot = path.join(dist.root, 'client', 'mac', 'Enso.app', 'Contents', 'Resources')

const readonly = [
    `enso/runtime/${GRAALVM}/Contents/Home/lib/server/classes.jsa`,
]

// ================
// === Callback ===
// ================

exports.default = async function (context) {
    console.log("prepareToSign", { context })
    for (let file of readonly) {
        const target = path.join(resourcesRoot, file)
        fs.chmodSync(target, 0o644)
    }
}
