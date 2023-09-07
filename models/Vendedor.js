//Me conecto a la base de datos
const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/empresa");
}

//Creo el esquema y luego el modelo
const vendedorSchema = new mongoose.Schema(
  {
    nombre: String,
    producto: String,
    email: String,
  },
  { collection: "vendedores" }
);

const Vendedor = mongoose.model("Vendedor", vendedorSchema);

module.exports = Vendedor;
