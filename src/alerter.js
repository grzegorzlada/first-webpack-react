function Alerter(message) {
    this.message = message;
}

Alerter.prototype.sayIt = function(additions) {
//    if(additions === undefined) {
//        additions = '';
//    }
    alert(this.message + additions);
}

module.exports = Alerter;