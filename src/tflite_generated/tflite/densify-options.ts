// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

export class DensifyOptions {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):DensifyOptions {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsDensifyOptions(bb:flatbuffers.ByteBuffer, obj?:DensifyOptions):DensifyOptions {
  return (obj || new DensifyOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsDensifyOptions(bb:flatbuffers.ByteBuffer, obj?:DensifyOptions):DensifyOptions {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new DensifyOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static startDensifyOptions(builder:flatbuffers.Builder) {
  builder.startObject(0);
}

static endDensifyOptions(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createDensifyOptions(builder:flatbuffers.Builder):flatbuffers.Offset {
  DensifyOptions.startDensifyOptions(builder);
  return DensifyOptions.endDensifyOptions(builder);
}
}
