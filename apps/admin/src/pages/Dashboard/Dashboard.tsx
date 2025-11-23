import { Users, DollarSign, Activity, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import styles from './Dashboard.module.scss';

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <h1 className={styles.title}>Dashboard Overview</h1>
        <p className={styles.subtitle}>Welcome back, here's what's happening today.</p>
      </div>
      
      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.iconWrapper} style={{ '--icon-color': '#818cf8' } as any}>
              <Users size={24} />
            </div>
            <span className={styles.trend} data-trend="up">
              <ArrowUpRight size={16} /> 12%
            </span>
          </div>
          <div className={styles.cardContent}>
            <h3>Total Users</h3>
            <p className={styles.value}>1,234</p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.iconWrapper} style={{ '--icon-color': '#34d399' } as any}>
              <DollarSign size={24} />
            </div>
            <span className={styles.trend} data-trend="up">
              <ArrowUpRight size={16} /> 5%
            </span>
          </div>
          <div className={styles.cardContent}>
            <h3>Total Revenue</h3>
            <p className={styles.value}>$45,231</p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.iconWrapper} style={{ '--icon-color': '#f472b6' } as any}>
              <Activity size={24} />
            </div>
            <span className={styles.trend} data-trend="down">
              <ArrowDownRight size={16} /> 2%
            </span>
          </div>
          <div className={styles.cardContent}>
            <h3>Active Sessions</h3>
            <p className={styles.value}>432</p>
          </div>
        </div>
      </div>
      
      <div className={styles.section}>
        <h2>Recent Activity</h2>
        <div className={styles.tableCard}>
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Action</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((i) => (
                <tr key={i}>
                  <td>User {i}</td>
                  <td>Logged in</td>
                  <td>2023-10-{10+i}</td>
                  <td><span className={styles.status}>Completed</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
