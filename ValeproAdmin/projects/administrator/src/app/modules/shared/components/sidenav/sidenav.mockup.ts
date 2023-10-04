export default {
  MENU_DATA: [
    {
      name: 'Gestión del Sistema',
      icon: 'SystemManagement',
      subMenu: [
        { name: 'Roles y Funciones', route: 'Roles y Funciones' },
        {
          name: 'Formulario Registro de Usuarios',
          route: 'Formulario Registro de Usuarios',
        },
      ],
      subMenuVisible: false, //propiedad para controlar la visibilidad del submenú
    },

    {
      name: 'Gestión del Usuario',
      icon: '',
      subMenu: [
        {
          name: 'Crear usuario (individual)',
          route: 'Crear usuario (individual)',
        },
        {
          name: 'Crear y actualizar usuarios (masivo)',
          route: 'Crear y actualizar usuarios (masivo)',
        },
        {
          name: 'Consultar y gestionar usuarios',
          route: 'Consultar y gestionar usuarios',
        },
      ],
      subMenuVisible: false,
    },

    {
      name: 'Gestión de programas',
      icon: '',
      subMenu: [
        { name: 'Información general', route: '/program-management/#' },
        { name: 'Secciones', route: '/program-management/sections' },
      ],
      subMenuVisible: false,
    },

    {
      name: 'Gestión de misiones',
      icon: '',
      subMenu: [
        { name: 'Crear misión', route: 'Crear misión' },
        { name: 'Misiones activas', route: 'Misiones activas' },
        { name: 'Misiones cerradas', route: 'Misiones cerradas' },
        { name: 'Calificar misiones', route: 'Calificar misiones' },
      ],
      subMenuVisible: false,
    },

    {
      name: 'Gestión de estilos y presentación',
      icon: '',
      subMenu: [
        { name: 'Diseños de sistemas', route: 'Diseños de sistemas' },
        { name: 'Configurar pie de pagina', route: 'Configurar pie de pagina' },
      ],
      subMenuVisible: false,
    },
  ],
};
