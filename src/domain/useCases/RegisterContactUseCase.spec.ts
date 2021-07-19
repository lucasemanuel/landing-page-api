import ContactEntity from '../entities/ContactEntity'
import ContactRepository from '../repositories/ContactRepository'
import RegisterContactDTO from '../dtos/RegisterContactDTO'
import RegisterContactUseCase from './RegisterContactUseCase'

const makeContactRepositorySpy = (): any => {
  class ContactRepositorySpy implements ContactRepository {
    public name: string
    public email: string

    public async insert (data: RegisterContactDTO): Promise<ContactEntity> {
      Object.assign(this, data)
      return new ContactEntity('any_name', 'any_email@email.com', 'any_id')
    }
  }

  return new ContactRepositorySpy()
}

const makeContactRepositoryWithErrorSpy = (): any => {
  class ContactRepositoryWithErrorSpy implements ContactRepository {
    public async insert (data: RegisterContactDTO): Promise<ContactEntity> {
      throw new Error()
    }
  }

  return new ContactRepositoryWithErrorSpy()
}
const makeSut = (): any => {
  const contactRepositorySpy = makeContactRepositorySpy()
  const sut = new RegisterContactUseCase(contactRepositorySpy)
  return {
    sut,
    contactRepositorySpy
  }
}

describe('Register Contact Use Case', () => {
  test('should call ContactRepository with correct params', async () => {
    const { contactRepositorySpy, sut } = makeSut()
    await sut.execute({
      name: 'any_name',
      email: 'any_email@email.com'
    })
    expect(contactRepositorySpy.name).toBe('any_name')
    expect(contactRepositorySpy.email).toBe('any_email@email.com')
  })
  test('should return a ContactEntity', async () => {
    const { sut } = makeSut()
    const contact = await sut.execute({
      name: 'any_name',
      email: 'any_email@email.com'
    })
    expect(contact).toBeInstanceOf(ContactEntity)
  })
  test('should throw error if ContactRepository throw', async () => {
    const contactRepositoryWithErrorSpy = makeContactRepositoryWithErrorSpy()
    const sut = new RegisterContactUseCase(contactRepositoryWithErrorSpy)
    const promise = sut.execute({
      name: 'any_name',
      email: 'any_email@email.com'
    })
    await expect(promise).rejects.toThrow()
  })
})
