// Applies Hablas brand copy on top of the community i18n bundles via
// i18next's own `addResourceBundle` API — no community locale JSON file is
// edited, so this survives upstream translation updates untouched.
// See EXTENSION_POINTS.md §4 (i18n namespace conventions) for the contract.
import i18n from '@/i18n/config';
import { overrides } from './overrides';

export function applyI18nOverrides(): void {
  for (const [lng, namespaces] of Object.entries(overrides)) {
    for (const [ns, resources] of Object.entries(namespaces)) {
      i18n.addResourceBundle(lng, ns, resources, true, true);
    }
  }
}
