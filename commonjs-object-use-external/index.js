var moment = require('./moment');

module.exports.objectUseMoment = {
    currentDate: function() {
        return moment();
    }
};