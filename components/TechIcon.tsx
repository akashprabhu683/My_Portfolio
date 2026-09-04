interface TechIconProps {
  name: string;
  className?: string;
}

export function TechIcon({ name, className = "w-4 h-4" }: TechIconProps) {
  switch (name) {
    case "html":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 2L5.8 19.5L12 21.2L18.2 19.5L20 2H4Z" fill="#E34F26" fillOpacity="0.2" stroke="#E34F26" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M7 6H17L16.5 11H8L8.4 15.5L12 16.5L15.6 15.5L15.8 13.5" stroke="#E34F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "css":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 2L5.8 19.5L12 21.2L18.2 19.5L20 2H4Z" fill="#1572B6" fillOpacity="0.2" stroke="#1572B6" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M7 6H17L16.5 11H8L8.4 15.5L12 16.5L15.6 15.5L15.8 13.5" stroke="#1572B6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "javascript":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" fill="#F7DF1E" fillOpacity="0.15" stroke="#F7DF1E" strokeWidth="1.5" />
          <path d="M9 11V15C9 16.1 8.1 17 7 17H6" stroke="#F7DF1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 11C15 11 17 11.5 17 13.5C17 15.5 14 15.5 14 16.5C14 17.5 16 17.5 17.5 17" stroke="#F7DF1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "typescript":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" fill="#3178C6" fillOpacity="0.2" stroke="#3178C6" strokeWidth="1.5" />
          <path d="M7 9H13M10 9V17" stroke="#3178C6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 12C15.5 11.5 16.5 11 17.5 11C19 11 19.5 12 19.5 13C19.5 15 15 15 15 16.5C15 17.5 16 18 17.5 18C18.5 18 19.5 17.5 20 17" stroke="#3178C6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "react":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="12" cy="12" rx="3.5" ry="9" transform="rotate(30 12 12)" stroke="#61DAFB" strokeWidth="1.2" />
          <ellipse cx="12" cy="12" rx="3.5" ry="9" transform="rotate(90 12 12)" stroke="#61DAFB" strokeWidth="1.2" />
          <ellipse cx="12" cy="12" rx="3.5" ry="9" transform="rotate(150 12 12)" stroke="#61DAFB" strokeWidth="1.2" />
          <circle cx="12" cy="12" r="1.5" fill="#61DAFB" />
        </svg>
      );
    case "nextjs":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
          <path d="M9 8V16M15 8V16L9.5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "tailwind":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 6C9.5 6 8 7.5 7.5 10.5C8.5 9 10 8.5 11 9C12.1 9.5 12.9 10.6 13.9 11.9C15.4 13.8 17.2 16 21 16C23.5 16 25 14.5 25.5 11.5C24.5 13 23 13.5 22 13C20.9 12.5 20.1 11.4 19.1 10.1C17.6 8.2 15.8 6 12 6ZM4.5 13C2 13 0.5 14.5 0 17.5C1 16 2.5 15.5 3.5 16C4.6 16.5 5.4 17.6 6.4 18.9C7.9 20.8 9.7 23 13.5 23C16 23 17.5 21.5 18 18.5C17 20 15.5 20.5 14.5 20C13.4 19.5 12.6 18.4 11.6 17.1C10.1 15.2 8.3 13 4.5 13Z" transform="scale(0.8) translate(2, 0)" fill="#38BDF8" fillOpacity="0.3" stroke="#38BDF8" strokeWidth="1.2" />
        </svg>
      );
    case "git":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6C18 7.66 16.66 9 15 9C13.82 9 12.82 8.32 12.34 7.34L8.34 11.34C9.32 11.82 10 12.82 10 14C10 15.66 8.66 17 7 17C5.34 17 4 15.66 4 14C4 12.34 5.34 11 7 11C7.45 11 7.87 11.1 8.25 11.28L12.28 7.25C12.1 6.87 12 6.45 12 6C12 4.34 13.34 3 15 3C16.66 3 18 4.34 18 6ZM15 15C16.66 15 18 16.34 18 18C18 19.66 16.66 21 15 21C13.34 21 12 19.66 12 18C12 16.34 13.34 15 15 15ZM15 9V15" stroke="#F05032" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "github":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.166 8.839 21.489C9.339 21.581 9.521 21.272 9.521 21.008C9.521 20.771 9.512 19.989 9.508 19.154C6.726 19.757 6.139 17.812 6.139 17.812C5.685 16.658 5.03 16.351 5.03 16.351C4.123 15.731 5.099 15.744 5.099 15.744C6.102 15.814 6.63 16.775 6.63 16.775C7.521 18.299 8.966 17.859 9.536 17.603C9.627 16.957 9.885 16.517 10.17 16.267C7.95 16.015 5.616 15.157 5.616 11.332C5.616 10.242 6.006 9.351 6.645 8.654C6.542 8.401 6.2 7.385 6.743 6.019C6.743 6.019 7.581 5.751 9.489 7.043C10.285 6.821 11.144 6.71 12 6.706C12.856 6.71 13.715 6.821 14.512 7.043C16.419 5.751 17.255 6.019 17.255 6.019C17.8 7.385 17.458 8.401 17.355 8.654C17.996 9.351 18.383 10.242 18.383 11.332C18.383 15.167 16.044 16.012 13.818 16.259C14.177 16.568 14.497 17.18 14.497 18.117C14.497 19.462 14.485 20.547 14.485 20.88C14.485 21.147 14.664 21.461 15.174 21.362C19.141 20.033 22 16.304 22 12C22 6.477 17.523 2 12 2Z" fill="currentColor" />
        </svg>
      );
    case "vercel":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3L22 20H2L12 3Z" />
        </svg>
      );
    case "python":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.9 2C8.6 2 6.6 3.4 6.6 5.5V7.4H12V8.3H4.4C2.3 8.3 1 10.3 1 13.6C1 16.9 2.3 18.3 4.4 18.3H6.1V16.4C6.1 14.3 8.1 12.9 11.4 12.9H16.8V12C16.8 9.9 14.8 8.5 11.5 8.5H8.7V7.1C8.7 4.2 10.7 2 11.9 2Z" fill="#3776AB" fillOpacity="0.3" stroke="#3776AB" strokeWidth="1.2" />
          <path d="M12.1 22C15.4 22 17.4 20.6 17.4 18.5V16.6H12V15.7H19.6C21.7 15.7 23 13.7 23 10.4C23 7.1 21.7 5.7 19.6 5.7H17.9V7.6C17.9 9.7 15.9 11.1 12.6 11.1H7.2V12C7.2 14.1 9.2 15.5 12.5 15.5H15.3V16.9C15.3 19.8 13.3 22 12.1 22Z" fill="#FFD43B" fillOpacity="0.3" stroke="#FFD43B" strokeWidth="1.2" />
          <circle cx="8.5" cy="4.8" r="0.8" fill="#3776AB" />
          <circle cx="15.5" cy="19.2" r="0.8" fill="#FFD43B" />
        </svg>
      );
    case "nodejs":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L20.66 7V17L12 22L3.34 17V7L12 2Z" fill="#339933" fillOpacity="0.2" stroke="#339933" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M12 6L17 9V15L12 18L7 15V9L12 6Z" stroke="#339933" strokeWidth="1.2" strokeLinejoin="round" />
        </svg>
      );
    case "postgresql":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3C7 3 4 6.5 4 12C4 17.5 7 21 12 21C17 21 20 17.5 20 12C20 6.5 17 3 12 3Z" fill="#4169E1" fillOpacity="0.15" stroke="#4169E1" strokeWidth="1.5" />
          <path d="M8 10C8 8.5 9.8 7 12 7C14.2 7 16 8.5 16 10C16 12 14 13.5 12 13.5V17" stroke="#4169E1" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "database":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="12" cy="5" rx="8" ry="3" stroke="#22D3EE" strokeWidth="1.5" />
          <path d="M4 5V12C4 13.66 7.58 15 12 15C16.42 15 20 13.66 20 12V5" stroke="#22D3EE" strokeWidth="1.5" />
          <path d="M4 12V19C4 20.66 7.58 22 12 22C16.42 22 20 20.66 20 19V12" stroke="#22D3EE" strokeWidth="1.5" />
        </svg>
      );
    case "api":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 14V10C4 8.9 4.9 8 6 8H8" />
          <path d="M12 8V16" />
          <path d="M16 8H18C19.1 8 20 8.9 20 10V11C20 12.1 19.1 13 18 13H16V16" />
        </svg>
      );
    case "ai":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#22D3EE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#22D3EE" fillOpacity="0.15" />
        </svg>
      );
    case "ml":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#22D3EE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" fill="#22D3EE" fillOpacity="0.2" />
          <circle cx="4" cy="6" r="2" />
          <circle cx="20" cy="6" r="2" />
          <circle cx="4" cy="18" r="2" />
          <circle cx="20" cy="18" r="2" />
          <path d="M6 7.5L9.5 10.5M18 7.5L14.5 10.5M6 16.5L9.5 13.5M18 16.5L14.5 13.5" />
        </svg>
      );
    case "blockchain":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="6" height="6" rx="1" fill="#F59E0B" fillOpacity="0.2" />
          <rect x="16" y="2" width="6" height="6" rx="1" fill="#F59E0B" fillOpacity="0.2" />
          <rect x="9" y="16" width="6" height="6" rx="1" fill="#F59E0B" fillOpacity="0.2" />
          <path d="M5 8V12C5 13.1 5.9 14 7 14H9M19 8V12C19 13.1 18.1 14 17 14H15" />
        </svg>
      );
    default:
      return (
        <span className="w-1.5 h-1.5 bg-accent/70 shrink-0 inline-block" />
      );
  }
}
