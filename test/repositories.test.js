const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const { expect } = chai
const seed = require('./../src/db/seed')
const db = require('./../src/db')
const makeRepository = require('./../src/db/repositories')
chai.use(chaiAsPromised)

makeRepository.initial(db)

describe('repository test', () => {
  before(async () => {
    // populate user data
    await seed()
  })

  it('find one user', async () => {
    const { usersRepo } = makeRepository()
    const users = await usersRepo.find({ email: 'user@gmail.com' })
    expect(users[0]).to.have.all.keys('id', 'email', 'password', 'nickname')
    expect(users[0].email).to.equal('user@gmail.com')
  })

  it('find all users', async () => {
    const { usersRepo } = makeRepository()
    const usersFirstTest = await usersRepo.find()
    // 4 because of in seed we have 4 users
    expect(usersFirstTest).to.have.lengthOf(4)
    // call with empty object
    const usersSecondTest = await usersRepo.find({})
    expect(usersSecondTest).to.have.lengthOf(4)
  })

  it('expect error when param with two keys', async () => {
    const { usersRepo } = makeRepository()
    // we can't do that for now
    return expect(usersRepo.find({ email: 'user@gmail.com', nickname: 'test' }))
      .to.be.rejectedWith('One key in param is required!')
  })
  it('crete user', async () => {
    const { usersRepo } = makeRepository()
    const users = await usersRepo.create({ email: 'test123@gmail.com', password: '123456', nickname: 'test123' })
    expect(users[0].nickname).to.equal('test123')
  })
  it('expect error when params missing', async () => {
    const { usersRepo } = makeRepository()
    return expect(usersRepo.create({}))
      .to.be.rejectedWith('You need to have keys')
  })
  it('update user', async () => {
    const { usersRepo } = makeRepository()
    const users = await usersRepo.update({ email: 'test1234@gmail.com', password: '1234567', nickname: 'test1234' }, {nickname: '@user3'})
    expect(users[0].nickname).to.equal('test1234')
  })
  it('expect error when params missing', async () => {
    const { usersRepo } = makeRepository()
    return expect(usersRepo.update({}))
      .to.be.rejectedWith('You need to have keys')
  })
  it('delete user', async () => {
    const { usersRepo } = makeRepository()
    const users = await usersRepo.deleteItem({nickname: '@user2'})
    expect(users[0].nickname).to.equal('@user2')
  })
  it('expect error when params missing', async () => {
    const { usersRepo } = makeRepository()
    return expect(usersRepo.deleteItem({}))
      .to.be.rejectedWith('You need to have keys')
  })
})
