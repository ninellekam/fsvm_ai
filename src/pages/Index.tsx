// "use client";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { MadeWithDyad } from "@/components/made-with-dyad";
"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MadeWithDyad } from "@/components/made-with-dyad";
// Import Particles.js
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"; // If using full version
// Пример картинок для блока "Примеры работ"

const examples = [
  {
    before: "./images/3.jpg",
    after: "./images/skirt.jpg",
    title: "Юбка плетенная",
    desc: "Фотосессия в стиле Дюна"
  },
  {
    before: "./images/2.jpg",
    after: "./images/5.png",
    title: "Мини юбка с ремнем",
    desc: "Фотосессия в горах"
  },
  {
    before: "./images/7.jpg",
    after: "./images/8.jpg",
    title: "Юбка с разрезом на ногу",
    desc: "Фотосессия в Марокко"
  }
];

const features = [
  {
    title: "Быстро",
    desc: "Генерация за 5 минут"
  },
  {
    title: "Дёшево",
    desc: "В 10 раз дешевле фотостудии"  
  },
  {
    title: "Удобно",
    desc: "Не нужно никуда ехать"
  }
];

const Index = () => {
  const particlesInit = async (main) => {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    // console.log(container);
  };

  return (
    <div className="min-h-screen bg-black text-white relative font-sans">
       {/* Particles background */}
       <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#000", // Black background
            },
          },
          fpsLimit: 60, // Limit FPS for performance
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push", // Add particles on click
              },
              onHover: {
                enable: true,
                mode: "repulse", // Repel particles on hover
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4, // Number of particles to add on click
              },
              repulse: {
                distance: 200, // Repulsion distance
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: ["#a259ff", "#ff6f6f", "#ffe259"], // Gradient colors
            },
            links: {
              color: "#ffffff", // White links
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true, // Enable collisions for bounce effect
            },
            move: {
              direction: "none", // Or try "top", "bottom", etc.
              enable: true,
              outModes: {
                default: "bounce", // Bounce off edges
              },
              random: false,
              speed: 2, // Adjust speed
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80, // Adjust number of particles
            },
            opacity: {
              value: 0.5, // Adjust opacity
            },
            shape: {
              type: "circle", // Or try "edge", "polygon", etc.
            },
            size: {
              value: { min: 1, max: 5 }, // Adjust particle size
            },
          },
          detectRetina: true, // For better quality on retina displays
        }}
      />
      {/* Rest of your component code */}
      {/* ... */}
    </div>
  );
};


export default Index;