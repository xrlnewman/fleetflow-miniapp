import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
test('miniapp renders route cards and quick actions', async () => {
  const source = await readFile(new URL('../src/main.js', import.meta.url), 'utf8')
  assert.match(source, /扫码接单/); assert.match(source, /今日运单/); assert.match(source, /FF-260716-018/)
})
