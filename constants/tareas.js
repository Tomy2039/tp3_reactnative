// constants/tareas.js
export const TAREAS = [
  {
    id: '1',
    titulo: 'Reposición de productos',
    subtareas: [
      {
        id: '1-1',
        titulo: 'Revisar stock',
        descripcion: 'Verificar los productos agotados.',
        estado: 'Pendiente',
      },
      {
        id: '1-2',
        titulo: 'Colocar en estantería',
        descripcion: 'Reponer productos visibles.',
        estado: 'Hecho',
      },
    ],
  },
  {
    id: '2',
    titulo: 'Limpieza general',
    subtareas: [
      {
        id: '2-1',
        titulo: 'Barrer el kiosco',
        descripcion: 'Barrer el piso del sector de atención.',
        estado: 'Pendiente',
      },
      {
        id: '2-2',
        titulo: 'Limpiar vitrinas',
        descripcion: 'Usar franela y limpiador de vidrios.',
        estado: 'Pendiente',
      },
    ],
  },
];
