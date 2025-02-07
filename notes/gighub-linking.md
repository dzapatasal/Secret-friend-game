Aquí tienes **todas las líneas de código** con sus respectivos comentarios explicando cada paso para subir tu trabajo (incluyendo carpetas) al repositorio de GitHub desde la terminal:  

```bash
# 1. Abrir Git Bash o la terminal y navegar hasta la carpeta del repositorio
cd /d/D:/alura-latam/Challenge/base-repository

# 2. Inicializar el repositorio Git (si aún no se ha hecho)
git init

# 3. Agregar todos los archivos y carpetas al seguimiento de Git
git add .

# 4. Confirmar los cambios con un mensaje descriptivo
git commit -m "Agregando carpeta assets y archivos"

# 5. Conectar el repositorio local con el repositorio en GitHub (si no está vinculado)
git remote add origin https://github.com/tu-usuario/tu-repositorio.git
# (Reemplaza "tu-usuario" y "tu-repositorio", ya creado previamente en gighub)

# 6. Subir los cambios al repositorio en la rama "main"
git push -u origin main

# (Si la rama es "master" en lugar de "main", usa este comando)
# git push -u origin master
```

---

🔹 **Notas importantes:**  
- **Solo usa `git init` si es la primera vez que configuras el repositorio local.**  
- **Si `git remote add origin` ya está configurado, no lo vuelvas a ejecutar o dará error.**  
  - Puedes verificar si ya está vinculado con:  
    ```bash
    git remote -v
    ```
- **Si GitHub te pide autenticación**, usa tu **token personal de acceso** en lugar de tu contraseña.  
- **Si hay errores de permisos o autenticación**, puedes forzar la subida con:  
  ```bash
  git push -u origin main --force
  ```
