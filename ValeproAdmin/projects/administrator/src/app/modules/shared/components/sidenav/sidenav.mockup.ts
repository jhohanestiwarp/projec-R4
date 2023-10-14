export default {
  MENU_DATA: [
    {
      name: 'Gestión del Sistema',
      icon: 'SystemManagement',
      subMenu: [
        { name: 'Roles y Funciones', route: '/main/system' },
        {
          name: 'Formulario Registro de Usuarios',
          route: '/main/user/create-users',
        },
      ],
      subMenuVisible: false, //propiedad para controlar la visibilidad del submenú
    },

    {
      name: 'Gestión del Usuario',
      icon: '',
      subMenu: [
        {
          name: 'Consultar y gestionar usuarios',
          route: '/main/user/users',
        },
        {
          name: 'Crear usuario (Individual)',
          route: 'Crear usuario (Individual)',
        },
        {
          name: 'Crear y actualizar usuarios (Masivo)',
          route: '/main/user/masive-users',
        }

      ],
      subMenuVisible: false,
    },

    {
      name: 'Gestión de programas',
      icon: '',
      subMenu: [
        { name: 'Información general', route: '/main/programs' },
        { name: 'Secciones', route: '/main/programs/program-sections' },
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
