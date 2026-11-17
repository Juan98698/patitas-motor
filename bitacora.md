 (actual) Se mueve en cada nodo
||cabeza||atencion1||atencion1.siguiente(atencion2)|| --> ||actual.siguiente|atencion2||atencion2.siguiente(atencion3)||-->
||actual.siguiente|atencion3|NULL||

----------------------Después “pierde” un enlace a propósito (por ejemplo, asigna null al siguiente del primer nodo) y explica qué ocurre con el recorrido y por qué.-------------------------------------------------

Al asignar siguiente como null a atencion1 se pierden los demas nodos, es decir solo se puede acceder al primer nodo asi como solo se puede acceder al valor de la propiedad 'costo' del primer nodo, de forma que los otros dos siguientes se pierden, esto se debe a que rompemos el enlace al apuntar a null y no atencion2(siguiente nodo).

Los nodos atencion2 y atencion3 siguen existiendo en la memoria de la computadora (porque están en sus variables), pero para la lista enlazada y el recorrido a partir de cabeza, quedan completamente inaccesibles / huérfanos, ya que la única vía de navegación era la referencia siguiente.