const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

const db = [
    {
        name: "piem",
        phone: "080808",
        address: "jalan wahyu",
    },
    {
        name: "adit",
        phone: "1234",
        address: "jalan mangga",
    },
];

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/table-tamu", function (req, res) {
    res.json(db);
});

app.post("/table-tamu", function (req, res) {
    const data = req.body;

    db.push(data);

    res.send("Data berhasil disimpan");
});

app.get("/table-tamu/:index", function (req, res) {
    res.json(db[req.params.index]);
});

app.put("/table-tamu/:index", function (req, res) {
    const data = req.body;
    db[req.params.index] = data;
    res.send("Data berhasil di update");
});

app.delete("/table-tamu/:index", function (req, res) {
    db.splice(req.params.index, 1);

    res.send(`index` + req.params.index + "berhasil dihapus");
});

app.listen(port, () => {
    console.log(`example app listening on port ${port}`);
});
