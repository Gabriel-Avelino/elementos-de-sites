import Tree from './tree.js'

const menu = [
    { id: 1, name: "Desktops", parent: 3 },
    { id: 3, name: "Computadores", parent: 8 },
    { id: 4, name: "Smartphones", parent: 6 },
    { id: 6, name: "Portáteis", parent: 3 },
    { id: 7, name: "Tablets", parent: 6 },
    { id: 8, name: "Eletrônicos", parent: null },
    { id: 18, name: "Camping", parent: null },
    { id: 10, name: "TV", parent: 8 },
    { id: 20, name: '11 polegadas', parent: 7 },
    { id: 13, name: "Controles Remotos", parent: 14 },
    { id: 14, name: "Acessórios", parent: 10 }
]

Tree(menu);