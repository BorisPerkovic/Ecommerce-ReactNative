export interface User {
  id: number | string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const users: User[] = [
  {
    id: 1,
    firstName: 'Boris',
    lastName: 'Perkovic',
    email: 'bboris@gmail.com',
    password: 'Bboris20',
  },
  {
    id: 2,
    firstName: 'Petar',
    lastName: 'Petrovic',
    email: 'ppetar@gmail.com',
    password: 'Ppetar20',
  },
  {
    id: 3,
    firstName: 'Laza',
    lastName: 'Lazic',
    email: 'llaza@gmail.com',
    password: 'Llaza201',
  },
  {
    id: 4,
    firstName: 'Cane',
    lastName: 'Kurbla',
    email: 'ccane@gmail.com',
    password: 'Ccane201',
  },
];
