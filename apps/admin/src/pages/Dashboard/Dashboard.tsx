import { useState } from 'react';
import clsx from 'clsx';
import { HelpCircle } from 'lucide-react';
import styles from './Dashboard.module.scss';

const tabs = ['开发设置', '接口设置', '安全中心', '微信网关'];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('开发设置');

  return (
    <div className={styles.container}>
      <div className={styles.pageHeader}>
        <h1>开发管理</h1>
        <div className={styles.tabs}>
          {tabs.map(tab => (
            <div 
              key={tab} 
              className={clsx(styles.tab, activeTab === tab && styles.active)}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.card}>
        <h2 className={styles.cardTitle}>开发者ID</h2>
        
        <div className={styles.infoBlock}>
          <span className={styles.label}>开发者ID</span>
          <span className={styles.action}>操作</span>
        </div>

        <div className={styles.infoRow}>
          <span className={styles.label}>AppID(小程序ID)</span>
          <span className={styles.value}>wxfd2a3c0e318e4e5a</span>
        </div>

        <div className={styles.infoRow}>
          <span className={styles.label}>AppSecret(小程序密钥)</span>
          <span className={styles.value}></span>
          <div style={{display: 'flex', gap: '16px'}}>
            <span className={styles.action}>重置</span>
            <span className={styles.action} style={{display: 'flex', alignItems: 'center', gap: '4px'}}>
              <HelpCircle size={14} /> 冻结
            </span>
          </div>
        </div>

        <div className={styles.infoRow} style={{borderBottom: 'none', paddingTop: '24px'}}>
          <span className={styles.label}>IP白名单</span>
          <span className={styles.value} style={{textAlign: 'right', paddingRight: '16px', color: '#999'}}>
            未开启ip白名单保护
          </span>
          <label className={styles.switch}>
            <input type="checkbox" />
            <span className={styles.slider}></span>
          </label>
        </div>
      </div>

      <div className={styles.card}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px'}}>
          <h2 className={styles.cardTitle} style={{marginBottom: 0}}>小程序代码上传</h2>
          <span className={styles.action}>查看详情</span>
        </div>
        <p style={{color: '#9a9a9a', fontSize: '14px'}}>开发者可基于配置信息调用微信开发者工具提供的代码上传模块。</p>
      </div>
    </div>
  );
}
