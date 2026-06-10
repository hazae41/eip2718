import { Cursor } from "@hazae41/cursor";
import { Rlp } from "@hazae41/rlp";

export class EIP2718TypedTransactionEnvelope {

  constructor(
    readonly type: number,
    readonly data: Rlp,
  ) { }

  static read(cursor: Cursor) {
    const type = cursor.readUint8()
    const data = Rlp.read(cursor)

    return new EIP2718TypedTransactionEnvelope(type, data)
  }

  size(): number {
    return 1 + this.data.size()
  }

  write(cursor: Cursor) {
    cursor.writeUint8(this.type)

    this.data.write(cursor)

    return
  }

}