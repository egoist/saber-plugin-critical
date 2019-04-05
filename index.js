const ID = 'critical'

exports.name = ID

exports.apply = api => {
  if (api.mode !== 'production') return

  api.hooks.beforeRun.tap(ID, () => {
    api.log.debug('[critical] Setting `css.extract` to true in Saber config')
    api.config.css.extract = true
  })

  api.hooks.afterGenerate.tapPromise(ID, async () => {
    const critical = require('critical')

    const files = await api.utils.glob('**/*.html', {
      cwd: api.resolveCache('public'),
      absolute: true
    })

    await Promise.all(
      files.map(file => {
        return critical
          .generate({
            inline: true,
            src: file,
            base: api.resolveCache('public')
          })
          .then(html => {
            return api.utils.fs.outputFile(file, html)
          })
      })
    )
  })
}
