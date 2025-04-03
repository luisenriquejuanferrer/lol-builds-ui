import { useEffect, useRef } from "react";

const CosmicBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Ajustar el tamaño del canvas al tamaño de la ventana
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      draw();
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    function draw() {
      // Crear gradiente de fondo
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width * 0.8
      );

      gradient.addColorStop(0, "#0d0d1a");
      gradient.addColorStop(0.5, "#101028");
      gradient.addColorStop(1, "#080810");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Acento púrpura
      const accentGradient = ctx.createRadialGradient(
        canvas.width * 0.2,
        canvas.height * 0.8,
        0,
        canvas.width * 0.2,
        canvas.height * 0.8,
        canvas.width * 0.6
      );

      accentGradient.addColorStop(0, "rgba(103, 65, 217, 0.2)");
      accentGradient.addColorStop(0.6, "rgba(103, 65, 217, 0.05)");
      accentGradient.addColorStop(1, "rgba(103, 65, 217, 0)");

      ctx.fillStyle = accentGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Acento azul
      const accentGradient2 = ctx.createRadialGradient(
        canvas.width * 0.8,
        canvas.height * 0.2,
        0,
        canvas.width * 0.8,
        canvas.height * 0.2,
        canvas.width * 0.6
      );

      accentGradient2.addColorStop(0, "rgba(65, 105, 217, 0.25)");
      accentGradient2.addColorStop(0.6, "rgba(65, 105, 217, 0.08)");
      accentGradient2.addColorStop(1, "rgba(65, 105, 217, 0)");

      ctx.fillStyle = accentGradient2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Acento rojo
      const redAccentGradient = ctx.createRadialGradient(
        canvas.width * 0.7,
        canvas.height * 0.7,
        0,
        canvas.width * 0.7,
        canvas.height * 0.7,
        canvas.width * 0.5
      );

      redAccentGradient.addColorStop(0, "rgba(217, 65, 85, 0.3)");
      redAccentGradient.addColorStop(0.6, "rgba(217, 65, 85, 0.05)");
      redAccentGradient.addColorStop(1, "rgba(217, 65, 85, 0)");

      ctx.fillStyle = redAccentGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Dibujar puntos estelares
      const spacing = 28;
      const dotSize = 1.2;
      const rows = Math.ceil(canvas.height / spacing);
      const cols = Math.ceil(canvas.width / spacing);

      ctx.fillStyle = "rgba(255, 255, 255, 0.1)";

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          ctx.beginPath();
          ctx.arc(x * spacing, y * spacing, dotSize, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="cosmic-background" />;
};

export default CosmicBackground;
