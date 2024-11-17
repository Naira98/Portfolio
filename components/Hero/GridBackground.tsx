const GridBackground = () => {
  return (
    <div className="absolute left-0 top-0 -z-10 flex h-screen w-full items-center justify-center dark:bg-black-100 dark:bg-grid-white/[0.05]">
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
    </div>
  );
};

export default GridBackground;
