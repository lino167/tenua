import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import tenuaLogo from "@/assets/tenua-simbolo.png";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <div className="text-center">
        {/* Logo */}
        <img
          src={tenuaLogo}
          alt="Tenua"
          className="w-16 h-auto mx-auto mb-8 opacity-60"
        />
        
        {/* 404 */}
        <h1 className="mb-4 font-display text-6xl md:text-7xl font-light text-primary">
          404
        </h1>
        
        {/* Message */}
        <p className="mb-8 text-lg text-muted-foreground">
          Página não encontrada
        </p>
        
        {/* Back Link */}
        <a
          href="/"
          className="inline-flex items-center justify-center px-6 py-3
                     bg-primary text-primary-foreground
                     text-sm font-medium tracking-wide uppercase
                     transition-all duration-300
                     hover:bg-primary/90"
        >
          Voltar para o início
        </a>
      </div>
    </div>
  );
};

export default NotFound;
