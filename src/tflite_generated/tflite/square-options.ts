// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

export class SquareOptions {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):SquareOptions {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsSquareOptions(bb:flatbuffers.ByteBuffer, obj?:SquareOptions):SquareOptions {
  return (obj || new SquareOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsSquareOptions(bb:flatbuffers.ByteBuffer, obj?:SquareOptions):SquareOptions {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new SquareOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static startSquareOptions(builder:flatbuffers.Builder) {
  builder.startObject(0);
}

static endSquareOptions(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createSquareOptions(builder:flatbuffers.Builder):flatbuffers.Offset {
  SquareOptions.startSquareOptions(builder);
  return SquareOptions.endSquareOptions(builder);
}
}
