import React from 'react';
import { PreloadedState } from '@reduxjs/toolkit';
import { ReactNode } from 'react';

import { RootState } from '../../store/store';

interface Props {
  title: string;
  preloadedState: PreloadedState<RootState>;
  style?: string;
  children?: ReactNode;
}

function Html({ style, children, preloadedState, title }: Props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="favicon.ico" />
        <link rel="stylesheet" href={style} />
        {import.meta.env.DEV && (
          <script
            type="module"
            dangerouslySetInnerHTML={{
              __html: `
                import RefreshRuntime from '/@react-refresh';
                RefreshRuntime.injectIntoGlobalHook(window);
                window.$RefreshReg$ = () => {};
                window.$RefreshSig$ = () => (type) => type;
                window.__vite_plugin_react_preamble_installed__ = true;
                `,
            }}
          />
        )}
        <title>{title}</title>
      </head>
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<b>Enable JavaScript to run this app.</b>`,
          }}
        />
        <div id="root">{children}</div>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
              /</g,
              '\\u003c'
            )}`,
          }}
        />
      </body>
    </html>
  );
}

export default Html;
