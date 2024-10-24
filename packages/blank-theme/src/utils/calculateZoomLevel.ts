const calculateZoomLevel = (radius: number) => {
   const scale = radius / 500;
   return Math.round(16 - Math.log(scale) / Math.LN2);
};

export default calculateZoomLevel;
