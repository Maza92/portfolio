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

    "projects.smartservebackend.title": "Smart Serve Backend",
    "projects.smartservebackend.description":
      "Restaurant management system with Spring Boot featuring POS, inventory, and real-time kitchen operations",

    "project.smartservebackend.title": "Smart Serve Backend",
    "project.smartservebackend.subtitle":
      "Restaurant Management System Backend",
    "project.smartservebackend.description":
      "Comprehensive restaurant management system with Spring Boot and Java 21.",
    "project.smartservebackend.longDescription":
      "I developed a comprehensive restaurant management system using Spring Boot 3 and Java 21. This system provides a complete point-of-sale (POS) solution with integrated inventory management, real-time kitchen operations, financial reporting, and staff performance analytics. The backend handles everything from order management and cash register operations to inventory control and business intelligence, all with real-time WebSocket integration for live updates across the restaurant operations.",
    "project.smartservebackend.role": "Full Stack Developer",
    "project.smartservebackend.timeline": "4 months",

    "project.features.smartservebackend.1":
      "Complete POS system with table assignment and order tracking",
    "project.features.smartservebackend.2":
      "Real-time kitchen operations with WebSocket integration",
    "project.features.smartservebackend.3":
      "Advanced inventory system with recipe-based stock management",
    "project.features.smartservebackend.4":
      "Cash register management with session control and audit trail",
    "project.features.smartservebackend.5":
      "Business intelligence with sales analytics and performance metrics",
    "project.features.smartservebackend.6":
      "Role-based access control with JWT authentication",
    "project.features.smartservebackend.7":
      "Multi-language support (English/Spanish)",
    "project.features.smartservebackend.8":
      "Real-time dashboard with cached data and live updates",
    "project.features.smartservebackend.9":
      "Automatic inventory deduction based on recipes",
    "project.features.smartservebackend.10":
      "Financial reporting with payment method analysis",
    "project.features.smartservebackend.11":
      "Staff performance tracking and efficiency metrics",
    "project.features.smartservebackend.12":
      "REST API documentation with Swagger UI",

    "project.challenges.smartservebackend.1":
      "Design a scalable architecture handling real-time operations across multiple restaurant roles simultaneously",
    "project.challenges.smartservebackend.2":
      "Implement complex inventory management with recipe-based automatic deductions and unit conversions",
    "project.challenges.smartservebackend.3":
      "Create real-time kitchen operations with WebSocket integration while maintaining data consistency",

    "project.solutions.smartservebackend.1":
      "Implemented event-driven architecture with WebSocket integration and role-based access control, ensuring real-time updates without compromising security",
    "project.solutions.smartservebackend.2":
      "Developed sophisticated inventory system with JPA specifications for complex filtering, automatic stock calculations based on recipes, and real-time dashboard caching",
    "project.solutions.smartservebackend.3":
      "Created comprehensive kitchen workflow with STOMP protocol for real-time communication, state management for order progression, and automatic inventory updates",

    // Smart Serve Frontend
    "projects.smartservefrontend.title": "Smart Serve Frontend",
    "projects.smartservefrontend.description":
      "Modern Angular 19 restaurant interface with real-time updates, mobile-first design, and multi-role support",

    "project.smartservefrontend.title": "Smart Serve Frontend",
    "project.smartservefrontend.subtitle":
      "Restaurant Management Frontend Application",
    "project.smartservefrontend.description":
      "Modern responsive web application built with Angular 19 for restaurant management.",
    "project.smartservefrontend.longDescription":
      "I built a modern, responsive web application using Angular 19 that provides a comprehensive restaurant management interface. Designed for multi-role usage (Admin, Cashier, Waiter, Cook, Baker), it offers real-time updates, intuitive workflows, and mobile-first design optimized for restaurant operations. The application includes complete POS functionality, real-time kitchen operations, inventory management, and business analytics, all integrated with WebSocket for live updates and Capacitor for native mobile capabilities.",
    "project.smartservefrontend.role": "Frontend Developer",
    "project.smartservefrontend.timeline": "3 months",

    "project.features.smartservefrontend.1":
      "Multi-role interface with responsive design optimized for tablets and mobile",
    "project.features.smartservefrontend.2":
      "Real-time WebSocket integration for kitchen operations and inventory alerts",
    "project.features.smartservefrontend.3":
      "Complete POS system with order context management and table assignment",
    "project.features.smartservefrontend.4":
      "Mobile-first design with Capacitor integration for native capabilities",
    "project.features.smartservefrontend.5":
      "Interactive dashboards with ApexCharts for sales and inventory analytics",
    "project.features.smartservefrontend.6":
      "Kitchen module with real-time order display and status management",
    "project.features.smartservefrontend.7":
      "Cash register operations with session management and reconciliation",
    "project.features.smartservefrontend.8":
      "Inventory management with live metrics and movement tracking",
    "project.features.smartservefrontend.9":
      "Advanced reporting with business intelligence and performance analytics",
    "project.features.smartservefrontend.10":
      "JWT authentication with automatic token refresh and role-based access",
    "project.features.smartservefrontend.11":
      "Custom navigation system optimized for restaurant workflows",
    "project.features.smartservefrontend.12":
      "Persistent order state across navigation with local storage backup",

    "project.challenges.smartservefrontend.1":
      "Create a mobile-first interface that works efficiently across different restaurant roles with varying workflow requirements",
    "project.challenges.smartservefrontend.2":
      "Implement real-time updates across multiple modules while maintaining optimal performance and user experience",
    "project.challenges.smartservefrontend.3":
      "Design a persistent order management system that preserves context across complex navigation flows",

    "project.solutions.smartservefrontend.1":
      "Developed responsive design with Tailwind CSS and custom component library, implementing role-based UI rendering with Angular's powerful directive system",
    "project.solutions.smartservefrontend.2":
      "Integrated rx-stomp for WebSocket communication with automatic reconnection, event-driven state updates, and optimized change detection strategies",
    "project.solutions.smartservefrontend.3":
      "Built sophisticated order context service with BehaviorSubject state management, local storage persistence, and multi-step workflow support",
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

    "projects.smartservebackend.title": "Smart Serve Backend",
    "projects.smartservebackend.description":
      "Sistema de gestión de restaurantes con Spring Boot que incluye POS, inventario y operaciones de cocina en tiempo real",

    "project.smartservebackend.title": "Smart Serve Backend",
    "project.smartservebackend.subtitle":
      "Sistema Backend de Gestión de Restaurantes",
    "project.smartservebackend.description":
      "Sistema integral de gestión de restaurantes con Spring Boot y Java 21.",
    "project.smartservebackend.longDescription":
      "Desarrollé un sistema integral de gestión de restaurantes usando Spring Boot 3 y Java 21. Este sistema proporciona una solución completa de punto de venta (POS) con gestión integrada de inventario, operaciones de cocina en tiempo real, reportes financieros y análisis de rendimiento del personal. El backend maneja todo desde la gestión de pedidos y operaciones de caja registradora hasta control de inventario e inteligencia de negocio, todo con integración WebSocket en tiempo real para actualizaciones en vivo a través de las operaciones del restaurante.",
    "project.smartservebackend.role": "Desarrollador Full Stack",
    "project.smartservebackend.timeline": "4 meses",

    "project.features.smartservebackend.1":
      "Sistema POS completo con asignación de mesas y seguimiento de pedidos",
    "project.features.smartservebackend.2":
      "Operaciones de cocina en tiempo real con integración WebSocket",
    "project.features.smartservebackend.3":
      "Sistema de inventario avanzado con gestión de stock basada en recetas",
    "project.features.smartservebackend.4":
      "Gestión de caja registradora con control de sesiones y pista de auditoría",
    "project.features.smartservebackend.5":
      "Inteligencia de negocio con análisis de ventas y métricas de rendimiento",
    "project.features.smartservebackend.6":
      "Control de acceso basado en roles con autenticación JWT",
    "project.features.smartservebackend.7":
      "Soporte multiidioma (inglés/español)",
    "project.features.smartservebackend.8":
      "Dashboard en tiempo real con datos en caché y actualizaciones en vivo",
    "project.features.smartservebackend.9":
      "Deducción automática de inventario basada en recetas",
    "project.features.smartservebackend.10":
      "Reportes financieros con análisis de métodos de pago",
    "project.features.smartservebackend.11":
      "Seguimiento de rendimiento del personal y métricas de eficiencia",
    "project.features.smartservebackend.12":
      "Documentación de API REST con interfaz Swagger",

    "project.challenges.smartservebackend.1":
      "Diseñar una arquitectura escalable que maneje operaciones en tiempo real a través de múltiples roles de restaurante simultáneamente",
    "project.challenges.smartservebackend.2":
      "Implementar gestión compleja de inventario con deducciones automáticas basadas en recetas y conversiones de unidades",
    "project.challenges.smartservebackend.3":
      "Crear operaciones de cocina en tiempo real con integración WebSocket manteniendo consistencia de datos",

    "project.solutions.smartservebackend.1":
      "Implementé arquitectura dirigida por eventos con integración WebSocket y control de acceso basado en roles, asegurando actualizaciones en tiempo real sin comprometer la seguridad",
    "project.solutions.smartservebackend.2":
      "Desarrollé sistema sofisticado de inventario con especificaciones JPA para filtrado complejo, cálculos automáticos de stock basados en recetas y caché de dashboard en tiempo real",
    "project.solutions.smartservebackend.3":
      "Creé flujo integral de cocina con protocolo STOMP para comunicación en tiempo real, gestión de estado para progresión de pedidos y actualizaciones automáticas de inventario",

    // Smart Serve Frontend
    "projects.smartservefrontend.title": "Smart Serve Frontend",
    "projects.smartservefrontend.description":
      "Interfaz moderna con Angular 19 para restaurantes con actualizaciones en tiempo real, diseño móvil y soporte multi-rol",

    "project.smartservefrontend.title": "Smart Serve Frontend",
    "project.smartservefrontend.subtitle":
      "Aplicación Frontend de Gestión de Restaurantes",
    "project.smartservefrontend.description":
      "Aplicación web moderna y responsiva construida con Angular 19 para gestión de restaurantes.",
    "project.smartservefrontend.longDescription":
      "Construí una aplicación web moderna y responsiva usando Angular 19 que proporciona una interfaz integral de gestión de restaurantes. Diseñada para uso multi-rol (Admin, Cajero, Mesero, Cocinero, Panadero), ofrece actualizaciones en tiempo real, flujos intuitivos y diseño móvil optimizado para operaciones de restaurante. La aplicación incluye funcionalidad POS completa, operaciones de cocina en tiempo real, gestión de inventario y análisis de negocio, todo integrado con WebSocket para actualizaciones en vivo y Capacitor para capacidades móviles nativas.",
    "project.smartservefrontend.role": "Desarrollador Frontend",
    "project.smartservefrontend.timeline": "3 meses",

    "project.features.smartservefrontend.1":
      "Interfaz multi-rol con diseño responsivo optimizado para tablets y móviles",
    "project.features.smartservefrontend.2":
      "Integración WebSocket en tiempo real para operaciones de cocina y alertas de inventario",
    "project.features.smartservefrontend.3":
      "Sistema POS completo con gestión de contexto de pedidos y asignación de mesas",
    "project.features.smartservefrontend.4":
      "Diseño móvil con integración Capacitor para capacidades nativas",
    "project.features.smartservefrontend.5":
      "Dashboards interactivos con ApexCharts para análisis de ventas e inventario",
    "project.features.smartservefrontend.6":
      "Módulo de cocina con visualización de pedidos en tiempo real y gestión de estado",
    "project.features.smartservefrontend.7":
      "Operaciones de caja registradora con gestión de sesiones y reconciliación",
    "project.features.smartservefrontend.8":
      "Gestión de inventario con métricas en vivo y seguimiento de movimientos",
    "project.features.smartservefrontend.9":
      "Reportes avanzados con inteligencia de negocio y análisis de rendimiento",
    "project.features.smartservefrontend.10":
      "Autenticación JWT con actualización automática de tokens y acceso basado en roles",
    "project.features.smartservefrontend.11":
      "Sistema de navegación personalizado optimizado para flujos de restaurante",
    "project.features.smartservefrontend.12":
      "Estado persistente de pedidos a través de navegación con respaldo de almacenamiento local",

    "project.challenges.smartservefrontend.1":
      "Crear una interfaz móvil que funcione eficientemente a través de diferentes roles de restaurante con requerimientos de flujo variados",
    "project.challenges.smartservefrontend.2":
      "Implementar actualizaciones en tiempo real a través de múltiples módulos manteniendo rendimiento óptimo y experiencia de usuario",
    "project.challenges.smartservefrontend.3":
      "Diseñar un sistema persistente de gestión de pedidos que preserve contexto a través de flujos de navegación complejos",

    "project.solutions.smartservefrontend.1":
      "Desarrollé diseño responsivo con Tailwind CSS y biblioteca de componentes personalizada, implementando renderizado de UI basado en roles con el poderoso sistema de directivas de Angular",
    "project.solutions.smartservefrontend.2":
      "Integré rx-stomp para comunicación WebSocket con reconexión automática, actualizaciones de estado dirigidas por eventos y estrategias optimizadas de detección de cambios",
    "project.solutions.smartservefrontend.3":
      "Construí servicio sofisticado de contexto de pedidos con gestión de estado BehaviorSubject, persistencia de almacenamiento local y soporte de flujo multi-paso",
  },
} as const;
