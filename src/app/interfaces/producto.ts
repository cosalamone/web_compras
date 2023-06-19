export interface Producto {
    destacado: number;
    nombre: string;
    id_producto: number;
    id_subcategoria: number;
    precio: number;
    imagenes: any[]; // TO-DO interface imagen: nombre, etc
    vendible: number;
    stock: number;
    garantia: number;
    iva: number;
    nombreSubcategoria: string;
}
