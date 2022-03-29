import mongoose from "mongoose";

mongoose.connect("mongodb+srv://rootdb:root@mauricio.7qcnd.mongodb.net/livraria-node");

let db = mongoose.connection;

export default db;