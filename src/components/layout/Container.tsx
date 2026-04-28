interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'narrow' | 'wide';
}

export function Container({ children, className, size = 'default' }: ContainerProps) {
  const cls = ['container'];
  if (size !== 'default') cls.push(`container--${size}`);
  if (className) cls.push(className);
  return <div className={cls.join(' ')}>{children}</div>;
}
