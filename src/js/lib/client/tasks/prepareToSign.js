const { beforeSign } = require('./signArghives')



// ================
// === Callback ===
// ================

exports.default = async function (context) {
    console.log("prepareToSign", { context })
    if (context.platform === 'darwin') {
        beforeSign()
    }
}
