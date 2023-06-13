 export interface NavItem {
  url: string;
  title:string;
}

const links: NavItem[] = [
  {
    url:'productos',
    title:'Productos',
  },
  {
    url:'arma_tu_pc',
    title:'Armá tu PC',
  },
  {
    url:'ayuda',
    title:'Ayuda',
  },
  {
    url: 'sponsors',
    title: 'Sponsors',
  }
]

export default links;

