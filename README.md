[![moa](https://media.licdn.com/dms/image/v2/C4D0BAQFGuvqzmHz1uA/company-logo_200_200/company-logo_200_200/0/1677846265893/moa_marketing_online_academy_logo?e=1753315200&v=beta&t=toxYTov5PP1uLX4ZahX5gnUy8-DrUggZNK6Q319PUo4 "moa")](https://media.licdn.com/dms/image/v2/C4D0BAQFGuvqzmHz1uA/company-logo_200_200/company-logo_200_200/0/1677846265893/moa_marketing_online_academy_logo?e=1753315200&v=beta&t=toxYTov5PP1uLX4ZahX5gnUy8-DrUggZNK6Q319PUo4 "moa")


# Salesforce DX Project: Proximos Pasos

Ahora que ha creado un proyecto de Salesforce DX, ¿qué sigue? Aquí hay algunos recursos de documentación para comenzar.

## Como deseas desplegar los cambios?

¿Quiere implementar un conjunto de cambios o crear una aplicación independiente? Elige un [development model](https://developer.salesforce.com/tools/vscode/en/user-guide/development-models).

## Configura tu Salesforce DX Project

El archivo `sfdx-project.json` contiene información de configuración útil para su proyecto. Ver [Salesforce DX Project Configuration](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_config.htm) in the _Salesforce DX Developer Guide_ for details about this file.

## Lee mas acerca de ello

- [Salesforce Extensions Documentation](https://developer.salesforce.com/tools/vscode/)
- [Salesforce CLI Setup Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm)
- [Salesforce DX Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro.htm)
- [Salesforce CLI Command Reference](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference.htm)


## Pasos para crear el entorno
Una vez ya tengas instalado VS code, SF CLI y las extensiones de Salesforce, clona o descarga este repo en tu local y sigue las siguientes instrucciones:

**Descarga el repo** 
>  git clone https://github.com/lordkortex/AquaserviceLwc

- Cambiar el email en el fichero	**config\project-scratch-def.json**.
- Tener en cuenta si la edición es "**Developer**" o "**Enterprise**"

**Authoriza un ORG** 
>  sf org login web -d -a myhuborg
o
>  en Vs Code presiona Ctrl+ Shift + P  -> Authorize ORG

**Crea**
>  sf org create scratch -f config/project-scratch-def.json -a "AQUASERVICE_LWC_01" --name "AQUASERVICE_LWC_01"  -y 29 -v "TU_DEV_HUB"  --json

**Despliega**
>  sf project deploy start
