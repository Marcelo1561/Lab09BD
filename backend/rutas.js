var Controlador = require("./controlador");
var mainDir = "";

module.exports = {
  principal: function(app){
    //Obtener todas las areas
    app.get("/api/areas", Controlador.getAreas);

    //Crear una nueva area
    app.post('/api/area', Controlador.setArea);

    //Modificar los datos de una area
    app.put('/api/area/:area_id', Controlador.updateArea);

    // Borrar un area
    app.delete('/api/area/:area_id', Controlador.removeArea);

    //A la Aplicación principal
    app.get('*', function(req, res){
      res.sendFile(mainDir + '/angular/index.html');
    })
  },
  iniciar: function(main){
    mainDir = main
  }
};
