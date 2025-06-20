// src/data/fitzzasData.ts

export interface Fitzza {
    imagen: string;
    titulo: string;
    descripcion: string;
    esRecomendado?: boolean;
    esVegetariano?: boolean;
    esSinGluten?: boolean;
}

export const fitzzas: Fitzza[] = [
    {
        imagen: "https://pedidosya.dhmedia.io/image/pedidosya/products/769c023c-aad2-4695-8e4a-44620a373397.jpg",
        titulo: "Fitzza Muzza",
        descripcion: "Fitzza con mozzarella y salsa de tomate casera artesanal.",
        esRecomendado: true
    },
    {
        imagen: "https://pedidosya.dhmedia.io/image/pedidosya/products/efd484b6-e5ca-4658-ae8c-3ecd2671d758.jpg",
        titulo: "Fitzza Napo",
        descripcion: "Fitzza con rodajas de tomate fresco y topping de salsa casera de provenzal."
    },
    {
        imagen: "https://pedidosya.dhmedia.io/image/pedidosya/products/363935fe-487b-40e2-8978-728ffa5f65f0.jpg",
        titulo: "Fitzza Fugazzetta",
        descripcion: "Fitzza con cebolla blanca y provolone.",
        esVegetariano: true
    },
    {
        imagen: "https://pedidosya.dhmedia.io/image/pedidosya/products/eb57bd40-3872-458a-b926-903db25dd94a.jpg",
        titulo: "Fitzza Pepperoni",
        descripcion: "Fitzza con pepperoni y queso mozzarella."
    },
    {
        imagen: "https://pedidosya.dhmedia.io/image/pedidosya/products/890ba29d-3b08-4651-b10f-dc3f6462b940.jpg",
        titulo: "Fitzza Mortadela, Pistacho y Stracciatella",
        descripcion: "Fitzza con mortadela, pistachos y stracciatella.",
        esRecomendado: true
    },
    {
        imagen: "https://pedidosya.dhmedia.io/image/pedidosya/products/e4d0be75-1e7a-422e-802d-bded742f4e53.jpeg",
        titulo: "Fitzza Jamón Crudo, Rúcula y Stracciatella",
        descripcion: "Fitzza con jamón crudo, rúcula fresca y stracciatella.",
        esRecomendado: true
    }
];
