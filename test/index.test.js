const path = require('path')
const fs = require('fs-extra')
const execa = require('execa')

jest.setTimeout(30000)

test('main', async () => {
  const fixture = path.join(__dirname, 'fixture')
  await execa('rm', ['-rf', path.join(fixture, '.saber')])
  await execa('saber', ['generate'], {
    cwd: fixture
  })
  const html = await fs.readFile(
    path.join(fixture, '.saber/public/index.html'),
    'utf8'
  )
  expect(html).toContain('.foo')
  expect(html).not.toContain('.bar')
})
