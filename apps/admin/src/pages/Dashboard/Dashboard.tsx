import styles from './Dashboard.module.scss';

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <h1 className={styles.title}>Dashboard</h1>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>Total Users</h3>
          <p className={styles.value}>1,234</p>
          <span className={styles.trend}>+12% from last month</span>
        </div>
        <div className={styles.card}>
          <h3>Revenue</h3>
          <p className={styles.value}>$45,231</p>
          <span className={styles.trend}>+5% from last month</span>
        </div>
        <div className={styles.card}>
          <h3>Active Sessions</h3>
          <p className={styles.value}>432</p>
          <span className={styles.trend}>-2% from last month</span>
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
