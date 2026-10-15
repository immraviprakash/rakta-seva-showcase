import './Button.css';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  download,
  onClick,
  icon: Icon,
  className = '',
  ...props
}) {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classes} download={download} {...props}>
        {Icon && <Icon className="btn__icon" size={size === 'lg' ? 20 : 18} />}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {Icon && <Icon className="btn__icon" size={size === 'lg' ? 20 : 18} />}
      <span>{children}</span>
    </button>
  );
}
