// import { useEffect, useState } from "react";
// import { ThemeProvider } from "styled-components";

// import { Home } from "./pages/Home";
// import { Login } from "./pages/Login";

// import { GlobalStyles } from "./styles/GlobalStyles";
// import { darkTheme, lightTheme } from "./styles/theme";

// export default function App() {
//   const [isLogged, setIsLogged] = useState(() => {
//     return Boolean(localStorage.getItem("@devcore:user"));
//   });

//   const [themeMode, setThemeMode] = useState(() => {
//     return localStorage.getItem("@devcore:theme") || "dark";
//   });

//   useEffect(() => {
//     localStorage.setItem(
//       "@devcore:theme",
//       themeMode
//     );
//   }, [themeMode]);

//   function toggleTheme() {
//     setThemeMode((prev) =>
//       prev === "dark" ? "light" : "dark"
//     );
//   }

//   function handleGuestAccess() {
//     setIsLogged(true);
//   }

//   function handleLogout() {
//     localStorage.removeItem("@devcore:user");

//     setIsLogged(false);
//   }

//   const selectedTheme =
//     themeMode === "dark"
//       ? darkTheme
//       : lightTheme;

//   return (
//     <ThemeProvider theme={selectedTheme}>
//       <GlobalStyles />

//       {isLogged ? (
//         <Home
//           onLogout={handleLogout}
//           themeMode={themeMode}
//           toggleTheme={toggleTheme}
//         />
//       ) : (
//         <Login
//           onGuestAccess={handleGuestAccess}
//         />
//       )}
//     </ThemeProvider>
//   );
// }

import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

import { checkGoogleRedirect, logoutFirebase } from "./services/firebase";

import { GlobalStyles } from "./styles/GlobalStyles";
import { darkTheme, lightTheme } from "./styles/theme";

export default function App() {
  const [isLogged, setIsLogged] = useState(() => {
    return Boolean(localStorage.getItem("@devcore:user"));
  });

  const [themeMode, setThemeMode] = useState(() => {
    return localStorage.getItem("@devcore:theme") || "dark";
  });

  useEffect(() => {
    async function loadGoogleRedirect() {
      const user = await checkGoogleRedirect();

      if (user) {
        localStorage.setItem(
          "@devcore:user",
          JSON.stringify({
            name: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            provider: "google",
          })
        );

        setIsLogged(true);
      }
    }

    loadGoogleRedirect();
  }, []);

  useEffect(() => {
    localStorage.setItem("@devcore:theme", themeMode);
  }, [themeMode]);

  function toggleTheme() {
    setThemeMode((prev) => (prev === "dark" ? "light" : "dark"));
  }

  function handleGuestAccess() {
    localStorage.setItem(
      "@devcore:user",
      JSON.stringify({
        name: "Visitante",
        provider: "guest",
      })
    );

    setIsLogged(true);
  }

  async function handleLogout() {
    await logoutFirebase();

    localStorage.removeItem("@devcore:user");

    setIsLogged(false);
  }

  const selectedTheme = themeMode === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />

      {isLogged ? (
        <Home
          onLogout={handleLogout}
          themeMode={themeMode}
          toggleTheme={toggleTheme}
        />
      ) : (
        <Login onGuestAccess={handleGuestAccess} />
      )}
    </ThemeProvider>
  );
}