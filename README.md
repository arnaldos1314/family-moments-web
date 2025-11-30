# Family Moments - Aplicación Web

## 🎯 Descripción
Versión web de tu aplicación iOS Family Moments, diseñada para fortalecer los lazos familiares mediante conversaciones significativas.

## ✨ Características Principales

### 8 Modos de Juego:
1. **Modo Clásico** 🎯 - Preguntas variadas para conocerse mejor
2. **Modo Rápido** ⚡ - Rondas de 60 segundos (con temporizador)
3. **Modo Profundo** 🌊 - Conversaciones reflexivas y significativas
4. **Modo Diversión** 🎉 - Preguntas ligeras y divertidas
5. **Modo Gratitud** 🙏 - Enfoque en el agradecimiento
6. **Modo Desafío** 🏆 - Gana puntos respondiendo creativamente
7. **Ruleta Sorpresa** 🎰 - Categorías aleatorias
8. **Cuenta Historias** 📖 - Historias colaborativas

### Sistema de Gamificación:
- ✅ Puntos acumulables
- ✅ Sistema de niveles
- ✅ Racha de respuestas (streak)
- ✅ Estadísticas personales
- ✅ Persistencia de datos (localStorage)

### Base de Datos de Preguntas:
- 250+ preguntas organizadas en 8 categorías:
  - Conocimiento
  - Gratitud
  - Diversión
  - Reflexión
  - Recuerdos
  - Futuro
  - Valores
  - Creatividad

## 🚀 Cómo Usar Localmente

### Opción 1: Servidor Simple Python
```bash
cd family-moments-web
python3 -m http.server 8080
```
Luego abre: http://localhost:8080

### Opción 2: Servidor Node.js (http-server)
```bash
npm install -g http-server
cd family-moments-web
http-server -p 8080
```

### Opción 3: Live Server (VS Code)
1. Instala la extensión "Live Server" en VS Code
2. Abre la carpeta `family-moments-web`
3. Click derecho en `index.html` → "Open with Live Server"

## 🌐 Deploy en Vercel

### Paso 1: Preparar el proyecto
```bash
# Crear repositorio en GitHub
git init
git add .
git commit -m "Initial commit - Family Moments Web App"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/family-moments-web.git
git push -u origin main
```

### Paso 2: Configurar Vercel
1. Ve a [vercel.com](https://vercel.com)
2. Conecta tu cuenta de GitHub
3. Click en "New Project"
4. Selecciona el repositorio `family-moments-web`
5. Configuración:
   - Framework Preset: `Other`
   - Build Command: (dejar vacío)
   - Output Directory: `./`
6. Click en "Deploy"

### Paso 3: Configuración Personalizada
Crear archivo `vercel.json` en la raíz:
```json
{
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

## 📱 Características Técnicas

### Stack Tecnológico:
- **Frontend:** React 18 (sin build, usando Babel standalone)
- **Estilos:** Tailwind CSS (CDN)
- **Iconos:** Emojis nativos
- **Fuentes:** Google Fonts (Poppins)
- **Persistencia:** localStorage API

### Responsive Design:
- ✅ Mobile-first approach
- ✅ Diseño adaptativo para tablets
- ✅ Optimizado para desktop
- ✅ Touch-friendly interface

### Rendimiento:
- ⚡ Sin dependencias de npm
- ⚡ Carga rápida (CDN)
- ⚡ Sin compilación necesaria
- ⚡ Funciona offline (después de primera carga)

## 🎨 Personalización

### Colores
Edita las clases de gradiente en `app.jsx`:
```javascript
color: 'from-blue-500 to-blue-600'  // Cambia estos valores
```

### Preguntas
Agrega o modifica preguntas en el objeto `questionsDatabase`:
```javascript
const questionsDatabase = {
  tuCategoria: [
    "Tu pregunta aquí...",
    // Más preguntas
  ]
};
```

### Modos de Juego
Crea nuevos modos en el array `gameModes`:
```javascript
{
  id: 'tuModo',
  name: 'Tu Modo',
  icon: '🎮',
  description: 'Descripción del modo',
  color: 'from-color-500 to-color-600'
}
```

## 📊 Datos del Usuario

Los datos se guardan automáticamente en localStorage:
- Puntos totales
- Preguntas respondidas
- Nivel actual
- Racha máxima

Para resetear datos:
```javascript
localStorage.removeItem('familyMomentsStats');
```

## 🔄 Próximas Mejoras Sugeridas

1. **Backend Integration:**
   - Sistema de autenticación
   - Base de datos en la nube
   - Sincronización multi-dispositivo

2. **Nuevas Features:**
   - Modo multijugador en línea
   - Compartir estadísticas
   - Logros y badges
   - Temas personalizables
   - Audio/música de fondo

3. **Monetización:**
   - Preguntas premium
   - Modos de juego exclusivos
   - Personalización avanzada
   - Exportar estadísticas PDF

## 📝 Estructura de Archivos

```
family-moments-web/
├── index.html          # HTML principal con estilos CSS
├── app.jsx             # Aplicación React completa
├── README.md           # Este archivo
└── vercel.json         # Configuración de Vercel (opcional)
```

## 🐛 Solución de Problemas

### Las preguntas se repiten:
- El sistema filtra preguntas ya usadas
- Se resetea automáticamente cuando todas fueron usadas

### No se guardan los datos:
- Verifica que localStorage esté habilitado en el navegador
- Revisa la consola del navegador (F12) para errores

### El temporizador no funciona:
- Solo está activo en "Modo Rápido"
- Verifica que JavaScript esté habilitado

## 📞 Soporte

Para preguntas o sugerencias sobre la aplicación web, consulta el código fuente o adapta según tus necesidades.

## 📄 Licencia

Aplicación desarrollada por Arnaldo para uso personal y familiar.

---

**¡Disfruta fortaleciendo los lazos familiares! 👨‍👩‍👧‍👦**
