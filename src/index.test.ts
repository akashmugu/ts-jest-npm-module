import { sayHello } from './index'

test('sayHello with correct name', () => {
  expect(sayHello('Alice')).toBe('Hello Alice')
  expect(sayHello('Bob')).toBe('Hello Bob')
})
