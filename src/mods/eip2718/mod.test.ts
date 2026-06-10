import { Readable, Writable } from "@hazae41/binary";
import { assert, test } from "@hazae41/phobos";
import { EIP2718TypedTransactionEnvelope } from "./mod.ts";

test("eip2718", () => {
  const hex = "00f86280648203e894d8da6bf26964af9d7eed9e03e53415d37aa96045648301020325a0c53e73f5b3db64db4d2d67b60da202880d51864ca912637d2518214bb4569a31a0255af6e295bfb49487ff073619c110d48d01e73838d4578f4d7adb3a281f0756"
  const tte = Readable.readFromBytes(EIP2718TypedTransactionEnvelope, Uint8Array.fromHex(hex))

  console.log(tte.data)

  assert(Writable.writeToBytes(tte).toHex() === hex)
})