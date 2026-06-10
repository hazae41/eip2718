# EIP-2718

EIP-2718 transactions for the web

```bash
npm install @hazae41/eip2718
```

[**📦 NPM**](https://www.npmjs.com/package/@hazae41/eip2718)

## Features

### Current features
- 100% TypeScript and ESM
- No external dependencies
- Rust-like patterns

## Usage

```tsx
const tte = Readable.readFromBytes(EIP2718TypedTransactionEnvelope, Uint8Array.fromHex(...))

console.log(tte.type) // number
console.log(tte.data) // RlpList

const hex = Writable.writeToBytes(tte).toHex()
```