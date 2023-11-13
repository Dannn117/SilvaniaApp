module.exports = function(app, databaseService) {

    app.get('/contribuyentes', (req, res) => {
        databaseService.getContribuyentes()
            .then(contribuyentes => res.json(contribuyentes))
            .catch(e => res.status(500).send(e));
    });

    app.post('/contribuyentes', (req, res) => {
        const nuevoContribuyente = req.body;
        console.log(nuevoContribuyente);
        databaseService
            .crearContribuyente(
                nuevoContribuyente.nombre, 
                )
            .then(() => {
                res.json({message: "created!"});
            }).catch(e => {
                res.status(500).send(e);
            });
    });
};