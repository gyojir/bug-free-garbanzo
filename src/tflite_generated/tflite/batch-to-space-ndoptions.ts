// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

export class BatchToSpaceNDOptions {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):BatchToSpaceNDOptions {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsBatchToSpaceNDOptions(bb:flatbuffers.ByteBuffer, obj?:BatchToSpaceNDOptions):BatchToSpaceNDOptions {
  return (obj || new BatchToSpaceNDOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsBatchToSpaceNDOptions(bb:flatbuffers.ByteBuffer, obj?:BatchToSpaceNDOptions):BatchToSpaceNDOptions {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new BatchToSpaceNDOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static startBatchToSpaceNDOptions(builder:flatbuffers.Builder) {
  builder.startObject(0);
}

static endBatchToSpaceNDOptions(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createBatchToSpaceNDOptions(builder:flatbuffers.Builder):flatbuffers.Offset {
  BatchToSpaceNDOptions.startBatchToSpaceNDOptions(builder);
  return BatchToSpaceNDOptions.endBatchToSpaceNDOptions(builder);
}
}
