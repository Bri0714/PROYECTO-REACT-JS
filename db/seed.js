import db from "./firebase.config.js"; 
import { collection, addDoc } from "firebase/firestore"; 
import products from "../products.js";


const productosCollectionRef = collection(db, "productos"); 
const promises = products.map((product) => addDoc(productosCollectionRef, product)); 
    Promise.all(promises).then(() => { 
    console.log("All done!"); 
    process.exit(0); 
});