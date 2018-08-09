
module.exports = function (app) {
    app.post("/auth/signup", function (req, res) {
        res.send("I am in POST signup");
    });
};
