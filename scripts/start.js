import { spawn } from 'node:child_process';

const port = process.env.PORT || '4173';
const viteCommand = process.platform === 'win32' ? 'vite.cmd' : 'vite';

const server = spawn(
  viteCommand,
  ['preview', '--host', '0.0.0.0', '--port', String(port)],
  {
    stdio: 'inherit',
    shell: process.platform === 'win32',
  },
);

server.on('exit', (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
  }

  process.exit(code ?? 1);
});

for (const signal of ['SIGINT', 'SIGTERM']) {
  process.on(signal, () => server.kill(signal));
}
