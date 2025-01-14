import React from 'react';
interface AuthCardSlotProps {
  children: React.ReactNode;
  isChange: boolean;
}
export default function AuthCardComponent({
  children,
  isChange,
}: Readonly<AuthCardSlotProps>) {
  const cardClassNames = `absolute w-11/12 max-w-[600px] min-w-[260px] h-4/5 max-h-[400px] p-5 bg-white rounded-lg shadow-lg text-center transform transition-transform duration-700 ease-in-out ${isChange ? 'translate-x-0 opacity-100 z-20' : 'translate-x-full opacity-0 z-10'}`;
  return <div className={cardClassNames}>{children}</div>;
}
