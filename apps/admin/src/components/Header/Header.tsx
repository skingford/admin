import { Search, Bell, ChevronDown, Command } from 'lucide-react';
import styles from './Header.module.scss';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        // Trigger search modal here
        console.log('Cmd+K pressed');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>A</div>
          <span className={styles.logoText}>Admin Pro</span>
        </div>
      </div>

      <div className={styles.center}>
        <div 
          className={`${styles.searchBar} ${isSearchFocused ? styles.focused : ''}`}
          onClick={() => setIsSearchFocused(true)}
          onBlur={() => setIsSearchFocused(false)}
        >
          <Search size={16} className={styles.searchIcon} />
          <span className={styles.placeholder}>Search or type a command...</span>
          <div className={styles.shortcut}>
            <Command size={12} />
            <span>K</span>
          </div>
        </div>
        
        <div className={styles.metrics}>
          <div className={styles.metricItem}>
            <span className={styles.metricLabel}>Today's Orders</span>
            <span className={styles.metricValue}>1,284</span>
          </div>
          <div className={styles.metricDivider} />
          <div className={styles.metricItem}>
            <span className={styles.metricLabel}>Active Users</span>
            <span className={styles.metricValue}>45.2k</span>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <button className={styles.iconBtn}>
          <Bell size={20} />
          <span className={styles.badge} />
        </button>
        
        <div className={styles.userMenu}>
          <img 
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
            alt="User" 
            className={styles.avatar}
          />
          <ChevronDown size={14} className={styles.chevron} />
        </div>
      </div>
    </header>
  );
}
