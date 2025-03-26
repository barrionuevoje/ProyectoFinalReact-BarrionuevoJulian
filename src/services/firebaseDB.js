import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase";

// Obtener productos desde Firestore con filtro opcional por categoría
export const getItems = async (categoryId = null) => {
  try {
    let productosQuery = collection(db, "productos");

    if (categoryId) {
      productosQuery = query(productosQuery, where("categoria", "==", categoryId));
    }

    const querySnapshot = await getDocs(productosQuery);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error obteniendo productos:", error);
    return [];
  }
};
