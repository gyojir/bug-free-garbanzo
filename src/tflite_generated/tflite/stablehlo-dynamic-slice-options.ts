// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

export class StablehloDynamicSliceOptions {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):StablehloDynamicSliceOptions {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsStablehloDynamicSliceOptions(bb:flatbuffers.ByteBuffer, obj?:StablehloDynamicSliceOptions):StablehloDynamicSliceOptions {
  return (obj || new StablehloDynamicSliceOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsStablehloDynamicSliceOptions(bb:flatbuffers.ByteBuffer, obj?:StablehloDynamicSliceOptions):StablehloDynamicSliceOptions {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new StablehloDynamicSliceOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

sliceSizes(index: number):bigint|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt64(this.bb!.__vector(this.bb_pos + offset) + index * 8) : BigInt(0);
}

sliceSizesLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

static startStablehloDynamicSliceOptions(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addSliceSizes(builder:flatbuffers.Builder, sliceSizesOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, sliceSizesOffset, 0);
}

static createSliceSizesVector(builder:flatbuffers.Builder, data:bigint[]):flatbuffers.Offset {
  builder.startVector(8, data.length, 8);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addInt64(data[i]!);
  }
  return builder.endVector();
}

static startSliceSizesVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(8, numElems, 8);
}

static endStablehloDynamicSliceOptions(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createStablehloDynamicSliceOptions(builder:flatbuffers.Builder, sliceSizesOffset:flatbuffers.Offset):flatbuffers.Offset {
  StablehloDynamicSliceOptions.startStablehloDynamicSliceOptions(builder);
  StablehloDynamicSliceOptions.addSliceSizes(builder, sliceSizesOffset);
  return StablehloDynamicSliceOptions.endStablehloDynamicSliceOptions(builder);
}
}