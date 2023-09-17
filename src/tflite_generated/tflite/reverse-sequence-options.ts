// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

export class ReverseSequenceOptions {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):ReverseSequenceOptions {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsReverseSequenceOptions(bb:flatbuffers.ByteBuffer, obj?:ReverseSequenceOptions):ReverseSequenceOptions {
  return (obj || new ReverseSequenceOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsReverseSequenceOptions(bb:flatbuffers.ByteBuffer, obj?:ReverseSequenceOptions):ReverseSequenceOptions {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new ReverseSequenceOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

seqDim():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

batchDim():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

static startReverseSequenceOptions(builder:flatbuffers.Builder) {
  builder.startObject(2);
}

static addSeqDim(builder:flatbuffers.Builder, seqDim:number) {
  builder.addFieldInt32(0, seqDim, 0);
}

static addBatchDim(builder:flatbuffers.Builder, batchDim:number) {
  builder.addFieldInt32(1, batchDim, 0);
}

static endReverseSequenceOptions(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createReverseSequenceOptions(builder:flatbuffers.Builder, seqDim:number, batchDim:number):flatbuffers.Offset {
  ReverseSequenceOptions.startReverseSequenceOptions(builder);
  ReverseSequenceOptions.addSeqDim(builder, seqDim);
  ReverseSequenceOptions.addBatchDim(builder, batchDim);
  return ReverseSequenceOptions.endReverseSequenceOptions(builder);
}
}
