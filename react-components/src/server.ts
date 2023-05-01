import express from 'express';
import { createServer as createViteServer } from 'vite';

async function createServer() {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  app.use('*', async (req, res) => {
    try {
      const { render } = await vite.ssrLoadModule('src/entry-server.tsx');

      const assetMap = { client: 'src/entry-client.tsx', style: 'src/styles/index.css' };

      render(req, res, assetMap);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
    }
  });

  return { app };
}

createServer()
  .then(({ app }) =>
    app.listen(5173, () => {
      console.log('http://localhost:5173');
    })
  )
  .catch((e) => console.error(e));
