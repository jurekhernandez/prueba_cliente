# prueba_cliente
en este repositorio encontraran la aplicación que consume el web service
para su uso es necesario descargar el repositorio

buscar producto
1) abrimos el archivo index.html 
2) para buscar algún producto solamente es necesario escribir una palabra relacionada a lo que deseamos encontrar
3) apretar el botón buscar o presionar enter

ver estadística
1) abrir el archivo estadistica.html
2) la información cargara automáticamente y veremos en la primera posición el id del producto, su titulo la cantidad de veces que ha aparecido en una busqueda y finalmente las palabras buscadas que hicieron aparecer el producto con la cantidad de veces entre parentesis


************ base de datos
create database prueba;
use prueba;
create table  if not exists productos(
   titulo varchar(255),
   descripcion text,
   fecha_inicio datetime,
   fecha_fin datetime,
   precio integer,
   imagen varchar(255),
   vendidos integer,
   tags varchar(255)
);
create table  if not exists busquedas(
id int auto_increment primary key,
busqueda varchar(255),
fecha timestamp default current_timestamp    
);

importar usando phpmyadmin, ya que desde linea de comando se generan variados problemas por el texto que contiene el archivo

delete from productos where titulo ='titulo';

ALTER TABLE `productos` ADD `id` INT NOT NULL AUTO_INCREMENT FIRST, ADD PRIMARY KEY (`id`);

create table if not exists  `producto_busqueda` (
id int auto_increment primary key,
id_producto int,
id_busqueda int,
foreign key fkidproducto(id_producto) references productos(id),
foreign key fkidbusqueda(id_busqueda) references busquedas(id)
);