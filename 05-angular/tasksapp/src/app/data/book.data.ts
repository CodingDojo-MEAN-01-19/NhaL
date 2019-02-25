import { Book } from '../models';

export const BOOKS: Book[] = [
  {
    id: randomID(),
    title: 'Stranger in a trange land',
    author: 'Robert Mueller',
    year: 1956,
    pages: 100,
    publisher: 'New York'
  },
  {
  id: randomID(),
  title: 'weird book',
  author: 'landon',
  year: 1999,
  pages: 899,
  publisher: 'Nhas Printing',
  },
  {
  id: randomID(),
  title: 'Anglesland',
  author: 'bob',
  year: 2017,
  pages: 180,
  publisher: 'DC printing'
  },
  {
  id: randomID(),
  title: 'stars fire',
  author: 'Rocket man',
  year: 1900,
  pages: 1180,
  publisher: 'Seattle Publishing'
  },
  {
    id: randomID(),
    title: 'Landon learns to code',
    author: 'the coder',
    year: 2000,
    pages: 180,
    publisher: 'New Yorker'
    }
];


function randomID(): number {
  return Math.floor(Math.random() * 1000);
}
