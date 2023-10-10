const { createApp } = Vue;

createApp({
    data() {
        return {
            marca: "MegaDron",
            menuColor: "lightblue",
            footerColor: "slategrey",
            precioEstilos: "background: orangered; color: white; font-weight: bold",
            menu: [{
                etiqueta: 'Inicio',
                url: ''
            }, {
                etiqueta: 'Tienda',
                url: ''
            }],
            producto:
            {
                id: 1,
                imagen: "https://ae01.alicdn.com/kf/S00eb0e55c14f47e2bbf828a92ecd5515U/S6S-Mini-GPS-Drones-150g-Drone-4K-Profesional-HD-Dual-Camera-5G-WIFI-FPV-Brushless-Folding.jpg_Q90.jpg_.webp",
                nombre: "Dron LU3 MAX GPS 8K HD",
                descripcion: "Dron LU3 MAX GPS 8K HD profesional con <b>cámara Dual</b>, cardán autoestabilizador, Motor sin escobillas para evitar obstáculos, cuadricóptero plegable",
                precio: "620",
                colores: ["red", "blue", "black", "yellow"]
            },
            pedido:
            {
                id: null,
                cantidad: 1,
                color: null
            },
            productosRelacionados: [
                {
                    id: 2,
                    imagen:
                        "https://cdn.shopify.com/s/files/1/0640/5067/files/pexels-photo-53903_large.jpg",
                    nombre: "KF102",
                    descripcion:
                        "Dron plegable KF102 con Gps, 8K, cámara Dual HD, 2 ejes,cardán, Motor sin escobillas, fotografía aérea, 1200M de distancia, novedad de 2022",
                    precio: "1180",
                    colores: ["orange", "blue"],
                },
                {
                    id: 3,
                    imagen: "https://media.gettyimages.com/id/628335852/es/foto/europe-germany-view-of-drone-with-camera-flying-airborne.jpg?s=612x612&w=0&k=20&c=tg0lNdDVHx2-qUivQD7Y6RoR1U0_ioNDVc3y7vJ6Y0g=",
                    nombre: "KBDFA-Dron E888 RC",
                    descripcion:
                        "KBDFA-Dron E888 RC, cuadricóptero profesional FPV, 4K HD, fotografía aérea, evitación de obstáculos, helicóptero, juguetes de distancia",
                    precio: "154",
                    colores: ["black", "midnightblue"],
                },
                {
                    id: 4,
                    imagen: "https://i.blogs.es/9e6591/dron/450_1000.jpg",
                    nombre: "Dron Profesional 4K con GPS",
                    descripcion:
                        "Dron Profesional 4K con GPS, 8K, cámara HD, 3 ejes, cardán antivibración, evitación de obstáculos, fotografía aérea, Quadcopter, nuevo",
                    precio: "1800",
                    colores: ["teal", "blue", "slategrey", "navy"],
                },
            ],
        };
    },
    methods: {
        aumentar: function (event) {
            this.pedido.cantidad = this.pedido.cantidad + 1;
        },
        disminuir: function (event) {
            this.pedido.cantidad = this.pedido.cantidad > 1 ? this.pedido.cantidad - 1 : 1;

        },
        seleccionarColor(color) {
            this.pedido.color = color;
        },
        getIconClass(color) {
            return color === this.pedido.color ? 'fa-circle-check' : 'fa-circle';
        },
        getColorStyle(color) {
            return { color: color };
        },
        comprar: function (event) {
            Swal.fire({
                title: this.producto.nombre,
                confirmButtonText: 'Comprar',
                text: 'Color: ' + this.pedido.color + ' - Cantidad: ' + this.pedido.cantidad,
                imageUrl: this.producto.imagen,
                imageWidth: 420,
                imageHeight: 300
            });
        }
    }
}).mount("#app");