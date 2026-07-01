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
html, body, #root {
  height: 100%;
  margin: 0;
  padding: 0;
}
body {
  background-color: #0a0e1a;
  color: #f4f6fb;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
input, textarea {
  outline: none;
}
input:focus, textarea:focus {
  border-color: rgba(212, 175, 55, 0.5) !important;
}
`;
