const { beforeSign } = require('./signArchives')



// ================
// === Callback ===
// ================

exports.default = async function (context) {
    console.log("prepareToSign", { context })
    if (context.electronPlatformName === 'darwin') {
        beforeSign()
    }
}
