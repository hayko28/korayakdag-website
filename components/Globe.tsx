"use client";

import dynamic from "next/dynamic";

const Globe = dynamic(() => import("react-globe.gl"), {
  ssr: false,
});

const points = [
  { lat: 41.0082, lng: 28.9784, size: 0.35, color: "#ff7a00" }, // İstanbul
  { lat: 25.2048, lng: 55.2708, size: 0.35, color: "#00bfff" }, // Dubai
  { lat: 51.5072, lng: -0.1276, size: 0.35, color: "#00bfff" }, // Londra
  { lat: 40.7128, lng: -74.0060, size: 0.35, color: "#00bfff" }, // New York
];

const arcs = [
  {
    startLat: 41.0082,
    startLng: 28.9784,
    endLat: 25.2048,
    endLng: 55.2708,
    color: ["#ff7a00", "#00bfff"],
  },
  {
    startLat: 25.2048,
    startLng: 55.2708,
    endLat: 51.5072,
    endLng: -0.1276,
    color: ["#00bfff", "#ff7a00"],
  },
  {
    startLat: 51.5072,
    startLng: -0.1276,
    endLat: 40.7128,
    endLng: -74.0060,
    color: ["#00bfff", "#ff7a00"],
  },
];

export default function GlobeComponent() {
  return (
    <Globe
      width={520}
      height={520}
      globeImageUrl="https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"
      backgroundColor="rgba(0,0,0,0)"
      pointsData={points}
      pointAltitude="size"
      pointColor="color"
      pointRadius={0.45}
      arcsData={arcs}
      arcColor="color"
      arcStroke={0.8}
      arcDashLength={0.4}
      arcDashGap={0.2}
      arcDashAnimateTime={2500}
    />
  );
}