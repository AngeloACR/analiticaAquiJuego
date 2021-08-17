
const webServer = require('./webServer');
const config = require('./config/environment');

const webPortColombia = config.webPortColombia;
const webAppColombia = webServer.init(webPortColombia);


webAppColombia.listen(webPortColombia, () => {
    console.log('Server running at: ' + webPortColombia);
});

const webPortPeru = config.webPortPeru;
const webAppPeru = webServer.init(webPortPeru);


webAppPeru.listen(webPortPeru, () => {
    console.log('Server running at: ' + webPortPeru);
});