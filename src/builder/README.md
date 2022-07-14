## Run

```bash
bun run ./src/builder/index.ts
```

## Type

```typescript
const value: {
  number: number
} & {
  string: string
} & {
  array: number[]
} & {
  object: {
    key: string
  }
} & {
  promise: Promise<void>
}
```

## Result

![Builder pattern implementation result](./builder.png 'Builder pattern')
