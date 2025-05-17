# Salesforce DX Project: Proximos Pasos

Ahora que ha creado un proyecto de Salesforce DX, ¿qué sigue? Aquí hay algunos recursos de documentación para comenzar.

## Como deseas desplegar los cambios?

¿Quiere implementar un conjunto de cambios o crear una aplicación independiente? Elige un [development model](https://developer.salesforce.com/tools/vscode/en/user-guide/development-models).

## Configure Your Salesforce DX Project

El archivo `sfdx-project.json` contiene información de configuración útil para su proyecto. Ver [Salesforce DX Project Configuration](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_config.htm) in the _Salesforce DX Developer Guide_ for details about this file.

## Lee mas acerca de ello

- [Salesforce Extensions Documentation](https://developer.salesforce.com/tools/vscode/)
- [Salesforce CLI Setup Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm)
- [Salesforce DX Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro.htm)
- [Salesforce CLI Command Reference](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference.htm)


## Pasos para crear el entorno
Una vez ya tengas instalado VS code, SF CLI y las extensiones de Salesforce, clona o descarga este repo en tu local y sigue las siguientes instrucciones:

- **Authoriza un ORG** -> Ctrl+ Shift + P  -> Authorize ORG
- Cambiar el email en el fichero	**config\project-scratch-def.json**
- Tener en cuenta si la edición es "**Developer**" o "**Enterprise**"
 - Desde la carpeta raiz en tu local, ejecutar el siguiente comando, reemplazando con el nombre de tu "**TU_DEV_HUB**":

>  sf org create scratch -f config/project-scratch-def.json -a "AQUASERVICE_LWC_01" --name "AQUASERVICE_LWC_01"  -y 29 -v "TU_DEV_HUB"  --json
