import test from 'ava'
import fakers from '..'

// TODO: Implement module test
test('<test-title>', t => {
  const err = t.throws(() => fakers(100), TypeError)
  t.is(err.message, 'Expected a string, got number')

  t.is(fakers('w'), 'w@zce.me')
  t.is(fakers('w', { host: 'wedn.net' }), 'w@wedn.net')
})
