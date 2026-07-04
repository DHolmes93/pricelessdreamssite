import { ScrollViewStyleReset } from 'expo-router/html';

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="Priceless Dreams — tech enterprise building apps, platforms, and innovative digital products."
        />
        <title>Priceless Dreams</title>
        <ScrollViewStyleReset />
        <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
      </head>
      <body>{children}</body>
    </html>
  );
}

const globalStyles = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

html {
  scroll-behavior: smooth;
}

html, body, #root {
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  background-color: #F7F9FC;
  color: #1B2B39;
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

input, textarea, button {
  font-family: inherit;
}

input, textarea {
  outline: none;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

input:focus, textarea:focus {
  border-color: rgba(43, 108, 176, 0.55) !important;
  box-shadow: 0 0 0 3px rgba(43, 108, 176, 0.12);
}

::selection {
  background: rgba(43, 108, 176, 0.18);
}
`;
