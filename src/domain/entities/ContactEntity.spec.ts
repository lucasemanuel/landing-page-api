class ContactEntity {
  constructor (
    public readonly name: string,
    public readonly email: string,
    public readonly id: string
  ) {}
}

describe('Contact Entity', () => {
  test('should contain correct name', () => {
    const sut = new ContactEntity('any_name', 'any_email@email.com', 'any_id')
    expect(sut.name).toBe('any_name')
  })
  test('should contain correct email', () => {
    const sut = new ContactEntity('any_name', 'any_email@email.com', 'any_id')
    expect(sut.email).toBe('any_email@email.com')
  })
  test('should contain correct email', () => {
    const sut = new ContactEntity('any_name', 'any_email@email.com', 'any_id')
    expect(sut.id).toBe('any_id')
  })
})
