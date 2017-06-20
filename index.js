module.exports = function(content) {
    const envVars = content.split(/\r?\n/);
    return envVars.reduce((obj,entry) => {
        const a = entry.split('=');
        obj[a[0]]=a[1];
        return obj;
    }, {})
};
