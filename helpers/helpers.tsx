import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/products.svg';
import { TopLevelCategory } from '../interfaces/page.interface';
import { FirstLevelMenuItem } from '../interfaces/menu.interface';

export const firstLevelMenu: FirstLevelMenuItem[] = [
    { route: 'courses', name: 'Courses', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
    { route: 'servisec', name: 'Services', icon: <ServicesIcon />, id: TopLevelCategory.Services },
    { route: 'books', name: 'Books', icon: <BooksIcon />, id: TopLevelCategory.Books },
    { route: 'products', name: 'Products', icon: <ProductsIcon />, id: TopLevelCategory.Products },
  ];

  export const priceRu = (price: number): string => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(' ₽')