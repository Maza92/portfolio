export const languages = {
  en: "En",
  es: "Es",
};

export const defaultLang = "en";
export const showDefaultLang = false;

export const ui = {
  en: {
    "website.title": "Luis Maza",
    "nav.home": "Maza",
    "nav.about": "About",
    "nav.projects": "Projects",

    "hero.title": "Luis Maza",
    "hero.subtitle": "Full Stack Developer",
    "hero.description":
      "Developer specializing in the Java ecosystem with Spring Boot to build scalable, high-performance web applications. I have solid experience developing dynamic user interfaces with Angular, and the versatility to adapt to other technologies such as NestJS and .NET.",
    "hero.viewProjects": "View Projects",
    "hero.contact": "Contact",

    "projects.title": "Recent Projects",
    "projects.viewAll": "View All Projects",
    "projects.authservice.title": "AuthService Microservice",
    "projects.authservice.description":
      "Authentication and authorization microservice with Spring Boot and JWT",

    "project.authservice.title": "AuthService Microservice",
    "project.authservice.subtitle":
      "Authentication and authorization microservice",
    "project.authservice.description":
      "Self-contained authentication and authorization system with Spring Boot and JWT.",
    "project.authservice.longDescription":
      "I developed a complete authentication and authorization microservice using Spring Boot and Java 21. This system is essentially a self-contained and ready-to-use service that handles everything related to user registration, login, and access control. It provides a complete solution that includes role and permission management, password management, and support for multiple languages (Spanish and English), all packaged in a single service. The system uses JSON Web Tokens (JWT) for authentication, allowing client applications to verify user identity without needing to query the database on each request.",
    "project.authservice.role": "Full Stack Developer",
    "project.authservice.timeline": "3 months",

    "project.features.authservice.1":
      "JWT authentication system with access and refresh tokens",
    "project.features.authservice.2":
      "User registration and login with email verification",
    "project.features.authservice.3": "Role and permission management system",
    "project.features.authservice.4": "Password recovery via email",
    "project.features.authservice.5":
      "Session management with configurable limits",
    "project.features.authservice.6":
      "Multi-language support (Spanish and English)",
    "project.features.authservice.7": "Password encryption with BCrypt",
    "project.features.authservice.8": "Token revocation and blacklisting",
    "project.features.authservice.9":
      "Email notifications with Thymeleaf templates",
    "project.features.authservice.10": "REST API documented with Swagger",
    "project.features.authservice.11": "Custom exception handling system",
    "project.features.authservice.12":
      "Database connection pooling with HikariCP",

    "project.challenges.authservice.1":
      "Implement secure session management with JWT tokens and prevent unauthorized access",
    "project.challenges.authservice.2":
      "Create a custom exception handling system for better error management",
    "project.challenges.authservice.3":
      "Design a scalable architecture that can work as both template and microservice",

    "project.solutions.authservice.1":
      "Created a JWT token management system with separate tables for storing tokens and implementing session limits with automatic cleanup",
    "project.solutions.authservice.2":
      "Developed a global exception handler with custom exceptions and an exception factory for consistent error management",
    "project.solutions.authservice.3":
      "Implemented a modular architecture with Spring Boot that can be easily integrated as a microservice or used as a project template",

    "skills.title": "Skills",
    "skills.backend.title": "Backend",
    "skills.frontend.title": "Frontend",
    "skills.tools.title": "Tools",
    "skills.competencies.title": "Competencies",

    "contact.title": "Let's Work Together?",
    "contact.description":
      "I'm available for new opportunities and interesting projects. Contact me and let's talk about how I can help you!",
    "contact.email": "Send Email",
    "contact.linkedin": "LinkedIn",

    "project.nav.home": "Home",
    "project.nav.overview": "Overview",
    "project.nav.features": "Features",
    "project.nav.challenges": "Challenges",
    "project.nav.technologies": "Technologies",
    "project.nav.gallery": "Gallery",
    "project.nav.navigation": "Navigation",
    "project.nav.projectInfo": "Project Information",
    "project.nav.duration": "Duration:",
    "project.nav.role": "My Role:",
    "project.nav.liveDemo": "View Live Demo",
    "project.nav.repository": "View Repository",

    "project.section.overview": "Project Overview",
    "project.section.features": "Main Features",
    "project.section.challenges": "Technical Challenges",
    "project.section.technologies": "Technologies Used",
    "project.section.gallery": "Project Gallery",
    "project.section.challenge": "Challenge",
    "project.section.solution": "Solution:",
  },
  es: {
    "website.title": "Luis Maza",
    "nav.home": "Maza",
    "nav.about": "Acerca de",
    "nav.projects": "Proyectos",

    "hero.title": "Luis Maza",
    "hero.subtitle": "Desarrollador Full Stack",
    "hero.description":
      "Desarrollador especializado en el ecosistema Java con Spring Boot para la construcción de aplicaciones web escalables y de alto rendimiento. Cuento con sólida experiencia en el desarrollo de interfaces de usuario dinámicas con Angular y poseo la versatilidad para adaptarme a otras tecnologías como NestJS y .NET.",
    "hero.viewProjects": "Ver Proyectos",
    "hero.contact": "Contacto",

    "projects.title": "Proyectos Recientes",
    "projects.viewAll": "Ver Todos los Proyectos",
    "projects.authservice.title": "Microservicio AuthService",
    "projects.authservice.description":
      "Microservicio de autenticación y autorización con Spring Boot y JWT",

    "project.authservice.title": "Microservicio AuthService",
    "project.authservice.subtitle":
      "Microservicio de autenticación y autorización",
    "project.authservice.description":
      "Sistema de autenticación y autorización independiente con Spring Boot y JWT.",
    "project.authservice.longDescription":
      "Desarrollé un microservicio completo de autenticación y autorización usando Spring Boot y Java 21. Este sistema es esencialmente un servicio independiente y listo para usar que maneja todo lo relacionado con el registro de usuarios, inicio de sesión y control de acceso. Proporciona una solución completa que incluye gestión de roles y permisos, gestión de contraseñas y soporte para múltiples idiomas (español e inglés), todo empaquetado en un solo servicio. El sistema utiliza JSON Web Tokens (JWT) para la autenticación, permitiendo a las aplicaciones cliente verificar la identidad del usuario sin necesidad de consultar la base de datos en cada solicitud.",
    "project.authservice.role": "Desarrollador Full Stack",
    "project.authservice.timeline": "3 meses",

    "project.features.authservice.1":
      "Sistema de autenticación JWT con tokens de acceso y actualización",
    "project.features.authservice.2":
      "Registro e inicio de sesión de usuarios con verificación por email",
    "project.features.authservice.3": "Sistema de gestión de roles y permisos",
    "project.features.authservice.4": "Recuperación de contraseña por email",
    "project.features.authservice.5":
      "Gestión de sesiones con límites configurables",
    "project.features.authservice.6": "Soporte multiidioma (español e inglés)",
    "project.features.authservice.7": "Encriptación de contraseñas con BCrypt",
    "project.features.authservice.8": "Revocación y lista negra de tokens",
    "project.features.authservice.9":
      "Notificaciones por email con plantillas Thymeleaf",
    "project.features.authservice.10": "API REST documentada con Swagger",
    "project.features.authservice.11":
      "Sistema de manejo de excepciones personalizado",
    "project.features.authservice.12":
      "Pool de conexiones de base de datos con HikariCP",

    "project.challenges.authservice.1":
      "Implementar gestión segura de sesiones con tokens JWT y prevenir accesos no autorizados",
    "project.challenges.authservice.2":
      "Crear un sistema de manejo de excepciones personalizado para mejor gestión de errores",
    "project.challenges.authservice.3":
      "Diseñar una arquitectura escalable que pueda funcionar tanto como plantilla como microservicio",

    "project.solutions.authservice.1":
      "Creé un sistema de gestión de tokens JWT con tablas separadas para almacenar tokens e implementar límites de sesión con limpieza automática",
    "project.solutions.authservice.2":
      "Desarrollé un manejador global de excepciones con excepciones personalizadas y una fábrica de excepciones para gestión consistente de errores",
    "project.solutions.authservice.3":
      "Implementé una arquitectura modular con Spring Boot que puede integrarse fácilmente como microservicio o usarse como plantilla de proyecto",

    "skills.title": "Habilidades",
    "skills.backend.title": "Backend",
    "skills.frontend.title": "Frontend",
    "skills.tools.title": "Herramientas",
    "skills.competencies.title": "Competencias",

    "contact.title": "¿Trabajamos Juntos?",
    "contact.description":
      "Estoy disponible para nuevas oportunidades y proyectos interesantes. ¡Contáctame y hablemos sobre cómo puedo ayudarte!",
    "contact.email": "Enviar Email",
    "contact.linkedin": "LinkedIn",

    "project.nav.home": "Inicio",
    "project.nav.overview": "Resumen",
    "project.nav.features": "Características",
    "project.nav.challenges": "Desafíos",
    "project.nav.technologies": "Tecnologías",
    "project.nav.gallery": "Galería",
    "project.nav.navigation": "Navegación",
    "project.nav.projectInfo": "Información del Proyecto",
    "project.nav.duration": "Duración:",
    "project.nav.role": "Mi Rol:",
    "project.nav.liveDemo": "Ver Demo en Vivo",
    "project.nav.repository": "Ver Repositorio",

    "project.section.overview": "Resumen del Proyecto",
    "project.section.features": "Características Principales",
    "project.section.challenges": "Desafíos Técnicos",
    "project.section.technologies": "Tecnologías Utilizadas",
    "project.section.gallery": "Galería del Proyecto",
    "project.section.challenge": "Desafío",
    "project.section.solution": "Solución:",
  },
} as const;
