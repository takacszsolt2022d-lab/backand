import express from 'express';
const app = express();
const PORT = 3000;
// Middleware a JSON formátumú kérések fogadásához
app.use(express.json());
// Memóriabeli adatbázis (kezdeti adatok)
let diakok = [

{ id: 101, nev: "Kovács Péter", szak: "Szoftverfejlesztő" },
{ id: 102, nev: "Nagy Anna", szak: "Hálózatépítő" }
];
// 1. READ (GET): Összes diák lekérése
app.get('/api/diakok', (req, res) => {
    res.status(200).json(diakok);
});



app.post('/api/diakok', (req, res) => {
    const ujdiak ={
        id: diakok.length > 0 ? diakok[diakok.length - 1].id + 1 : 101,
        nev: req.body.nev,
        szak: req.body.szak
    };
    diakok.push(ujdiak);
    res.status(201).json(ujdiak);
});



app.listen(PORT, () => {
    console.log(`A szerver fut: http://localhost:${PORT}`);
});
