// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

export class NonMaxSuppressionV4Options {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):NonMaxSuppressionV4Options {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsNonMaxSuppressionV4Options(bb:flatbuffers.ByteBuffer, obj?:NonMaxSuppressionV4Options):NonMaxSuppressionV4Options {
  return (obj || new NonMaxSuppressionV4Options()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsNonMaxSuppressionV4Options(bb:flatbuffers.ByteBuffer, obj?:NonMaxSuppressionV4Options):NonMaxSuppressionV4Options {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new NonMaxSuppressionV4Options()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static startNonMaxSuppressionV4Options(builder:flatbuffers.Builder) {
  builder.startObject(0);
}

static endNonMaxSuppressionV4Options(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createNonMaxSuppressionV4Options(builder:flatbuffers.Builder):flatbuffers.Offset {
  NonMaxSuppressionV4Options.startNonMaxSuppressionV4Options(builder);
  return NonMaxSuppressionV4Options.endNonMaxSuppressionV4Options(builder);
}
}
