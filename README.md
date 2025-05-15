# typescript-course

Este proyecto es un ejemplo de configuración y ejecución de código TypeScript utilizando distintas opciones con ts-node.
Incluye la estructura típica con carpetas src/ y dist/, un tsconfig.json y las dependencias necesarias.

## 📂 Estructura del Proyecto

.
├─ src/
│ └─ index.ts
├─ .gitignore
├─ package.json
├─ tsconfig.json
└─ README.md

src/: Código fuente TypeScript.

dist/: Código compilado (no versionado).

tsconfig.json: Configuración del compilador.

.gitignore: Archivos y carpetas ignorados por Git.

package.json: Dependencias y scripts.

README.md: Documentación del proyecto.

# ⚙️ Ejecución del Código

## Opción 1: Con npx

```bash
npx ts-node src/index.ts
```

## Opción 2: Script en package.json

En package.json agrega:

```bash
"scripts": {
  "start": "ts-node src/index.ts"
}
```

Luego:

npm run start

## Opción 3: Instalación global

En package.json agrega:

```bash
npm install -g ts-node
ts-node src/index.ts
```

## Comparativo de Instalación

Para ejecutar tu código TypeScript con ts-node, dispones de varias opciones. A continuación se describen en detalle, en párrafos con sus respectivos títulos, para ayudarte a elegir la más adecuada según tu flujo de trabajo:

## Opción 1: npx

Usando:

```bash
npx ts-node src/index.ts
```

invocas la versión local de ts-node (la instalada en node_modules/.bin).

### Ventajas: No requiere instalación global, siempre emplea la versión configurada en el proyecto.

Consideraciones: Es necesario anteponer npx en cada ejecución y depende de npm (versión 5.2 o superior).

## Opción 2: Script en package.json

Definiendo en package.json:

```bash
"scripts": {
  "start": "ts-node src/index.ts"
}
```

Puedes lanzar con npm run start.

### Ventajas: Comando corto, centraliza la configuración en un único archivo.

Consideraciones: Requiere mantener actualizado el script y editar el JSON del proyecto.

## Opción 3: Instalación global

Instalando globalmente con:

```bash
npm install -g ts-node
```

luego ejecutas:

```bash
ts-node src/index.ts
```

### Ventajas: Comando directo sin prefijos adicionales, útil si usas ts-node en varios proyectos.

### Consideraciones: Puede provocar desincronización de versiones entre proyectos y requiere permisos para instalaciones globales.

### Notas sobre rutas

### Asegúrate de no anteponer una barra inicial en la ruta. La forma correcta siempre es:

ts-node src/index.ts
