import { getMenu } from "../../api/menu";
import { FirstLevelMenuItem, PageItem } from "../../interfaces/menu.interface";
import cn from 'clsx';
import styles from './Menu.module.css';
import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/products.svg';
import { TopLevelCategory } from "../../interfaces/page.interface";

const firstLevelMenu: FirstLevelMenuItem[] = [
  {route: 'courses', name: 'Courses', icon: <CoursesIcon />, id: TopLevelCategory.Courses},
  {route: 'servisec', name: 'Services', icon: <CoursesIcon />, id: TopLevelCategory.Services},
  {route: 'books', name: 'Books', icon: <CoursesIcon />, id: TopLevelCategory.Books},
  {route: 'products', name: 'Products', icon: <CoursesIcon />, id: TopLevelCategory.Products},
];

export default async function Menu(){
    const menu = await getMenu(0);

    const buildFirstLevel = () => {
      return (
        <>
          {firstLevelMenu.map(menu => {
            <div key={menu.route}>
                <a href={`/${menu.route}`}>
                  <div className={cn(styles.firstLevel, {
                    [styles.firstLevelActive]: menu.id == TopLevelCategory.Courses
                  })}>
                      {menu.icon}
                      <span >{menu.name}</span>
                  </div>
                </a>
                {menu.id == TopLevelCategory.Courses && buildSecondLevel(menuItem)}
            </div>;
          })}
        </>
      );
    } ;
    const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
      return (
        <div>
          {menu.map(m => (
            <div key={m._id.secondCategory}>
              <div className={styles.secondLevel}>{m._id.secondCategory}</div>
              <div className={cn(styles.secondLevelBlock, {
                [styles.secondLevelOpened]: m.isOpened
              })}>
                {buildThirdLevel(m.pages, menuItem.route)}
              </div>
            </div>
          ))}
        </div>
      );
    } ;
    const buildThirdLevel = (pages: PageItem[], route: string) => {
      return (
        <div>
          
        </div>
      );
    } ;

    return (
      <main >
        <div className={styles.menu}>
          {buildFirstLevel()}
        </div>
      </main>
    );
  }