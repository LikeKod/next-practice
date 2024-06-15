import { getMenu } from "../../api/menu";
import { FirstLevelMenuItem, PageItem } from "../../interfaces/menu.interface";
import cn from 'clsx';
import styles from './Menu.module.css';
import { TopLevelCategory } from "../../interfaces/page.interface";
import Link from "next/link";
import { useRouter } from "next/router";
import { firstLevelMenu } from "../../helpers/helpers";
import { motion, useReducedMotion } from 'framer-motion';
import { useState } from "react";


export default async function Menu() {
  const menu = await getMenu(0);
  const [announce, setAnnounce] = useState<'closed' | 'opened' | undefined>();
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();



  const variants = {
    visible: {
      marginBottom: 20,
      transition: shouldReduceMotion ? {} : {
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
    hidden: { opacity: shouldReduceMotion ? 1 : 0, height: 0 }
  };

  const openSecondLevel = (secondCategory: string) => {
    setMenu && setMenu(menu.map(m => {
      if (m._id.secondCategory == secondCategory) {
        setAnnounce(m.isOpened ? 'closed' : 'opened');
        m.isOpened = !m.isOpened;
      }
      return m;
    }));
  };

  const openSecondLevelKey = (key: KeyboardEvent, secondCategory: string) => {
    if (key.code == 'Space' || key.code == 'Enter') {
      key.preventDefault();
      openSecondLevel(secondCategory);
    }
  };

  const buildFirstLevel = () => {
    return (
      <ul className={styles.firstLevelList}>
        {firstLevelMenu.map(m => (
          <li key={m.route} aria-expanded={m.id == TopLevelCategory.Courses}>
            <Link href={`/${m.route}`}>
              <div className={cn(styles.firstLevel, {
                [styles.firstLevelActive]: m.id == TopLevelCategory.Courses
              })}>
                {m.icon}
                <span >{m.name}</span>
              </div>
            </Link>
            {m.id == TopLevelCategory.Courses && buildSecondLevel(m)}
          </li>
        ))}
      </ul>
    );
  };
  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <ul className={styles.secondBlock}>
        {menu.map(m => {
          if (m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
            m.isOpened = true;
          }
          return (
            <li key={m._id.secondCategory}>
              <button
                tabIndex={0}
                onKeyDown={(key: KeyboardEvent) => openSecondLevelKey(key, m._id.secondCategory)} className={styles.secondLevel}
                aria-expanded={m.isOpened}
                onClick={() => openSecondLevel(m._id.secondCategory)}
              >{m._id.secondCategory}</button>
              <motion.div
                className={styles.secondLevelBlock}
                layout
                variants={variants}
                initial={m.isOpened ? 'visible' : 'hidden'}
                animate={m.isOpened ? 'visible' : 'hidden'}
              >
                {buildThirdLevel(m.pages, menuItem.route, m.isOpened ?? false)}
              </motion.div>
            </li>
          )
        })}
      </ul>
    );
  };
  const buildThirdLevel = (pages: PageItem[], route: string, isOpened: boolean) => {
    return (
      pages.map(p => (
        <motion.li key={p._id} variants={variantsChildren}>
          <Link 
            tabIndex={isOpened ? 0 : -1} 
            href={`/${route}/${p.alias}`} 
            className={cn(styles.thirdLevel, {
              [styles.thirdLevelActive]: `/${route}/${p.alias}` == router.asPath
            })}
            aria-current={`/${route}/${p.alias}` == router.asPath ? 'page' : false}
          >
            {p.category}
          </Link>
        </motion.li>
      ))
    );
  };

  return (
    <nav className={styles.menu} role="navigation">
      {announce && <span className="visualyHidden" role="log">{announce == 'opened' ? 'opened' : 'closed'}</span>}
      {buildFirstLevel()}
    </nav>
  );
}