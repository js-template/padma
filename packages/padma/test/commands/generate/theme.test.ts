import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('generate:theme', () => {
  it('runs generate:theme cmd', async () => {
    const {stdout} = await runCommand('generate:theme')
    expect(stdout).to.contain('hello world')
  })

  it('runs generate:theme --name oclif', async () => {
    const {stdout} = await runCommand('generate:theme --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
