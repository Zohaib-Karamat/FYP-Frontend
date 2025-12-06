interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: "default" | "light" | "dark";
  height?: string;
}

const Logo = ({ className = "", showText = true, variant = "default", height = "h-[120px]" }: LogoProps) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/new-logo-removebg-preview.png" 
        alt="Maternal Mind Logo" 
        className={`${height} w-auto object-contain max-w-none`}
        onError={(e) => {
          console.error('Logo failed to load:', e);
          // Fallback to text if image fails
          e.currentTarget.style.display = 'none';
        }}
        onLoad={() => {
          console.log('Logo loaded successfully');
        }}
      />
    </div>
  );
};

export default Logo;
