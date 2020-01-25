const chai = require('chai')
const { expect } = chai
const seed = require('./../src/db/seed')
const db = require('./../src/db')
const { makeUserRepository } = require('./../src/db/repositories')

describe('repository test', () => {
  before(async () => {
    // populate user data
    await seed()
    makeUserRepository.initial(db)
  })

  it('Get user by email', async () => {
    const userRepo = makeUserRepository()
    const user = await userRepo.getUserBy('email', 'user@gmail.com')
    expect(user).to.have.all.keys('id', 'email', 'password', 'nickname')
  })
  it('Create user', async () => {
    const userRepo = makeUserRepository()
    const user = await userRepo.createUser({ email: 'new@gmail.com', password: 'newpass', nickname: 'newnickname' })
    expect(user).to.have.all.keys('id', 'email', 'password', 'nickname')
  })
  it('Update user', async () => {
    const userRepo = makeUserRepository()
    const user = await userRepo.updateUser({ param: 'password', value: 'newpassword', email: 'user2@gmail.com' })
    expect(user).to.have.all.keys('id', 'email', 'password', 'nickname')
  })
})
