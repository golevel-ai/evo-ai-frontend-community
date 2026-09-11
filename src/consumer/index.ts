// Hablas brand customization entry point.
//
// This is the ONLY file the community `src/main.tsx` imports from this
// folder. Everything under `src/consumer/` is owned by golevel-ai and is
// never touched by upstream `evolution-foundation` merges — see
// `evo-ai-frontend-community/EXTENSION_POINTS.md` for the contract this
// relies on (CSS tokens + plugin registry).
import { registerPlugin } from '@/plugin-host';
import './theme.css';

registerPlugin({
  id: 'hablas',
});
