import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import { useRef, useMemo, useState } from "react";
import { useSpring, animated } from "@react-spring/three";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "react",
  "flutter",
  "android",
  "html5",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "androidstudio",
  "figma",
];

export default function IconCloudGlobe() {
  const icons = slugs.map((slug) => ({
    url: `https://cdn.simpleicons.org/${slug}/${slug}`,
    slug,
  }));

  return (
    <div className='w-full h-[500px]'>
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} />
        <OrbitControls enableZoom={false} />
        <RotatingGlobe icons={icons} />
      </Canvas>
    </div>
  );
}

function RotatingGlobe({ icons }: any) {
  const groupRef = useRef({} as any);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0015;
    }
  });

  const iconPositions = useMemo(() => {
    const count = icons.length;
    const radius = 3;
    const positions = [];

    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = Math.PI * (3 - Math.sqrt(5)) * i;

      const x = Math.cos(theta) * r;
      const z = Math.sin(theta) * r;

      positions.push([x * radius, y * radius, z * radius]);
    }

    return positions;
  }, [icons]);

  return (
    <group ref={groupRef}>
      {icons.map((icon: any, i: number) => (
        <AnimatedIcon key={i} icon={icon} targetPosition={iconPositions[i]} />
      ))}
    </group>
  );
}

function AnimatedIcon({ icon, targetPosition }: any) {
  const groupRef = useRef({} as any);
  const { camera } = useThree();
  const [hovered, setHovered] = useState(false);

  // Random start position for fly-in effect
  const [x, y, z] = useMemo(
    () => [
      (Math.random() - 0.5) * 30,
      (Math.random() - 0.5) * 30,
      (Math.random() - 0.5) * 30,
    ],
    []
  );

  // Animate position from random start to target sphere position
  const spring = useSpring({
    from: { position: [x, y, z] },
    to: { position: targetPosition },
    config: { mass: 2, tension: 100, friction: 30 },
    delay: Math.random() * 600,
  });

  // Update rotation every frame so icon always faces camera
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.lookAt(camera.position);
    }
  });

  const AnimatedGroup = animated("group");

  return (
    <AnimatedGroup
      ref={groupRef}
      position={spring.position.to((x, y, z) => [x, y, z])}
    >
      <Html transform distanceFactor={1.5} occlude>
        <div
          className={`transition-all duration-200 ease-out rounded-full ${
            hovered ? "scale-125 shadow-[0_0_10px_rgba(0,255,255,0.8)]" : ""
          }`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{ pointerEvents: "auto" }}
        >
          <img
            src={icon.url}
            alt={icon.slug}
            className='w-32 h-32 object-contain pointer-events-none select-none'
            draggable={false}
            crossOrigin='anonymous'
          />
        </div>
      </Html>
    </AnimatedGroup>
  );
}
