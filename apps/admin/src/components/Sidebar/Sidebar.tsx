import { Settings, BarChart, ChevronDown, ChevronRight, Box, Zap, ShoppingBag, Bell, QrCode, MessageSquare, BookOpen, FileText, BarChart2, Repeat, LogOut, ChevronLeft, DollarSign } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { useState, useRef, useEffect } from 'react';
import styles from './Sidebar.module.scss';



const menuGroups = [
  {
    title: '小程序',
    icon: Box,
    items: [
      { label: '版本管理', path: '/version' },
      { label: '交易保障', path: '/trade' },
      { label: '物流服务', path: '/logistics' },
    ]
  },
  {
    title: '数据',
    icon: BarChart2,
    items: []
  },
  {
    title: '基础功能',
    icon: Box,
    items: []
  },
  {
    title: '支付与交易',
    icon: DollarSign,
    items: []
  },
  {
    title: '行业能力',
    icon: Zap,
    items: []
  },
  {
    title: '推广与搜索',
    icon: ShoppingBag,
    items: []
  },
  {
    title: '开发与服务',
    icon: Settings,
    expanded: true,
    items: [
      { label: '开发管理', path: '/' },
      { label: '开发工具', path: '/tools' },
      { label: '云服务', path: '/cloud' },
      { label: '服务市场', path: '/market' },
    ]
  },
  {
    title: '成长',
    icon: BarChart,
    items: []
  },
  {
    title: '小程序码',
    icon: QrCode,
    items: []
  },
  {
    title: '通知中心',
    icon: Bell,
    items: []
  }
];

export default function Sidebar() {
  const [expandedGroups, setExpandedGroups] = useState<string[]>(['开发与服务']);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [hoveredGroup, setHoveredGroup] = useState<string | null>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  const toggleGroup = (title: string) => {
    if (isCollapsed) return;
    setExpandedGroups(prev => 
      prev.includes(title) 
        ? prev.filter(t => t !== title)
        : [...prev, title]
    );
  };

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <aside className={clsx(styles.sidebar, isCollapsed && styles.collapsed)}>
      <div 
        className={styles.toggleBtn}
        onClick={() => setIsCollapsed(!isCollapsed)}
        title={isCollapsed ? "展开侧边栏" : "收起侧边栏"}
      >
        <ChevronLeft size={16} />
      </div>

      <div className={styles.logo}>
        <Box className={styles.logoIcon} size={24} />
        <span>小程序</span>
      </div>
      
      <nav className={styles.nav}>
        {menuGroups.map((group) => (
          <div 
            key={group.title} 
            className={styles.menuGroup}
            onMouseEnter={() => isCollapsed && setHoveredGroup(group.title)}
            onMouseLeave={() => isCollapsed && setHoveredGroup(null)}
          >
            <div 
              className={styles.menuTitle} 
              onClick={() => toggleGroup(group.title)}
            >
              <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                <group.icon size={16} />
                <span>{group.title}</span>
              </div>
              {(group.items && group.items.length > 0) && (
                <span className={styles.arrow}>
                  {expandedGroups.includes(group.title) ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                </span>
              )}
            </div>
            
            {/* Normal Submenu (Expanded Mode) */}
            {!isCollapsed && (group.items && group.items.length > 0) && expandedGroups.includes(group.title) && (
              <div className={styles.submenu}>
                {group.items.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      clsx(styles.navItem, isActive && styles.active)
                    }
                  >
                    <span>{item.label}</span>
                  </NavLink>
                ))}
              </div>
            )}

            {/* Floating Submenu (Collapsed Mode) */}
            {isCollapsed && hoveredGroup === group.title && (
              <div className={clsx(styles.popover, styles.submenuPopover)}>
                <div className={styles.submenuTitle}>{group.title}</div>
                {(group.items && group.items.length > 0) ? (
                  <div className={styles.popoverMenu}>
                    {group.items.map((item) => (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                          clsx(styles.navItem, isActive && styles.active)
                        }
                      >
                        <span>{item.label}</span>
                      </NavLink>
                    ))}
                  </div>
                ) : (
                  <div className={styles.popoverMenu}>
                    <div className={styles.navItem} style={{color: '#999', cursor: 'default', paddingLeft: '12px'}}>
                      暂无子菜单
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </nav>

      <div 
        className={styles.userSection} 
        ref={userMenuRef}
        onMouseEnter={() => isCollapsed && setShowUserMenu(true)}
        onMouseLeave={() => isCollapsed && setShowUserMenu(false)}
      >
        <div 
          className={styles.userButton} 
          onClick={() => !isCollapsed && setShowUserMenu(!showUserMenu)}
          style={{background: showUserMenu ? '#f5f5f5' : 'transparent'}}
        >
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
          <span>寻微便民寄存</span>
          <ChevronRight size={14} className={styles.chevron} />
        </div>

        {showUserMenu && (
          <div className={clsx(styles.popover, styles.userPopover)}>
            <img className={styles.popoverAvatar} src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
            <div className={styles.popoverName}>寻微便民寄存</div>
            
            <div className={styles.popoverMenu}>
              <div className={styles.popoverItem}>
                <Settings size={18} />
                <span>账号设置</span>
              </div>
              <div className={styles.popoverItem}>
                <MessageSquare size={18} />
                <span>交流专区</span>
              </div>
              <div className={styles.popoverItem}>
                <BookOpen size={18} />
                <span>微信学堂</span>
              </div>
              <div className={styles.popoverItem}>
                <FileText size={18} />
                <span>官方文档</span>
              </div>
              <div className={styles.popoverItem}>
                <BarChart2 size={18} />
                <span>We 分析</span>
              </div>
              
              <div className={styles.divider}></div>
              
              <div className={styles.popoverItem}>
                <Repeat size={18} />
                <span>切换账号</span>
              </div>
              <div className={styles.popoverItem}>
                <LogOut size={18} />
                <span>退出登录</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
