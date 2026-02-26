const nextConfig = {
    async rewrites() {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
        return [
            { source: "/api/portfolio", destination: `${apiUrl}/api/portfolio/` },
            { source: "/api/portfolio/", destination: `${apiUrl}/api/portfolio/` },
            { source: "/api/portfolio/:path*", destination: `${apiUrl}/api/portfolio/:path*/` },
        ];
    },
};

export default nextConfig;
