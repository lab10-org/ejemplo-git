# Ejemplo Git

Proyecto de ejemplo para practicar el uso de Git: comandos básicos, ramas, commits y flujo de trabajo.

## Comandos básicos

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
