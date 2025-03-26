/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  
  


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//       remotePatterns: [
//         {
//           protocol: 'https',
//           hostname: 'res.cloudinary.com'
//         }
//       ]
//     },
//     eslint: {
//       ignoreDuringBuilds: true, // 🚀 Ignora errores de ESLint en el build
//     }
//   };
  
//   export default nextConfig;
  

