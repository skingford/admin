import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, FileText, MessageSquare, Globe, ScanLine } from 'lucide-react';
import styles from './Login.module.scss';

export default function Login() {
  const navigate = useNavigate();
  const [loginMode, setLoginMode] = useState<'account' | 'qrcode'>('account');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className={styles.loginPage}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <MessageSquare size={32} color="#07c160" />
          <span>微信公众平台</span>
        </div>
        <div className={styles.headerActions}>
          <a href="#">立即注册</a>
          <span>|</span>
          <a href="#">简体中文</a>
        </div>
      </header>

      <div className={styles.banner}>
        <div className={styles.slogan}>
          <h2>再小的个体，也有自己的品牌</h2>
        </div>

        <div className={styles.loginBox}>
          <div className={styles.loginHeader}>
            <h3>{loginMode === 'account' ? '登录' : '扫码登录'}</h3>
            <div 
              className={styles.switchMode}
              onClick={() => setLoginMode(loginMode === 'account' ? 'qrcode' : 'account')}
              title={loginMode === 'account' ? '切换到扫码登录' : '切换到账号登录'}
            >
              {loginMode === 'account' ? <ScanLine size={20} /> : <User size={20} />}
            </div>
          </div>

          <div className={styles.loginContent}>
            {loginMode === 'account' ? (
              <form onSubmit={handleLogin}>
                <div className={styles.inputGroup}>
                  <input type="text" placeholder="邮箱/微信号/QQ号" />
                  <input type="password" placeholder="密码" />
                </div>
                
                <div className={styles.options}>
                  <label>
                    <input type="checkbox" /> 记住账号
                  </label>
                  <a href="#">找回账号或密码</a>
                </div>
                
                <button type="submit" className={styles.submitBtn}>登录</button>
              </form>
            ) : (
              <div className={styles.qrcodeLogin}>
                <div className={styles.qrcode}>
                  <img src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=WeChatLoginDemo" alt="Login QR Code" />
                </div>
                <p>请使用微信扫描二维码登录</p>
                <span className={styles.subText}>“微信公众平台”</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.categoryGrid}>
          <div className={styles.categoryCard}>
            <div className={styles.icon} style={{background: '#07c160'}}>
              <MessageSquare size={32} />
            </div>
            <h4>服务号</h4>
            <p>给企业和组织提供更强大的业务服务与用户管理能力，帮助企业快速实现全新的公众号服务平台。</p>
          </div>
          
          <div className={styles.categoryCard}>
            <div className={styles.icon} style={{background: '#2d8cf0'}}>
              <FileText size={32} />
            </div>
            <h4>订阅号</h4>
            <p>为媒体和个人提供一种新的信息传播方式，构建与读者之间更好的沟通与管理模式。</p>
          </div>
          
          <div className={styles.categoryCard}>
            <div className={styles.icon} style={{background: '#7265e6'}}>
              <Globe size={32} />
            </div>
            <h4>小程序</h4>
            <p>一种新的开放能力，开发者可以快速地开发一个小程序。小程序可以在微信内被便捷地获取和传播。</p>
          </div>
        </div>
      </div>
    </div>
  );
}
