import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('generate:core', () => {
  it('runs generate:core cmd', async () => {
    const {stdout} = await runCommand('generate:core')
    expect(stdout).to.contain('hello world')
  })

  it('runs generate:core --name oclif', async () => {
    const {stdout} = await runCommand('generate:core --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
