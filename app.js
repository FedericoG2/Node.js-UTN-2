// Creo un nuevo cliente

// const nuevoCliente = new Cliente({
//   nombre: "Juan",
//   edad: 30,
//   email: "juan@example.com",
// });
// Guardo
// const result = nuevoCliente
//   .save()
//   .then(() => {
//     console.log("Cliente guardado correctamente");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Consultar los clientes

// Cliente.find({})
//   .then((clientes) => {
//     console.log("Clientes encontrados:", clientes);
//   })
//   .catch((err) => {
//     console.log("Error al recuperar los clientes:", error);
//   });

// Actualizar un cliente existente
// Todos los clientes con nombre juan ahora van a tener 31

// Cliente.updateOne({ nombre: "Juan" }, { edad: 32 })
//   .then(() => {
//     console.log("Clientes actualizado:");
//   })
//   .catch((err) => {
//     console.log("Error al actualizar el cliente:", err);
//   });

//  Eliminar cliente --> Todos los clientes que tiene como nombre Juan

// Cliente.deleteOne({ nombre: "Juan" })
//   .then(() => {
//     console.log("Clientes eliminado correctamente:");
//   })
//   .catch((err) => {
//     console.log("Error al eliminar cliente:", err);
//   });

//------------------------------------------------------------->

const express = require("express");
const app = express();
const port = 3000;
const router = require("./routes/vendedores");
//Middlewares
app.use(express.json());
app.use("/vendedores", router);

//Servidor escuchando
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
