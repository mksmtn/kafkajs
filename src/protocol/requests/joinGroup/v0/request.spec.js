const RequestV0Protocol = require('./request')

describe('Protocol > Requests > JoinGroup > v0', () => {
  test('request', () => {
    const groupId = 'test-group'

    const { buffer } = RequestV0Protocol({
      groupId,
      sessionTimeout: 30000,
      memberId: '',
      protocolType: 'consumer',
      groupProtocols: [{ name: 'default' }],
    }).encode()

    expect(buffer).toEqual(Buffer.from(require('../fixtures/v0_request.json')))
  })
})
