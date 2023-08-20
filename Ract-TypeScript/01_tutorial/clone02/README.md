## 프로젝트 생성

```bash
// 프로젝트 생성
npm create vite@latest

...엔터

// 이동

cd 프로젝트 이름

// npm 설치

npm install

// 패키지 설치
```

## 패키지 설치

```bash
// 설치 명령어
npm i

// 애니메이션 패키지
framer-motion

// 페이지 이동관련 패키지**
react-anchor-link-smooth-scroll@1.0.12

// tailwind 에서 만든 icon 패키지
@heroicons/react

npm i framer-motion react-anchor-link-smooth-scroll@1.0.12 @heroicons/react
npm i -D @types/react-anchor-link-smooth-scroll@1.0.2 @types/node

```



## 테일윈드 설정

```bash
// tailwind 사이트 오픈
command + ctrl + T

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Tailwindconfig.js

```json
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## 스타일 설정

```bash
npm i -D prettier prettier-plugin-tailwindcss
```

Prettier.config.cjs

```
module.exports = {
	plugins: [require("prettier-plugin-tailwindcss")],
};

// import tailwindcss from "prettier-plugin-tailwindcss";

// export default {
//   plugins: [tailwindcss],
// };
```

tailwind.config.cjs

```
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"gray=20": "#F8F4EB",
				"gray=50": "#EFE6E6",
				"gray=100": "#DFCCCC",
				"gray=500": "#5E0000",
				"primary-100": "#FFE1E0",
				"primary-300": "#FFA6A3",
				"primary-500": "#FF6B66",
				"secondary-400": "#FFCD58",
				"secondary-500": "#FFC132"
			},
			backgroundImage: (theme) => ({
				"gradient-yellowred": "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
				"mobile-home": "url('./assets/HomePageGraphic.png"
			}),
			fontFamily: {
				dmsans: ["DM Sans", "sans-serif"],
				montserrat: ["Montserrat", "sans-serif"],
			},
			content: {
				evolvetext: "url('./assets/EvolveText.png')",
				abstractwaves: "url('./assets/abstractwaves.png')",
				sparkles: "url('./assets/sparkles.png')",
				cirlces: "url('./assets/cirlces.png')",
			}
		},
		screens: {
			xs: "480px",
			sm: "768px",
			md: "1060px",
		}
	},
	plugins: [],
};

```

Typescript 설정

```
{
  "compilerOptions": {
    "paths": {
      "@/*": [
        "./src/*"
      ]
    },
    "target": "ESNext",
    "useDefineForClassFields": true,
    "lib": [
      "ESNext",
      "DOM",
      "DOM.Iterable"
    ],
    "module": "ESNext",
    "skipLibCheck": true,
    /* Bundler mode */
    "moduleResolution": "Node",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": [
    "src"
  ],
  "references": [
    {
      "path": "./tsconfig.node.json"
    }
  ]
}
```



시작

```bash
npm run dev
```

