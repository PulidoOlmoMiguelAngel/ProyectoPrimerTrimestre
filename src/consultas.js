// Un cliente está interesado en un microprocesador y nos pide que le enseñemos el catalogo que tenemos.
db.componentes.find({
   producto: 
      {$eq: "Microprocesador"}
})

/* Nuestro jefe nos preguntas cuales son los productos del fabricante AMD que tenemos en el almacen.
   Solo le interesa el tipo de producto, modelo y el stock con el que cuenta el almacen.
*/
db.componentes.find({
   fabricante: "AMD"}, 
   {_id: 0, 
   producto: 1, 
   modelo: 1, 
   tienda:
      {stock: 1}
})

/*
   Necesitamos hacer limpieza en el almacen, buscaremos los componentes que salieron antes del 2011
*/
db.componentes.find({
   fecha_salida: 
      {$lt: new Date("2011-01-01")
   }
})

/*
   Nuestro jefe necesita saber todos los productos que tiene el almacen que su fecha de salia es
   entre 2016 y 2019
*/
db.componentes.find({fecha_salida: 
   {$gte: new Date ("2016-01-01"), 
   $lt: new Date ("2020-01-01")}
})

/*
   Para montar un ordenador necesitamos una fuente de alimentacion que tenga 6 o 8 conexiones SATA
*/
db.componentes.find({
   $or: [
      {"alimentacion.A_SATA": 
         {$in: [6, 8]}
      }, 
   ]
})

/*
   Un cliente busca una Placa Base, compatible con el socket 4 y
   tenga mas de 6 USB en los conectores externos
*/
db.componentes.find(
   {
      $and: [
         {producto: "Placa Base"}, 
         {socket: 4}, 
         {"caracteristicas.Conectores_externos.USB": 
               {$gte: 6},
         },
      ]
   })

/*
   Tenemos problemas de stock y nos faltan algunas graficas, nos interesa saber cuales
   nos faltan y que cuesten menos de 1000
*/
db.componentes.find({
   $and: [
      {producto: /gr.fica/i},
      {"tienda.stock": 
         {$exists: false}
      },
      {precio: 
         {$lt: 1000}
      }
   ] 
})

/*
   Necesitamos saber todos los productos que no sean procesadores y tengan un precio inferior a 200.
*/
db.componentes.find({
   $and: [
      {producto: 
         {$ne: 
            {regex: /Microprocesador/i}
         }
      },
      {precio: 
         {$lt: 200}
      },
   ]
})

/*
   Queremos una Placa Base pero que no tenga 4 conectores SATA ni 2 conectores M2.
*/
db.componentes.find({
   $and: [
   {producto: "Placa Base"},
   {"caracteristicas.Conectores_internos": 
      {$elemMatch: 
         {$nin: [
            {SATA: 4}, 
            {M2: 2}
         ]}
      }
   }]
})

/*
   Queremos saber los discos de almacenamiento que no son de antes de 2015.
*/
db.componentes.find({
   $and: [
      {producto: /almacenamiento/i},
      {fecha_salida: {
         $not: 
         {$lt: new Date("2015-01-01")
         }
      }}
   ]
})

/*
   Queremos buscar en el almacen los productos que no son de AMD, 
   no son Cajas pero su fecha de salida es a partir de 2019.
*/
db.componentes.find({
   $and: [
      {$nor: [
         {
         fabricante: /amd/i}, 
         {producto: /caja/i},
         
      ]
      },
      {fecha_salida: 
         {$gt: new Date("2019-01-01")}
      }
   ]
},
{
   producto: 1,
   fabricante: 1,
   fecha_salida: 1,
})

/*
   Un cliente esta intersado en una Placa Base del modelo TUF
*/
db.componentes.find({
   $and: [
      {producto: /placa base/i},
      {modelo: 
         {$regex: /tuf/i}
      },
   ]
})

/*
   Un cliente esta interesado en un disco duro nuevo pero lo quiere ordenado de menor a mayor
*/
db.componentes.find({
   $and: [
      {producto: /almacenamiento/i},  
   ]
}).sort({precio: 1})

/*
   Un cliente esta interesado en un disco duro nuevo pero lo quiere ordenado de menor a mayor
   pero quiere saber solo el mas barato
*/ 
db.componentes.find({
   $and: [
      {producto: /almacenamiento/i},  
   ]
}).sort(
   {precio: 1}).limit(1)

/*
   Queremos saber las RAMs y Fuentes de alimentacion que tenemos. Los queremos de los fabricantes 
   Corsair y Gskill. 
*/
db.componentes.find({
   $and: [
      {producto: 
         {$all: 
            [/ram/i, 
            /fuente de alimentaci.n/i
            ]
         }
      },
      {fabricante: 
         {$all: 
            [/corsair/i, 
            /gskill/i
            ]
         }
      },
   ]
})

