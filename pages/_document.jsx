import getConfig from 'next/config';
import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';
import tachyons from 'tachyons/css/tachyons.min.css';

const { publicRuntimeConfig } = getConfig();
const consoleFormat = 'background-color: #ffe45e; font-weight: bold; padding: 2px 5px;';
const consoleVersion = `%cVersión ${publicRuntimeConfig.REACT_APP_VERSION}`;

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="es">
        <Head>
          <link rel="preconnect" href="https://www.google-analytics.com" />
          <link rel="preconnect" href="https://unpkg.com" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <script async src="https://unpkg.com/boxicons@1.7.1/dist/boxicons.js" />
          <link
            rel="shortcut icon"
            href={`${publicRuntimeConfig.REACT_APP_URL}static/favicon.ico`}
          />
          <style jsx global>
            {`
              ${tachyons} ::-moz-selection {
                background-color: var(--color-secondary);
              }

              :root {
                --color-primary: #2e282a;
                --color-secondary: #ffe45e;
                --color-tertiary: #fffceb;
                --color-quaternary: #6a5359;
                --transition: all 0.35s ease-out;
              }

              ::selection {
                background-color: var(--color-secondary);
              }

              body {
                margin: 0;
                -moz-osx-font-smoothing: grayscale;
                padding-top: 68px;
                -webkit-font-smoothing: antialiased;
              }

              .bg-yellow-alternative {
                background-color: var(--color-secondary);
              }

              .black-alternative {
                color: var(--color-primary);
              }

              .black-alternative-light {
                color: var(--color-quaternary);
              }

              .center-iframe-child > iframe {
                display: block;
                margin: 0 auto;
              }

              .current-page::after {
                color: #98d083;
                content: '•';
                font-weight: bold;
                right: -0.5rem;
                position: absolute;
              }

              .cursor-default {
                cursor: default;
              }

              .custom-min-vh-100 {
                min-height: calc(100vh - 68px);
              }

              .easter-egg {
                bottom: 0;
                opacity: 0;
                position: fixed;
                right: 0;
                transition: var(--transition);
                transform: translateX(150px);
                width: 150px;
                z-index: 5;
              }

              .easter-egg-active {
                opacity: 1;
                transform: translateX(0);
              }

              .easter-egg-message {
                background: white;
                border: 1px solid rgba(0, 0, 0, 0.7);
                border-radius: 5px;
                bottom: 130px;
                box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
                max-width: 250px;
                padding: 0.5rem 1rem;
                position: fixed;
                right: 125px;
                transform: translateX(15px);
                transition-delay: 0.25s;
                width: 100%;
                z-index: 5;
              }

              .empty-day {
                background: repeating-linear-gradient(
                  45deg,
                  #f9f9f9,
                  #f9f9f9 10px,
                  rgba(0, 0, 0, 0.05) 10px,
                  rgba(0, 0, 0, 0.05) 20px
                );
              }

              .f30 {
                font-size: 30px;
              }

              @keyframes fadeIn {
                0% {
                  opacity: 0;
                }

                100% {
                  opacity: 1;
                }
              }

              .fade-in {
                animation-duration: 1s;
                animation-name: fadeIn;
              }

              @keyframes fadeInDown {
                0% {
                  opacity: 0;
                  transform: translate3d(0, -15%, 0);
                }

                100% {
                  opacity: 1;
                  transform: none;
                }
              }

              .fade-in-down {
                animation-duration: 0.5s;
                animation-name: fadeInDown;
              }

              .h50 {
                height: 50px;
              }

              .image-shadow {
                box-shadow: 8px 8px var(--color-secondary);
              }

              .markdown-body {
                line-height: 1.5;
              }

              .markdown-body > div > *:first-child {
                margin-bottom: 2rem;
                margin-top: 0;
              }

              .markdown-body > div > *:last-child {
                margin-bottom: 0;
              }

              .markdown-body > div a {
                box-shadow: inset 0 -2px 0 0 var(--color-secondary);
                color: var(--color-primary);
                display: inline-block;
                font-weight: bold;
                padding-left: 0.125rem;
                padding-right: 0.125rem;
                transition: var(--transition);
                text-decoration: none;
              }

              .markdown-body > div a:hover {
                background-color: var(--color-secondary);
              }

              .markdown-body > div blockquote {
                background-color: var(--color-tertiary);
                border-left: 0.25rem solid var(--color-secondary);
                font-style: italic;
                margin-left: 0;
                margin-right: 0;
                padding: 0.125rem 1rem;
              }

              .markdown-body > div h1 {
                color: var(--color-primary);
                font-size: 2rem;
                line-height: 1.25;
                text-align: center;
              }

              .markdown-body > div h2 {
                color: var(--color-quaternary);
                margin: 2rem 0;
              }

              .markdown-body > div h3,
              .markdown-body > div h4,
              .markdown-body > div h5,
              .markdown-body > div h6 {
                color: #777;
                margin: 1rem 0;
              }

              .markdown-body > div img {
                display: block;
                width: 100%;
              }

              .markdown-body > div strong {
                border-radius: 1em 0 1em 0;
                background-image: linear-gradient(
                  -100deg,
                  rgba(250, 247, 133, 0.3),
                  rgba(250, 247, 133, 0.7) 95%,
                  rgba(250, 247, 133, 0.1)
                );
              }

              .mw175 {
                max-width: 175px;
              }

              .m-h5 {
                max-height: 16rem;
              }

              .m-vh-75 {
                max-height: 75vh;
              }

              .page-transition-enter {
                opacity: 0;
                transform: translate3d(0, 20px, 0);
              }

              .page-transition-enter-active {
                opacity: 1;
                transform: translate3d(0, 0, 0);
                transition: opacity 400ms, transform 400ms;
              }

              .page-transition-exit {
                opacity: 1;
              }

              .page-transition-exit-active {
                opacity: 0;
                transition: opacity 400ms;
              }

              .service-status + .service-status {
                margin-top: 1rem;
              }

              .user-select-none {
                user-select: none;
              }

              .visually-hidden {
                border: 0 !important;
                clip: rect(1px, 1px, 1px, 1px);
                height: 1px !important;
                overflow: hidden;
                padding: 0 !important;
                position: absolute !important;
                width: 1px !important;
              }

              .w30 {
                width: 30px;
              }

              .w50 {
                width: 50px;
              }

              @media screen and (min-width: 60em) {
                .bottom-particles {
                  height: 100%;
                  position: relative;
                  width: 100%;
                }

                @keyframes blow {
                  0% {
                    transform: translate3d(5px, 0, 0);
                    opacity: 0;
                  }
                  13% {
                    transform: translate3d(2px, -50px, 0);
                    opacity: 1;
                  }
                  20% {
                    transform: translate3d(5px, -80px, 0) scale(1.2);
                  }
                  30% {
                    transform: translate3d(0px, -160px, 0);
                  }
                  40% {
                    transform: translate3d(8px, -180px, 0);
                  }
                  50% {
                    transform: translate3d(3px, -300px, 0);
                  }
                  60% {
                    transform: translate3d(8px, -340px, 0);
                  }
                  70% {
                    opacity: 0.4;
                  }
                  80%,
                  100% {
                    transform: translate3d(0, -100vh, 0);
                    opacity: 0;
                  }
                }

                .bubble {
                  position: relative;
                  animation-iteration-count: infinite;
                  animation-name: blow;
                  animation-fill-mode: forwards;
                  background-color: rgba(240, 240, 240, 0.2);
                  background-position: center;
                  background-repeat: no-repeat;
                  background-size: contain;
                  bottom: -2vh;
                  opacity: 0;
                  position: absolute;
                  border: 1px solid rgba(240, 240, 240, 0.5);
                  border-radius: 50%;
                }

                .bubble::before {
                  position: absolute;
                  content: '';
                  width: 50%;
                  height: 25%;
                  background: rgba(255, 255, 255, 0.2);
                  border-radius: 50%;
                  top: 0;
                  right: 0;
                }

                .image-shadow-container {
                  margin: 4rem -5rem;
                }

                .markdown-body.big-font > div {
                  font-size: 1.25rem;
                }

                .width-one-seventh-l {
                  width: calc(100% / 7);
                }
              }
            `}
          </style>
        </Head>
        <body>
          <div className="black-alternative lh-title sans-serif">
            <Main />
            <NextScript />
          </div>
          <script>
            console.log(`
            {consoleVersion}
            `, `
            {consoleFormat}
            `);
          </script>
        </body>
      </html>
    );
  }
}
