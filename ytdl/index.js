const ytdl = require("ytdl-core");

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    const vid = req.query.vid ? req.query.vid : null;
    if (vid) {
        const info = await ytdl.getInfo(vid);
        context.res = {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            },
            body: info,
        };
    } else {
        context.res = {
            status: 400,
            body: JSON.stringify("vid not found")
        };
    }
};