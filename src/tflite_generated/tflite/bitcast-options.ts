// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

export class BitcastOptions {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):BitcastOptions {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsBitcastOptions(bb:flatbuffers.ByteBuffer, obj?:BitcastOptions):BitcastOptions {
  return (obj || new BitcastOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsBitcastOptions(bb:flatbuffers.ByteBuffer, obj?:BitcastOptions):BitcastOptions {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new BitcastOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static startBitcastOptions(builder:flatbuffers.Builder) {
  builder.startObject(0);
}

static endBitcastOptions(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createBitcastOptions(builder:flatbuffers.Builder):flatbuffers.Offset {
  BitcastOptions.startBitcastOptions(builder);
  return BitcastOptions.endBitcastOptions(builder);
}
}
