interface Builder<TObj = {}> {
  addField: <Key extends PropertyKey, Value>(
    key: Key,
    value: Value,
  ) => Builder<TObj & {[K in Key]: Value}>
  value: TObj
}

class MyBuilder<TObj = {}> implements MyBuilder<TObj> {
  value: TObj

  constructor(value: TObj) {
    this.value = value
  }

  addField<Key extends PropertyKey, Value>(
    key: Key,
    value: Value,
  ): MyBuilder<TObj & {[K in Key]: Value}> {
    const newValue = Object.assign(this.value, {[key]: value}) as TObj & {
      [K in Key]: Value
    }
    return new MyBuilder<TObj & {[K in Key]: Value}>(newValue)
  }
}

const myBuilder = new MyBuilder({})

const value = myBuilder
  .addField('number', 1)
  .addField('string', 'hello')
  .addField('array', [1, 2, 3])
  .addField('object', {key: 'value'})
  .addField('promise', Promise.resolve()).value

console.log(value)
//           ^?
