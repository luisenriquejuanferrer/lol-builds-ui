const BackgroundBlob = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 800 800"
    className="w-full h-full"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <filter id="bbblurry-filter" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feGaussianBlur stdDeviation="85" in="SourceGraphic" result="blur" />
      </filter>
    </defs>
    <g filter="url(#bbblurry-filter)">
      <ellipse rx="192.5" ry="197.5" cx="500.99" cy="380.01" fill="hsl(316, 73%, 52%)" fillOpacity="0.5" />
      <ellipse rx="192.5" ry="197.5" cx="292.14" cy="375.45" fill="hsl(185, 100%, 52%)" fillOpacity="0.5" />
    </g>
  </svg>
);

export default BackgroundBlob;