# Welcome to Aquaservice LWC!

## Pasos para crear el entorno

Para crear una scratch org relacionada con tu  DEVELOPER o PRODUCTION desbes seguir los siguientes pasos

- En la cuenta DEVELOPER habilitar setup -> Devhub
- Autorizar la cuenta devhub desde Visual Studio Code -> Ctrl + Shift + P -> Authorize an Org -> Esto abrira la pagina web para autenticarte en tu entorno.
- Cambiar el correo en el fichero	**config\project-scratch-def.json**
- Tener en cuenta si la edición es “Developer” o “Enterprise”
- Desde la carpeta raiz en tu local, ejecutar el siguiente comando, reemplazando con el nombre de tu DEVHUB:


>  sf org create scratch -f config/project-scratch-def.json -a "AQUASERVICE_LWC_01" --name "AQUASERVICE_LWC_01"  -y 29 -v "TU_DEV_HUB"  --json
