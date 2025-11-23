import { useState } from 'react';
import ReactECharts from 'echarts-for-react';
import { Users, TrendingUp, ShoppingCart, Activity, ArrowUp, ArrowDown } from 'lucide-react';
import clsx from 'clsx';
import styles from './DataOverview.module.scss';

export default function DataOverview() {
  const [timeRange, setTimeRange] = useState('7');

  // Mock Data for Charts
  const lineChartOption = {
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      borderColor: '#ebedf0',
      textStyle: { color: '#333' }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisLine: { lineStyle: { color: '#ebedf0' } },
      axisLabel: { color: '#666' }
    },
    yAxis: {
      type: 'value',
      splitLine: { lineStyle: { type: 'dashed', color: '#ebedf0' } },
      axisLabel: { color: '#666' }
    },
    series: [
      {
        name: '访问量',
        type: 'line',
        smooth: true,
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        itemStyle: { color: '#07c160' },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(7, 193, 96, 0.2)' },
              { offset: 1, color: 'rgba(7, 193, 96, 0)' }
            ]
          }
        }
      },
      {
        name: '用户量',
        type: 'line',
        smooth: true,
        data: [620, 732, 701, 734, 1090, 1130, 1120],
        itemStyle: { color: '#2d8cf0' },
      }
    ]
  };

  const barChartOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ['搜索', '扫码', '分享', '广告', '公众号', '其他'],
      axisLine: { lineStyle: { color: '#ebedf0' } },
      axisLabel: { color: '#666' }
    },
    yAxis: {
      type: 'value',
      splitLine: { lineStyle: { type: 'dashed', color: '#ebedf0' } }
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110],
        type: 'bar',
        barWidth: '40%',
        itemStyle: {
          color: {
            type: 'linear',
            x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [
              { offset: 0, color: '#07c160' },
              { offset: 1, color: '#059b4c' }
            ]
          },
          borderRadius: [4, 4, 0, 0]
        }
      }
    ]
  };

  const pieChartOption = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      bottom: '0%',
      left: 'center',
      icon: 'circle'
    },
    series: [
      {
        name: '用户分布',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: '华东地区', itemStyle: { color: '#07c160' } },
          { value: 735, name: '华南地区', itemStyle: { color: '#2d8cf0' } },
          { value: 580, name: '华北地区', itemStyle: { color: '#7265e6' } },
          { value: 484, name: '西部地区', itemStyle: { color: '#ff9326' } },
          { value: 300, name: '其他', itemStyle: { color: '#ffc300' } }
        ]
      }
    ]
  };

  return (
    <div className={styles.container}>
      <div className={styles.pageHeader}>
        <h1>数据概况</h1>
        <p>实时监控核心指标，掌握业务动态</p>
      </div>

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statHeader}>
            <div className={styles.statLabel}>总用户数</div>
            <div className={clsx(styles.iconWrapper, styles.blue)}>
              <Users size={20} />
            </div>
          </div>
          <div className={styles.statValue}>128,560</div>
          <div className={clsx(styles.statTrend, styles.up)}>
            <ArrowUp size={12} />
            <span>12.5%</span>
            <span style={{color: '#999', marginLeft: '4px'}}>较上周</span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statHeader}>
            <div className={styles.statLabel}>今日访问</div>
            <div className={clsx(styles.iconWrapper, styles.green)}>
              <Activity size={20} />
            </div>
          </div>
          <div className={styles.statValue}>8,236</div>
          <div className={clsx(styles.statTrend, styles.up)}>
            <ArrowUp size={12} />
            <span>5.2%</span>
            <span style={{color: '#999', marginLeft: '4px'}}>较昨日</span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statHeader}>
            <div className={styles.statLabel}>总成交额</div>
            <div className={clsx(styles.iconWrapper, styles.orange)}>
              <ShoppingCart size={20} />
            </div>
          </div>
          <div className={styles.statValue}>¥ 1,235,000</div>
          <div className={clsx(styles.statTrend, styles.down)}>
            <ArrowDown size={12} />
            <span>2.1%</span>
            <span style={{color: '#999', marginLeft: '4px'}}>较上周</span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statHeader}>
            <div className={styles.statLabel}>转化率</div>
            <div className={clsx(styles.iconWrapper, styles.purple)}>
              <TrendingUp size={20} />
            </div>
          </div>
          <div className={styles.statValue}>3.24%</div>
          <div className={clsx(styles.statTrend, styles.up)}>
            <ArrowUp size={12} />
            <span>0.8%</span>
            <span style={{color: '#999', marginLeft: '4px'}}>较上周</span>
          </div>
        </div>
      </div>

      <div className={styles.chartsGrid}>
        <div className={clsx(styles.chartCard, styles.fullWidth)}>
          <div className={styles.cardHeader}>
            <h3>流量趋势</h3>
            <div className={styles.timeFilter}>
              <button className={timeRange === '7' ? styles.active : ''} onClick={() => setTimeRange('7')}>近7天</button>
              <button className={timeRange === '30' ? styles.active : ''} onClick={() => setTimeRange('30')}>近30天</button>
            </div>
          </div>
          <ReactECharts option={lineChartOption} style={{height: '350px'}} />
        </div>

        <div className={styles.chartCard}>
          <div className={styles.cardHeader}>
            <h3>访问来源</h3>
          </div>
          <ReactECharts option={barChartOption} style={{height: '300px'}} />
        </div>

        <div className={styles.chartCard}>
          <div className={styles.cardHeader}>
            <h3>用户分布</h3>
          </div>
          <ReactECharts option={pieChartOption} style={{height: '300px'}} />
        </div>
      </div>
    </div>
  );
}
