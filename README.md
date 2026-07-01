# Priceless Dreams — Company Site

Marketing site for **Priceless Dreams**, a tech enterprise building apps, platforms, and digital products. Built with **React Native** and **Expo**, targeting **web**, iOS, and Android from one codebase.

## Pages

- **Home** (`/`) — Hero, services, stats, product portfolio, and call-to-action
- **Contact** (`/contact`) — Message form (opens your email client) and company details

Top navigation bar (Home | Contact) — no bottom tabs.

## Run locally

```bash
npm install
npm run web
```

Other targets:

```bash
npm start          # Expo dev menu
npm run ios
npm run android
```

## Stack

- [Expo](https://expo.dev) ~54
- [Expo Router](https://docs.expo.dev/router/introduction/) (file-based routes)
- [React Native Web](https://necolas.github.io/react-native-web/) for the website

## Customize

- Company copy and products: `constants/content.ts`
- Brand colors: `constants/Colors.ts`
- Contact email: `COMPANY.email` in `constants/content.ts`
