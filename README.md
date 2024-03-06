# Proyecto de Gestión de Productos

Este proyecto consiste en una aplicación de gestión de productos que permite agregar nuevos productos, verificar la disponibilidad de productos por su código, y obtener una lista de todos los productos disponibles.

## Descripción

La aplicación de Gestión de Productos está diseñada para ayudar a los usuarios a administrar el inventario de productos de manera eficiente. Permite agregar nuevos productos con información detallada, como título, descripción, precio, imagen, código y stock. Además, proporciona la funcionalidad de buscar productos por su código único y listar todos los productos disponibles.

## Uso

Puedes probar la funcionalidad de la aplicación utilizando herramientas como `curl` en Bash. Aquí tienes algunos ejemplos de cómo puedes interactuar con la aplicación utilizando `curl`:
Ademas de npm y node

Contribución
¡Tu contribución es bienvenida! Si deseas contribuir a este proyecto, por favor sigue estos pasos:

Haz un fork del repositorio
Crea una nueva rama (git checkout -b feature/MejoraGenial)
Realiza tus cambios y haz commit (git commit -am 'Agrega una Mejora Genial')
Haz push a la rama (git push origin feature/MejoraGenial)
Abre un Pull Request

Puedes probar la funcionalidad de la aplicación utilizando herramientas como `curl` en Bash. Aquí tienes algunos ejemplos de cómo puedes interactuar con la aplicación utilizando `curl`:
Ademas de npm y node

- Para obtener todos los productos:
  ```bash
  curl http://localhost:8080/products

  - Para obtener un max de 05 productos:
  ```bash
  curl http://localhost:8080/products?limit=5
  
Gracias por contribuir al proyecto!

