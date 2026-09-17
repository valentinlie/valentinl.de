import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { runInNewContext } from 'node:vm';

const layout = readFileSync(new URL('../src/layouts/Layout.astro', import.meta.url), 'utf8');
const header = readFileSync(new URL('../src/components/Header.astro', import.meta.url), 'utf8');
const init = layout.match(/<script is:inline>([\s\S]*?)<\/script>/)[1];
const toggle = header.match(/<script>([\s\S]*?)<\/script>/)[1];

test('theme respects preferences, persists, and works with blocked storage', () => {
  for (const systemLight of [true, false]) {
    for (const saved of [null, 'light', 'dark', 'invalid']) {
      for (const blocked of [true, false]) {
        const attributes = new Map();
        let stored = saved;
        let click;
        const button = {
          setAttribute: (name, value) => attributes.set(name, value),
          addEventListener: (_, callback) => { click = callback; },
        };
        const context = {
          window: { matchMedia: () => ({ matches: systemLight }) },
          document: {
            documentElement: {
              setAttribute: (name, value) => attributes.set(name, value),
              getAttribute: name => attributes.get(name),
            },
            getElementById: () => button,
          },
          localStorage: {
            getItem: () => {
              if (blocked) throw new Error('Storage blocked');
              return stored;
            },
            setItem: (_, value) => {
              if (blocked) throw new Error('Storage blocked');
              stored = value;
            },
          },
        };
        const expected = !blocked && ['light', 'dark'].includes(saved)
          ? saved : systemLight ? 'light' : 'dark';
        runInNewContext(init + '\n' + toggle, context);
        assert.equal(attributes.get('data-theme'), expected);
        assert.equal(attributes.get('aria-pressed'), String(expected === 'dark'));
        for (const next of [expected === 'dark' ? 'light' : 'dark', expected]) {
          click();
          assert.equal(attributes.get('data-theme'), next);
          assert.equal(attributes.get('aria-pressed'), String(next === 'dark'));
          assert.equal(stored, blocked ? saved : next);
        }
      }
    }
  }
});
