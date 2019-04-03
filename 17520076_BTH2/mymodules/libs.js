module.exports = {
    show: function () {
        console.log(`Server running at http://${this.hostname}:${this.port}/`);
    },
    hostname:'127.0.0.1',
    port:3000
};