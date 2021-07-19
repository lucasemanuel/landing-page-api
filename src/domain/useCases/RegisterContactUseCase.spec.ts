interface RegisterContactDTO {
  name: string
  email: string
}

class RegisterContactUseCase {
  constructor (private readonly contactRepository: ContactRepository) {}

  public async execute (data: RegisterContactDTO): Promise<void> {
    await this.contactRepository.insert(data)
  }
}

interface ContactRepository {
  insert: (data: RegisterContactDTO) => Promise<void>
}

class ContactRepositorySpy implements ContactRepository {
  public name: string
  public email: string

  public async insert (data: RegisterContactDTO): Promise<void> {
    Object.assign(this, data)
  }
}

describe('Register Contact Use Case', () => {
  test('should call ContactRepository with correct params', async () => {
    const contactRepositorySpy = new ContactRepositorySpy()
    const sut = new RegisterContactUseCase(contactRepositorySpy)
    await sut.execute({
      name: 'any_name',
      email: 'any_email@email.com'
    })
    expect(contactRepositorySpy.name).toBe('any_name')
    expect(contactRepositorySpy.email).toBe('any_email@email.com')
  })
})
