// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

export class RangeOptions {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):RangeOptions {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsRangeOptions(bb:flatbuffers.ByteBuffer, obj?:RangeOptions):RangeOptions {
  return (obj || new RangeOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsRangeOptions(bb:flatbuffers.ByteBuffer, obj?:RangeOptions):RangeOptions {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new RangeOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static startRangeOptions(builder:flatbuffers.Builder) {
  builder.startObject(0);
}

static endRangeOptions(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createRangeOptions(builder:flatbuffers.Builder):flatbuffers.Offset {
  RangeOptions.startRangeOptions(builder);
  return RangeOptions.endRangeOptions(builder);
}
}
