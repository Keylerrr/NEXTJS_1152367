RESPUESTAS:


1. ¿QUÉ VENTAJAS TIENE USAR REACT FRENTE A TRABAJAR SOLO CON JAVASCRIPT PURO PARA INTERFACES WEB?

Cuando empezamos con JavaScript puro, tenemos que manipular el DOM directamente para cada cambio. React nos da una abstracción que simplifica todo el proceso.

La gran diferencia está en el enfoque: con JS puro es imperativo ("selecciona este elemento, cambia su texto, añade una clase"), mientras React es declarativo ("cuando el estado sea X, muestra Y"). Esto hace el código más predecible y fácil de mantener.

Además, el modelo de componentes nos permite crear piezas reutilizables con su propia lógica y estado. En proyectos grandes, esto es crucial para no repetir código constantemente. El ecosistema de librerías y herramientas alrededor de React también resuelve problemas que con JS puro tendríamos que solucionar desde cero.



2. ¿QUÉ BENEFICIOS OFRECE NEXT.JS AL TRABAJAR SOBRE REACT?

Si React es como tener excelentes materiales de construcción, Next.js es como contratar a un arquitecto que ya sabe cómo organizarlos optimalmente.

Next.js añade capacidades de renderizado del lado del servidor, lo que mejora mucho el SEO y el rendimiento inicial de la aplicación. También simplifica el enrutamiento usando la estructura de carpetas, y permite crear APIs dentro del mismo proyecto.

Las optimizaciones automáticas que incluye, como la división de código y el compilador TurboPack, hacen que las aplicaciones sean más rápidas sin que tengamos que configurar nada manualmente. Es como tener un framework completo encima de React.



3. ¿QUÉ SIGNIFICA QUE NEXT.JS TENGA UN APP ROUTER Y POR QUÉ SE RECOMIENDA USARLO?

El App Router es la nueva forma de crear rutas en Next.js usando la carpeta app/. Lo interesante es que no son solo rutas, sino un sistema más inteligente donde podemos definir layouts, estados de carga y manejo de errores para cada segmento de la aplicación.

Se recomienda porque está construido alrededor de los React Server Components, que permiten ejecutar más código en el servidor, reduciendo la cantidad de JavaScript que se envía al cliente. Esto resulta en aplicaciones más rápidas y con mejor experiencia de usuario.



4. ¿QUÉ DIFERENCIA HAY ENTRE CLIENT COMPONENTS Y SERVER COMPONENTS EN NEXT.JS?

Esta distinción es fundamental en el App Router:

- Server Components: Se renderizan en el servidor, no envían JavaScript al cliente, y pueden acceder directamente a bases de datos o APIs internas. Son ideales para componentes que muestran datos que no requieren interactividad.

- Client Components: Se ejecutan en el navegador, permiten interactividad (useState, useEffect, eventos), y envían JavaScript al cliente. Se usan cuando necesitamos manejar estado del usuario o interactividad.

La mentalidad ahora es: "por defecto, usar Server Components", y solo marcar como client components aquellos que realmente necesitan ejecutarse en el navegador.



5. ¿POR QUÉ CREES QUE EN DESARROLLO PROFESIONAL SE USAN REPOSITORIOS PÚBLICOS O PRIVADOS EN GITHUB EN LUGAR DE SOLO TRABAJAR EN CARPETAS LOCALES?

Trabajar solo en carpetas locales sería como escribir un trabajo importante en un documento sin copias de seguridad. Los repositorios en GitHub resuelven varios problemas críticos:

- Trabajo colaborativo: Permiten que varias personas trabajen en el mismo proyecto sin pisar los cambios de los demás, mediante pull requests y revisión de código.

- Control de versiones: Git mantiene un historial completo de todos los cambios, permitiendo volver a versiones anteriores si algo sale mal.

- Backup automático: El código queda respaldado en la nube, protegiéndolo de fallos en equipos locales.

- Integración con CI/CD: Permite automatizar pruebas, builds y despliegues cada vez que se hacen cambios.

En el desarrollo profesional, GitHub no es solo almacenamiento, es la plataforma central de colaboración y gestión de proyectos.
