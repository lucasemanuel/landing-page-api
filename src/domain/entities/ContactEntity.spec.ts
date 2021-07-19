class ContactEntity {
  constructor (public readonly name: string) {}
}

describe('Contact Entity', () => {
  test('should contain correct name', () => {
    const sut = new ContactEntity('any_name')
    expect(sut.name).toBe('any_name')
  })
})
