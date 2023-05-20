conn = new Mongo();
db = conn.getDB("lab09");

db.Areas.insert(
  [
   {_id: 1,nombre: 'nombre1', abreviatura: 'av1', Estado: 'A'},
   {_id: 2,nombre: 'nombre2', abreviatura: 'av2', Estado: 'A'}
   ]);
