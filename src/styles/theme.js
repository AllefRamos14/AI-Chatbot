// export const theme = {
//   colors: {
//     background: "#0a0a0f",
//     surface: "rgba(255, 255, 255, 0.04)",
//     surfaceStrong: "rgba(255, 255, 255, 0.08)",
//     surfaceMid: "#3d3a52",       

//     primary: "#7c4dff",
//     primaryHover: "rgba(124, 77, 255, 0.15)",
//     primaryStrong: "#9d74ff",    
//     secondary: "#00c8b4",

//     text: "#e8e6f0",
//     textStrong: "#f0eeff",
//     textMuted: "#7d7995",       
//     textDisabled: "#6b6880",     

//     border: "rgba(255, 255, 255, 0.08)",
//     borderStrong: "rgba(255, 255, 255, 0.16)",

//     danger: "#ff8080",
//     success: "#4ade80",
//     warning: "#fbbf24",
//   },

//   radii: {
//     sm: "8px",
//     md: "12px",
//     lg: "16px",
//     full: "9999px",
//   },

//   transitions: {
//     fast: "0.15s ease",
//     base: "0.2s ease",
//   },

//   fonts: {
//     primary: "'Syne', sans-serif",
//     mono: "'DM Mono', monospace",
//   },
// };


export const darkTheme = {
  name: "dark",

  colors: {
    background: "#09090f",
    surface: "#11111a",
    surfaceStrong: "#1a1a27",
    surfaceHover: "#222233",
    sidebar: "linear-gradient(180deg, rgba(31, 9, 52, 0.96), rgba(3, 13, 16, 0.98))",
    textStrong: "#f8fafc",
    textDisabled: "#64748b",
    surfaceMid: "#334155",
    primaryHover: "rgba(124,77,255,.14)",
    danger: "#ef4444",
    

    text: "#f8fafc",
    textMuted: "#94a3b8",
    gray: "#94a3b8",

    primary: "#8b5cf6",
    secondary: "#00c8b4",

    border: "rgba(255,255,255,0.08)",
  },

  fonts: {
    primary: "'Inter', sans-serif",
    mono: "'DM Mono', monospace",
  },

  radii: {
    sm: "8px",
    md: "12px",
    lg: "18px",
    full: "999px",
  },

  transitions: {
    fast: "0.2s ease",
  },
};

export const lightTheme = {
  ...darkTheme,

  name: "light",

  colors: {
    background: "#f8fafc",
    surface: "#ffffff",
    surfaceStrong: "#f1f5f9",
    surfaceHover: "#e2e8f0",
    sidebar: "linear-gradient(180deg, #ffffff, #f1f5f9)",
    textStrong: "#0f172a",
    textDisabled: "#94a3b8",
    surfaceMid: "#cbd5e1",
    primaryHover: "rgba(124, 77, 255, 0.10)",
    danger: "#dc2626",

    text: "#0f172a",
    textMuted: "#64748b",
    gray: "#64748b",

    primary: "#7c3aed",
    secondary: "#16a34a",
    

    border: "rgba(15,23,42,0.1)",
  },
};