/*
   Un cliente necesita un pc nuevo, quiere un procesador Intel con el nuevo socket 1700. Aparte 
   quiere la placa base de gigabyte en formato ATX. La fuente de alimentacion no puede costar mas de 50 y quiere 
   un SSD 970 Evo. Para la RAM usaremos unas Corsair no reacondicionadas. La caja tiene que ser Asus y 
   la grafica tiene que ser a partir de 2021, de Nvidia y que tenga stock.
*/
db.componentes.find({
   $or: [
      {$and: [
         {producto: /microprocesador/i},
         {socket: 
            {$eq: 1700}
         }
      ]},
      {$and: [
         {producto: /placa base/i},
         {socket: 
            {$eq: 1700}
         }, 
         {fabricante: /gigabyte/i}, 
         {formato: /atx/i}]},
      {$and: [
         {producto: /fuente de alimentaci.n/i},
         {precio: 
            {$lt: 50}
         }
      ]},
      {$and: [
         {producto: /almacenamiento/i},
         {modelo: 
            {$regex: /970/i}
         }
      ]},
      {$and: [
         {producto: /ram/i},
         {fabricante: /corsair/i}, 
         {reacondicionado: 
            {$ne: true}
         }
      ]},
      {$and: [
         {producto: /tarjeta gr.fica/i}, 
         {fabricante: /nvidia/i}, 
         {fecha_salida: 
            {$gte: new Date("2021-01-01")
         }
      }, 
         {"tienda.stock": 
            {$exists: true}
         }
      ]},
      {$and: [
         {producto: /caja/i}, 
         {fabricante: /asus/i}, 
         {formato: /atx/i}]},
   ]
}).pretty()

/*
   Necesitamos saber cual es el precio del ordenador.
*/
db.componentes.aggregate([
{$match: 
   {$or: [
      {$and: [
         {producto: /microprocesador/i},
         {socket: 
            {$eq: 1700}
         }
      ]},
      {$and: [
         {producto: /placa base/i},
         {socket: 
            {$eq: 1700}
         }, 
         {fabricante: /gigabyte/i}, 
         {formato: /atx/i}]},
      {$and: [
         {producto: /fuente de alimentaci.n/i},
         {precio: 
            {$lt: 50}
         }
      ]},
      {$and: [
         {producto: /almacenamiento/i},
         {modelo: 
            {$regex: /970/i}
         }
      ]},
      {$and: [
         {producto: /ram/i},
         {fabricante: /corsair/i}, 
         {reacondicionado: 
            {$ne: true}
         }
      ]},
      {$and: [
         {producto: /tarjeta gr.fica/i}, 
         {fabricante: /nvidia/i}, 
         {fecha_salida: 
            {$gte: new Date("2021-01-01")}}, 
         {"tienda.stock": 
            {$exists: true}
         }
      ]},
      {$and: [
         {producto: /caja/i}, 
         {fabricante: /asus/i}, 
         {formato: /atx/i}]},
]}},
{$group: 
   {_id: null, 
   total: 
      {$sum: "$precio"}
   }
}
])

/*
   Un cliente quiere un SSD 980 Pro y nos paga con 250, ¿cual es su cambio?
*/
db.componentes.aggregate([
   {$match:  
         {"modelo": 
            {$regex: /980/i}
         },
      },
   {$project: 
      {"producto": 1,
      "tipo_almacenamiento": 1,
      "modelo":1, 
         total_devolver: 
            {$subtract:[250, "$precio"]
            }
      }
   },
])

/*
   Un cliente quiere comprar 1 pieza de todos los productos de la tienda, el coste de todas las 
   piezas serian el siguiente:
*/
db.componentes.aggregate([
   {$match: 
      {precio: 
         {$gt: 0}
      }
   },
   {$group: 
      {_id: "$producto", 
      total: 
         {$sum:"$precio"}
      }
   }
])

/*
   Queremos saber el valor total de nuestro almacen por categorias.
*/
db.componentes.aggregate([
   {$project: 
      {"producto":1, 
      "modelo": 1,
         total: 
               {$multiply: 
                  ["$precio", 
                  "$tienda.stock"]
               } 
      }
   }
])

/*
   Queremos saber el promedio de ventas de cada categoria.
*/
db.componentes.aggregate([
   {$group: 
      {_id: 
         "$producto", 
            total: 
               {$avg: "$tienda.ventas"}
      }
   }
])

/*
   Queremos saber todos los productos que tienen 2 fabricantes.
*/
db.componentes.find({
   fabricante: 
      {$size: 2}
},
{
   _id: 1, 
   producto: 1, 
   fabricante: 1
})

/*
   Necesitamos saber cual es el articulo mas caro de nuestra tienda.
*/
db.componentes.aggregate([
   {$group: 
      {_id: null, 
      total: 
         {$max: "$precio"}
      }
   }
])

/*
   Necesitamos saber segun la categoria cuales son los minimos de stock sin tener en cuenta los productos agotados
*/
db.componentes.aggregate([
   {$match:  
         {"tienda.stock": 
            {$gt: 0}
         },
      },
   {$group: 
      {_id: "$producto", 
         total: 
            {$min: "$tienda.stock"}
      }
   },
])

/*
   Queremos saber cuales son los productos que no tienen stock
*/
db.componentes.aggregate([
   {$match:  
         {"tienda.stock": {
            $exists: false}},
      },
   {$project: 
      {"modelo":1, 
      "producto": 1}
   },
])