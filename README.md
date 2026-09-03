# Ejemplo Git

Proyecto de ejemplo para practicar el uso de Git (comandos básicos, ramas, commits y flujo de trabajo), construido sobre una base de [Next.js](https://nextjs.org) con TypeScript.

## Comandos básicos de Git

```bash
git status          # ver el estado del repositorio
git add <archivo>    # agregar cambios al área de staging
git commit -m "mensaje"   # crear un commit
git log              # ver el historial de commits
```

## Ramas

```bash
git branch <nombre>       # crear una rama
git checkout <nombre>     # cambiar de rama
git checkout -b <nombre>  # crear y cambiar en un solo paso
git merge <nombre>        # fusionar una rama
```

## Trabajar con un remoto

```bash
git remote add origin <url>
git push -u origin main
git pull
```

## Getting Started (Next.js)

Este proyecto fue creado con [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

Primero, corre el servidor de desarrollo:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

Puedes empezar a editar la página modificando `src/app/page.tsx`. La página se actualiza automáticamente al editar el archivo.

### Más información

- [Next.js Documentation](https://nextjs.org/docs) - aprende sobre las features y la API de Next.js.
- [Learn Next.js](https://nextjs.org/learn) - un tutorial interactivo de Next.js.
