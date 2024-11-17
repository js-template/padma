import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('backend', () => {
  it('runs backend cmd', async () => {
    const {stdout} = await runCommand('backend')
    expect(stdout).to.contain('hello world')
  })

  it('runs backend --name oclif', async () => {
    const {stdout} = await runCommand('backend --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
