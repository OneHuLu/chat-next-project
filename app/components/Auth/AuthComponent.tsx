import { useState } from 'react';
import RegisterComponent from '../Register/RegisterComponent';
import LoginComponent from '../Login/LoginComponent';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  // 样式
  const container =
    'relative flex h-screen items-center justify-center overflow-hidden bg-[#f0f2f5]';

  return (
    <div className={container}>
      <LoginComponent isLogin={isLogin} setLogin={setIsLogin} />
      <RegisterComponent isLogin={!isLogin} setLogin={setIsLogin} />
    </div>
  );
}
