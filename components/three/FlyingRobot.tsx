"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";

const { damp, clamp } = THREE.MathUtils;

/**
 * The robot's flight plan: waypoints in camera space, sampled by page
 * scroll progress. It weaves left and right past the chapters and
 * settles above the finale.
 */
const WAYPOINTS: [number, number][] = [
  [3.2, 1.5], // hero — hovering by the portrait
  [-3.4, 0.7], // why kashan — over the left gutter
  [3.0, -0.6], // bento — inspecting the terminal
  [-3.2, 0.4], // manifesto
  [3.1, 0.9], // courses
  [-2.9, -0.7], // products
  [3.2, 0.3], // videos
  [-3.0, 0.8], // case studies
  [0.0, 1.7], // dark act — rising over the plate
  [-3.1, 0.1], // community / faq
  [2.8, -0.4], // fork
  [0.0, 0.9], // finale — settling above the CTA
];

function Robot() {
  const group = useRef<THREE.Group>(null);
  const inner = useRef<THREE.Group>(null);
  const thruster = useRef<THREE.MeshStandardMaterial>(null);
  const visor = useRef<THREE.MeshStandardMaterial>(null);

  const scrollProgress = useRef(0);
  const prev = useRef(new THREE.Vector3());
  const point = useMemo(() => new THREE.Vector3(), []);
  const ahead = useMemo(() => new THREE.Vector3(), []);

  const curve = useMemo(
    () =>
      new THREE.CatmullRomCurve3(
        WAYPOINTS.map(([x, y]) => new THREE.Vector3(x, y, 0)),
        false,
        "centripetal"
      ),
    []
  );

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const doc = document.documentElement;
        const max = doc.scrollHeight - window.innerHeight;
        scrollProgress.current = max > 0 ? clamp(window.scrollY / max, 0, 1) : 0;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useFrame((state, dt) => {
    if (!group.current || !inner.current) return;
    const t = state.clock.elapsedTime;
    const p = clamp(scrollProgress.current, 0.0001, 0.9999);

    curve.getPointAt(p, point);
    curve.getPointAt(clamp(p + 0.015, 0, 1), ahead);
    const dirX = ahead.x - point.x;
    const dirY = ahead.y - point.y;

    // travel with weight; idle bob layered on top
    const g = group.current;
    g.position.x = damp(g.position.x, point.x, 2.2, dt);
    g.position.y = damp(g.position.y, point.y + Math.sin(t * 1.5) * 0.11, 2.2, dt);

    // bank into turns, pitch into climbs, yaw toward heading
    g.rotation.z = damp(g.rotation.z, clamp(-dirX * 6, -0.45, 0.45), 3, dt);
    g.rotation.x = damp(g.rotation.x, clamp(dirY * 5, -0.3, 0.3), 3, dt);
    g.rotation.y = damp(g.rotation.y, clamp(dirX * 4, -0.6, 0.6), 3, dt);

    // thruster answers to speed
    const speed = g.position.distanceTo(prev.current) / Math.max(dt, 1e-4);
    prev.current.copy(g.position);
    if (thruster.current) {
      thruster.current.emissiveIntensity = damp(
        thruster.current.emissiveIntensity,
        1.4 + clamp(speed * 1.4, 0, 3),
        4,
        dt
      );
    }
    // visor breathes
    if (visor.current) {
      visor.current.emissiveIntensity = 0.9 + Math.sin(t * 2.2) * 0.25;
    }
    // gentle idle spin of the ring
    inner.current.rotation.y += dt * 0.4;
  });

  return (
    <group ref={group} scale={0.52}>
      {/* body */}
      <mesh position={[0, -0.05, 0]}>
        <capsuleGeometry args={[0.42, 0.42, 8, 24]} />
        <meshStandardMaterial color="#e3e6eb" metalness={0.85} roughness={0.28} envMapIntensity={1.2} />
      </mesh>

      {/* head */}
      <mesh position={[0, 0.62, 0]}>
        <sphereGeometry args={[0.34, 32, 32]} />
        <meshStandardMaterial color="#eceef2" metalness={0.9} roughness={0.18} envMapIntensity={1.3} />
      </mesh>
      {/* visor — the face */}
      <mesh position={[0, 0.63, 0.24]} scale={[1, 0.62, 0.5]}>
        <sphereGeometry args={[0.24, 32, 32]} />
        <meshStandardMaterial
          ref={visor}
          color="#0c0f14"
          metalness={0.6}
          roughness={0.15}
          emissive="#8fd0f5"
          emissiveIntensity={0.9}
        />
      </mesh>

      {/* antenna */}
      <mesh position={[0, 1.02, 0]}>
        <cylinderGeometry args={[0.015, 0.015, 0.18, 8]} />
        <meshStandardMaterial color="#b9bcc4" metalness={1} roughness={0.3} />
      </mesh>
      <mesh position={[0, 1.14, 0]}>
        <sphereGeometry args={[0.045, 16, 16]} />
        <meshStandardMaterial color="#dfe9f2" emissive="#9fd8ff" emissiveIntensity={1.6} roughness={0.2} />
      </mesh>

      {/* arms */}
      <mesh position={[-0.52, -0.02, 0]} rotation={[0, 0, 0.5]}>
        <capsuleGeometry args={[0.09, 0.34, 6, 16]} />
        <meshStandardMaterial color="#d5d9df" metalness={0.85} roughness={0.3} />
      </mesh>
      <mesh position={[0.52, -0.02, 0]} rotation={[0, 0, -0.5]}>
        <capsuleGeometry args={[0.09, 0.34, 6, 16]} />
        <meshStandardMaterial color="#d5d9df" metalness={0.85} roughness={0.3} />
      </mesh>

      {/* the ring — kin of the hero sculpture */}
      <group ref={inner}>
        <mesh rotation={[1.35, 0, 0]}>
          <torusGeometry args={[0.72, 0.028, 16, 80]} />
          <meshStandardMaterial color="#c9ccd4" metalness={1} roughness={0.12} envMapIntensity={1.4} />
        </mesh>
      </group>

      {/* thruster */}
      <mesh position={[0, -0.52, 0]} rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[0.16, 0.22, 20]} />
        <meshStandardMaterial color="#9a9da6" metalness={0.9} roughness={0.35} />
      </mesh>
      <mesh position={[0, -0.68, 0]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial
          ref={thruster}
          color="#cfe8f8"
          emissive="#9fd8ff"
          emissiveIntensity={1.4}
          roughness={0.2}
          transparent
          opacity={0.9}
        />
      </mesh>
      <pointLight position={[0, -0.8, 0.3]} intensity={0.6} color="#bfe3ff" distance={2.5} />
    </group>
  );
}

/**
 * A fixed, click-through canvas: the robot escorts the reader down the
 * page. Desktop only, skipped for reduced motion.
 */
export default function FlyingRobot() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const wide = window.matchMedia("(min-width: 1024px)").matches;
    if (!reduced && wide) setReady(true);
  }, []);

  if (!ready) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-40">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 8], fov: 35 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <Environment resolution={128} frames={1}>
          <mesh scale={50}>
            <sphereGeometry args={[1, 24, 24]} />
            <meshBasicMaterial color="#b9bcc4" side={THREE.BackSide} />
          </mesh>
          <Lightformer form="rect" intensity={2.6} position={[0, 5, -6]} rotation={[Math.PI / 2.6, 0, 0]} scale={[10, 8, 1]} color="#ffffff" />
          <Lightformer form="rect" intensity={1.2} position={[-5, 0, -1]} rotation={[0, Math.PI / 2, 0]} scale={[10, 1.4, 1]} color="#eef1f8" />
          <Lightformer form="ring" intensity={1.2} position={[0, 1, 6]} scale={3} color="#ffffff" />
        </Environment>
        <Robot />
      </Canvas>
    </div>
  );
}
