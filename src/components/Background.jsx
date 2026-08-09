import Particles from "./Particles";

export default function Background() {
  return (
    <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
      <Particles
        particleColors={["#3B82F6", "#60A5FA", "#93C5FD"]}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={true}
        disableRotation={false}
        pixelRatio={Math.min(window.devicePixelRatio, 2)}
      />
    </div>
  );
}