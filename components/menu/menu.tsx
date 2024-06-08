import { getMenu } from "../../api/menu";
import { FirstLevelMenuItem, PageItem } from "../../interfaces/menu.interface";
import cn from 'clsx';
import styles from './Menu.module.css';
import { TopLevelCategory } from "../../interfaces/page.interface";
import Link from "next/link";
import { useRouter } from "next/router";
import { firstLevelMenu } from "../../helpers/helpers";
import { motion } from 'framer-motion';


export default async function Menu() {
  const menu = await getMenu(0);
  const router = useRouter();

  const openSecondLevel = (secondCategory: string) => {
    // setMenu && setMenu(menu.map(m => {
    //   if (m._id.secondCategory == secondCategory) {
    //     m.isOpened = !m.isOpened;
    //   }
    //   return m;
    // }));
  };

  const variants = {
    visible: {
      marginBottom: 20,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
      }
    },
    hidden: { marginBottom: 0 }
  };

  const variantsChildren = {
    visible: {
      opacity: 1,
      height: 29
    },
    hidden: { opacity: 0, height: 0 }
  };

  const openSecondLevelKey = (key: KeyboardEvent, secondCategory:string) => {
    if(key.code == 'Space' || key.code == 'Enter' ) {
      key.preventDefault();
      openSecondLevel(secondCategory);
    }
  };

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map(m => {
          <div key={m.route}>
            <Link href={`/${m.route}`}>
              <div className={cn(styles.firstLevel, {
                [styles.firstLevelActive]: m.id == TopLevelCategory.Courses
              })}>
                {m.icon}
                <span >{m.name}</span>
              </div>
            </Link>
            {m.id == TopLevelCategory.Courses && buildSecondLevel(m)}
          </div>;
        })}
      </>
    );
  };
  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map(m => {
          if (m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
            m.isOpened = true;
          }
          return (
            <div key={m._id.secondCategory}>
              <div 
                tabIndex={0} 
                onKeyDown={(key: KeyboardEvent) => openSecondLevelKey(key, m._id.secondCategory)} className={styles.secondLevel} 
                onClick={() => openSecondLevel(m._id.secondCategory)}
              >{m._id.secondCategory}</div>
              <motion.div
                className={cn(styles.secondLevelBlock)}
                layout
                variants={variants}
                initial={m.isOpened ? 'visible' : 'hidden'}
                animate={m.isOpened ? 'visible' : 'hidden'}
              >
                {buildThirdLevel(m.pages, menuItem.route, m.isOpened ?? false)}
              </motion.div>
            </div>
          )
        })}
      </div>
    );
  };
  const buildThirdLevel = (pages: PageItem[], route: string, isOpened: boolean) => {
    return (
      pages.map(p => (
        <motion.div key={p._id} variants={variantsChildren}>
          <Link tabIndex={isOpened ? 0 : -1} href={`/${route}/${p.alias}`} className={cn(styles.thirdLevel, {
            [styles.thirdLevelActive]: `/${route}/${p.alias}` == router.asPath
          })}>
            {p.category}
          </Link>
        </motion.div>
      ))
    );
  };

  return (
      <nav className={styles.menu} role="navigation">
        {buildFirstLevel()}
      </nav>
  );
}