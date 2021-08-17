
const webServer = require('./webServer');
const config = require('./config/environment');

const webPort = config.webPort;
const webApp = webServer.init(webPort);


webApp.listen(webPort, () => {
    console.log('Server running at: ' + webPort);
});