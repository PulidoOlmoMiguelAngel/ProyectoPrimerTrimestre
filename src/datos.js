// db.componentes.drop()
db.componentes.insertMany([
    {
        _id: 1, 
        producto: "Microprocesador", 
        fabricante: ["Intel"],
        modelo: "i5-12600K", 
        socket: 1700,
        frecuencia: ["3.7GHz","4.9GHz"],
        graficos: "Intel UHD Graphics 770",
        fecha_salida: new Date ("2021-11-04"),
        precio: 330.99,
        tienda: 
            {stock: 50,
            reacondicionado: false,
            ventas: 300,},
    },
    {_id: 2, producto: "Microprocesador", fabricante: ["Intel"], modelo: "i5-11600K", socket: 1200, frecuencia: ["3.9GHz", "4.9GHz"], graficos: "Intel UHD Graphics 750", fecha_salida: new Date("2021-03-16"), precio: 260.99,tienda: {stock:40, reacondicionado: false, ventas: 400}},
    {_id: 3, producto: "Microprocesador", fabricante: ["Intel"], modelo: "i5-10600K", socket: 1200, frecuencia: ["4.1GHz", "4.8GHz"], graficos: "Intel UHD Graphics 630", fecha_salida: new Date("2020-04-30"), precio: 240.99, tienda: {stock:20, reacondicionado: false}, ventas: 600},
    {_id: 4, producto: "Microprocesador", fabricante: ["AMD"], modelo: "Ryzen 5 5600X", socket: 4, frecuencia: ["3.7GHz", "4.6GHz"], fecha_salida: new Date("2020-11-05"), precio: 303.99, tienda: {stock:60, reacondicionado: false, ventas: 200}},
    {_id: 5, producto: "Microprocesador", fabricante: ["AMD"], modelo: "Ryzen 5 3600X", socket: 4, frecuencia: ["3.8GHz", "4.4GHz"], fecha_salida: new Date("2019-07-07"), precio: 260.99, tienda: {stock:35, reacondicionado: false, ventas: 300}},
    {_id: 6, producto: "Microprocesador", fabricante: ["AMD"], modelo: "Ryzen 5 2600X", socket: 4, frecuencia: ["3.9GHz", "4.9GHz"], fecha_salida: new Date("2021-03-16"), precio: 248.99, tienda: {stock:20, reacondicionado: false, ventas: 900}},

    {
        _id: 7,
        producto: "Placa Base",
        fabricante: ["MSI"],
        modelo: "PRO Z690-A",
        socket: 1700,
        formato: "ATX",
        caracteristicas: [{Conectores_internos: [{PCle: 3}, {SATA: 6}, {M2: 4}]},{Conectores_externos: [{HDMI: 1},{DisplayPort: 1},{RJ_45: 1},{USB: 8},{Audio: 6}]}],
        fecha_salida: new Date ("2021-11-04"),
        precio: 206.99,
        tienda: 
            {stock: 60,
            reacondicionado: false,
            ventas: 400}
    },
    {_id: 8, producto: "Placa Base", fabricante: ["Asus"], modelo: "PRIME Z590-P", socket: 1200, formato: "ATX", caracteristicas: [{Conectores_internos: [{PCle: 1}, {SATA: 4}, {M2: 3}]},{Conectores_externos: [{HDMI: 1},{DisplayPort: 1},{RJ_45: 1},{USB: 6},{Audio: 6}]}] ,fecha_salida: new Date("2020-04-30"), precio: 208.99,tienda: {stock: 40, reacondicionado: false, ventas: 300}},
    {_id: 9, producto: "Placa Base", fabricante: ["MSI"], modelo: "B550 GAMING PLUS", socket: 4, formato: "ATX", caracteristicas: [{Conectores_internos: [{PCle: 1}, {SATA: 4}, {M2: 2}]},{Conectores_externos: [{HDMI: 1},{DisplayPort: 1},{RJ_45: 1},{USB: 8},{Audio: 6}]}] ,fecha_salida: new Date("2020-04-16"), precio: 146.99, tienda: {stock: 60, reacondicionado: false, ventas: 400}},
    {_id: 10, producto: "Placa Base", fabricante: ["Asus"], modelo: "TUF Gaming X570 Plus", socket: 4, formato: "ATX", caracteristicas: [{Conectores_internos: [{PCle: 1}, {SATA: 6}, {M2: 2}]},{Conectores_externos: [{HDMI: 1},{DisplayPort: 1},{RJ_45: 1},{USB: 6},{Audio: 6}]}] ,fecha_salida: new Date("2020-04-16"), precio: 224.99, precio: 224.99, tienda: {stock: 40, reacondicionado: false, ventas: 250}},
    {_id: 11, producto: "Placa Base", fabricante: ["Asus"], modelo: "ROG STRIX Z690-F GAMING WIFI", socket: 1700, formato: "ATX", caracteristicas: [{Conectores_internos: [{PCle: 2}, {SATA: 4}, {M2: 4}]},{Conectores_externos: [{HDMI: 1},{DisplayPort: 1},{RJ_45: 1},{USB: 10},{Audio: 6}]}] ,fecha_salida: new Date("2021-11-04"), precio: 509.99, tienda: {stock: 20, reacondicionado: false, ventas: 553}},
    {_id: 12, producto: "Placa Base", fabricante: ["Gigabyte"], modelo: "Z690 AORUS ELITE", socket: 1700, formato: "ATX", caracteristicas: [{Conectores_internos: [{PCle: 3}, {SATA: 3}, {M2: 4}]},{Conectores_externos: [{HDMI: 1},{DisplayPort: 1},{RJ_45: 1},{USB: 10},{Audio: 6}]}] ,fecha_salida: new Date("202-11-04"), precio: 269.99, tienda: {stock: 30, reacondicionado: false, ventas: 70}},
    {_id: 13, producto: "Placa Base", fabricante: ["MSI"], modelo: "MAG Z590 TORPEDO", socket: 1200, formato: "ATX", caracteristicas: [{Conectores_internos: [{PCle: 2}, {SATA: 4}, {M2: 3}]},{Conectores_externos: [{HDMI: 1},{DisplayPort: 1},{RJ_45: 2},{USB: 8},{Audio: 6}]}] ,fecha_salida: new Date("2020-04-16"), precio: 176.99, tienda: {stock: 50, reacondicionado: false, ventas: 43}},
    {_id: 14, producto: "Placa Base", fabricante: ["Asus"], modelo: "ROG STRIX X570-E GAMING WIFI II", socket: 4, formato: "ATX", caracteristicas: [{Conectores_internos: [{PCle: 3}, {SATA: 8}, {M2: 2}]},{Conectores_externos: [{HDMI: 1},{DisplayPort: 1},{RJ_45: 2},{USB: 8},{Audio: 6}]}] ,fecha_salida: new Date("2020-04-16"), precio: 397.99, tienda: {stock: 10, reacondicionado: true, fecha_reaco: new Date("2021-04-16"), ventas: 100}},

    {
        _id: 15,
        producto: "RAM",
        fabricante: ["Corsair"],
        modelo: "Vengeance RGB Pro DDR4 3200 16GB 2x8GB",
        fecha_salida: new Date ("2016-05-30"),
        precio: 100.99,
        tienda: 
            {stock: 120,
            reacondicionado: true,
            fecha_reaco: new Date("2017-05-30"),
            ventas: 1200}        
    },
    {_id: 16, producto: "RAM", fabricante: ["GSkill"], modelo: "Trident Z RGB DDR4 3200 2x8GB", fecha_salida: new Date ("2016-05-30"), precio: 120.99, tienda: {stock: 100, reacondicionado: false}, ventas: 700},
    {_id: 17, producto: "RAM", fabricante: ["Corsair"], modelo: "Vengeance LPX DDR4 3200 2X8GB", fecha_salida: new Date ("2016-01-30"), precio: 78.99, tienda: {stock: 150, reacondicionado: false}, ventas: 2000},
    {_id: 18, producto: "RAM", fabricante: ["Team Group"], modelo: "Delta White RGB DDR4 3200 2X8GB", fecha_salida: new Date ("2016-05-30"), precio: 85.99, tienda: {stock: 90, reacondicionado: false}, ventas: 500},

    {
        _id: 19,
        producto: "Gráfica",
        fabricante: ["Nvidia", "MSI"],
        modelo: "RTX 3060 Ti GAMING Z TRIO LHR 8GB",
        fecha_salida: new Date ("2021-02-25"),
        conexiones: ["3x DisplayPort","1x HDMI"],
        precio: 830.99,
        tienda: 
            {reacondicionado: false,
            ventas: 50}        
    },
    {_id: 20, producto: "Gráfica", fabricante: ["Nvidia", "PNY"], modelo: "RTX 3060 Ti XLR8 Gaming REVEL EPIC-X RGB 8GB", fecha_salida: new Date ("2021-02-25"), conexiones: ["3x DisplayPort", "1x HDMI"], precio: 850.99, tienda: {stock: 20, reacondicionado: false}, ventas: 50},
    {_id: 21, producto: "Gráfica", fabricante: ["Nvidia", "EVGA"], modelo: "GTX 1650 SC Ultra Gaming 4GB", fecha_salida: new Date ("2019-04-23"), conexiones: ["2x DisplayPort", "1x HDMI"], precio: 457.99, tienda: {stock: 50, reacondicionado: true, fecha_reaco: new Date("2020-04-23"), ventas: 300}},
    {_id: 22, producto: "Gráfica", fabricante: ["AMD", "PowerColor"], modelo: "Red Devil AMD Radeon RX 6600XT 8GB", fecha_salida: new Date ("2021-08-11"), conexiones: ["3x DisplayPort", "1x HDMI"], precio: 660.99, tienda: {stock: 30, reacondicionado: false}, ventas: 30},
    {_id: 23, producto: "Gráfica", fabricante: ["AMD", "XFX"], modelo: "Speedster SWFT 210 AMD Radeon RX 6600 XT 8GB", fecha_salida: new Date ("2021-08-11"), conexiones: ["3x DisplayPort", "1x HDMI"], precio: 640.99, tienda: {stock: 20, reacondicionado: false}, ventas: 30},
    {_id: 24, producto: "Gráfica", fabricante: ["AMD", "PowerColor"], modelo: "Radeon RX 6800XT Red Devil 16GB", fecha_salida: new Date ("2021-08-11"), conexiones: ["3x DisplayPort", "1x HDMI"], precio: 1450, tienda: {reacondicionado: false, ventas: 4}},

    {
        _id: 25,
        producto: "Fuente de alimentación",
        fabricante: ["Corsair"],
        modelo: "CV Series CV750 750W 80 Plus Bronze",
        fecha_salida: new Date ("2017-05-21"),
        alimentacion: [{A_ATX: 1}, {A_PCle: 2}, {A_SATA: 7}],
        precio: 59.99,
        tienda: {
            stock: 40,
            reacondicionado: false,
            ventas: 100}        
    },
    {_id: 26, producto: "Fuente de alimentación", fabricante: ["Corsair"], modelo: "RM Series RM850 850W 80 Plus Gold Full Modular", fecha_salida: new Date ("2018-08-15"), alimentacion: [{A_ATX: 1}, {A_PCle: 4}, {A_SATA: 14}, {A_MOLEX: 4}], precio: 116.99, tienda: {stock: 30, reacondicionado: false, ventas: 30}},
    {_id: 27, producto: "Fuente de alimentación", fabricante: ["Nfortec"], modelo: "Sagitta RGB 650W 80 Plus Gold Full Modular", fecha_salida: new Date ("2018-07-10"), alimentacion: [{A_ATX: 1}, {A_SATA: 6}, {A_MOLEX: 3}, {A_PCle: 2}], precio: 72.99, tienda: {stock: 60, reacondicionado: false, ventas: 45}},
    {_id: 28, producto: "Fuente de alimentación", fabricante: ["Corsair"], modelo: "SF750 750W SFX 80 Plus Platinum Full Modular", fecha_salida: new Date ("2020-07-15"), alimentacion: [{A_ATX: 1}, {A_SATA: 8}, {A_MOLEX: 8}, {A_PCle: 8}], precio: 155.99, tienda: {stock: 20,reacondicionado: false, ventas: 60}},
    {_id: 29, producto: "Fuente de alimentación", fabricante: ["Nox"], modelo: "Urano VX 650W 80 Bronze 120MM PWM", fecha_salida: new Date ("2015-09-05"), alimentacion: [{A_ATX: 1}, {A_SATA: 6}, {A_MOLEX: 2}, {A_PCle: 2}], precio: 47.99, tienda:{stock: 55, reacondicionado: false, ventas: 100}},

    {
        _id: 30,
        producto: "Almacenamiento",
        tipo_almacenamiento: "HDD",
        fabricante: ["Seagate"],
        modelo: "BarraCuda",
        capacidad: "1TB",
        interfaz: "SATA",
        fecha_salida: new Date ("2010-06-30"),
        precio: 35.99,
        tienda: 
            {stock: 200,
            reacondicionado: false,
            ventas: 10000}
        
        
    },
    {_id: 31, producto: "Almacenamiento", tipo_almacenamiento: "SSD", fabricante: ["Kioxia"], modelo: "EXCERIA", capacidad: "480GB", interfaz: "SATA", fecha_salida: new Date ("2016-11-09"), precio: 49.99, tienda: {stock: 120, reacondicionado: false, ventas: 1000}},
    {_id: 32, producto: "Almacenamiento", tipo_almacenamiento: "SSD", fabricante: ["Kingston"], modelo: "A400", capacidad: "240GB", interfaz: "SATA", fecha_salida: new Date ("2016-10-12"), precio: 28.99, tienda: {stock: 160, reacondicionado: false, ventas: 600}},
    {_id: 33, producto: "Almacenamiento", tipo_almacenamiento: "SSD", fabricante: ["Samsung"], modelo: "970 EVO Plus", capacidad: "1TB", interfaz: "NVMe M.2", fecha_salida: new Date ("2019-12-05"), precio: 151.99, tienda: {stock: 95, reacondicionado: false, ventas: 1200}},
    {_id: 34, producto: "Almacenamiento", tipo_almacenamiento: "SSD", fabricante: ["Samsung"], modelo: "980 Pro", capacidad: "1TB", interfaz: "NVMe M.2", fecha_salida: new Date ("2020-05-15"), precio: 220.99, tienda: {stock: 80, reacondicionado: false, ventas: 400}},
    {_id: 35, producto: "Almacenamiento", tipo_almacenamiento: "SSD", fabricante: ["MSI"], modelo: "Spatium M390 ", capacidad: "500GB", interfaz: "NVMe M.2", fecha_salida: new Date ("2020-06-02"), precio: 77.99, tienda: {stock: 102, reacondicionado: false, ventas: 600}},
    {_id: 36, producto: "Almacenamiento", tipo_almacenamiento: "HDD", fabricante: ["Seagate"], modelo: "IronWolf NAS", capacidad: "4TB", interfaz: "SATA", fecha_salida: new Date ("2016-05-02"), precio: 113.99, tienda: {stock: 50, reacondicionado: false, ventas: 3000}},

    {
        _id: 37,
        producto: "Caja",
        fabricante: ["Tempest"],
        modelo: "Spectra RGB con Ventana",
        formato: "ATX",
        fecha_salida: new Date ("2018-03-12"),
        precio: 35.99,
        tienda: 
            {stock: 45,
            reacondicionado: false,
            ventas: 120}
        
        
    },
    {_id: 38, producto: "Caja", fabricante: ["Nfortec"], modelo: "Lynx Cristal Templado RGB Blanco", formato: "ATX", fecha_salida: new Date ("2017-05-12"), precio: 39.99, tienda: {stock: 60,reacondicionado: false, ventas: 300}},
    {_id: 39, producto: "Caja", fabricante: ["Asus"], modelo: "GX601 Rog Strix Helios Cristal Templado", formato: "ATX", fecha_salida: new Date ("2019-07-29"), precio: 300.99, tienda: {stock: 40,reacondicionado: false, ventas: 55}},
    {_id: 40, producto: "Caja", fabricante: ["Tempest"], modelo: "Spook RGB", formato: "Micro-ATX", fecha_salida: new Date ("2018-04-02"), precio: 39.99, tienda: {stock: 60,reacondicionado: false, ventas: 80}},
    
])