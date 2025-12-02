import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import styles from './Layout.module.scss';

export default function Layout() {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.body}>
        <Sidebar />
        <div className={styles.mainContent}>
          <main className={styles.pageContent}>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
