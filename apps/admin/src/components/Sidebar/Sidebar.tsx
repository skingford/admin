import { Settings, BarChart, ChevronDown, ChevronRight, Box, Zap, ShoppingBag, Bell, QrCode, BarChart2, DollarSign, LayoutGrid } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { useState } from 'react';
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
    items: [
      { label: '数据概况', path: '/data/overview' },
      { label: '访问分析', path: '/data/visit' },
      { label: '来源分析', path: '/data/source' },
    ]
  },
  {
    title: '基础功能',
    icon: LayoutGrid,
    items: [
      { label: '账号信息', path: '/basic/info' },
      { label: '成员管理', path: '/basic/members' },
      { label: '功能设置', path: '/basic/settings' },
    ]
  },
  {
    title: '支付与交易',
    icon: DollarSign,
    items: [
      { label: '微信支付', path: '/pay/wechat' },
      { label: '订单管理', path: '/pay/orders' },
      { label: '售后管理', path: '/pay/refunds' },
    ]
  },
  {
    title: '行业能力',
    icon: Zap,
    items: [
      { label: '直播', path: '/industry/live' },
      { label: '即时配送', path: '/industry/delivery' },
    ]
  },
  {
    title: '推广与搜索',
    icon: ShoppingBag,
    items: [
      { label: '广告中心', path: '/promotion/ads' },
      { label: '搜索服务', path: '/promotion/search' },
    ]
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
    items: [
      { label: '成长指引', path: '/growth/guide' },
    ]
  },
  {
    title: '小程序码',
    icon: QrCode,
    items: [
      { label: '获取二维码', path: '/qrcode/get' },
    ]
  },
  {
    title: '通知中心',
    icon: Bell,
    items: [
      { label: '系统通知', path: '/notice/system' },
      { label: '服务通知', path: '/notice/service' },
    ]
  }
];

export default function Sidebar() {
  const [expandedGroups, setExpandedGroups] = useState<string[]>(['开发与服务']);
  const [isHovered, setIsHovered] = useState(false);
  
  // Default state is collapsed (icons only). 
  // When hovered, it expands to show text.
  // We can use a fixed width for collapsed state and a wider width for expanded.

  const toggleGroup = (title: string) => {
    setExpandedGroups(prev => 
      prev.includes(title) 
        ? prev.filter(t => t !== title)
        : [...prev, title]
    );
  };

  return (
    <aside 
      className={clsx(styles.sidebar, isHovered && styles.expanded)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <nav className={styles.nav}>
        {menuGroups.map((group) => (
          <div 
            key={group.title} 
            className={styles.menuGroup}
          >
            <div 
              className={styles.menuTitle} 
              onClick={() => toggleGroup(group.title)}
            >
              <div className={styles.iconContainer}>
                <group.icon size={20} strokeWidth={1.5} />
              </div>
              
              <span className={styles.groupLabel}>{group.title}</span>
              
              {(group.items && group.items.length > 0) && (
                <span className={styles.arrow}>
                  {expandedGroups.includes(group.title) ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                </span>
              )}
            </div>
            
            {/* Submenu - Only visible when sidebar is expanded AND group is expanded */}
            <div className={clsx(styles.submenu, expandedGroups.includes(group.title) && styles.open)}>
              {group.items.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    clsx(styles.navItem, isActive && styles.active)
                  }
                >
                  <span className={styles.dot}></span>
                  <span className={styles.itemLabel}>{item.label}</span>
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}

