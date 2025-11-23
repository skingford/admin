import { useNavigate } from 'react-router-dom';
import { FileQuestion } from 'lucide-react';
import styles from './NotFound.module.scss';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.bgDecoration}>404</div>
      
      <div className={styles.content}>
        <div className={styles.iconWrapper}>
          <FileQuestion className={styles.icon} strokeWidth={1.5} />
        </div>
        
        <h1 className={styles.title}>页面不存在</h1>
        <p className={styles.description}>
          我们找不到您要访问的页面。它可能已被移动、删除，或者您输入的网址有误。
        </p>
        
        <div className={styles.actions}>
          <button className={`${styles.button} ${styles.secondary}`} onClick={() => navigate(-1)}>
            返回上一页
          </button>
          <button className={`${styles.button} ${styles.primary}`} onClick={() => navigate('/')}>
            返回首页
          </button>
        </div>
      </div>
    </div>
  );
}
