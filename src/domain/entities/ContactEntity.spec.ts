class ContactEntity {
  constructor (public readonly name: string, public readonly email: string) {}
}

describe('Contact Entity', () => {
  test('should contain correct name and email', () => {
    const sut = new ContactEntity('any_name', 'any_email@email.com')
    expect(sut.name).toBe('any_name')
    expect(sut.email).toBe('any_email@email.com')
  })
})
