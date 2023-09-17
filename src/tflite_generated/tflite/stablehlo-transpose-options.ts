// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

export class StablehloTransposeOptions {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):StablehloTransposeOptions {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsStablehloTransposeOptions(bb:flatbuffers.ByteBuffer, obj?:StablehloTransposeOptions):StablehloTransposeOptions {
  return (obj || new StablehloTransposeOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsStablehloTransposeOptions(bb:flatbuffers.ByteBuffer, obj?:StablehloTransposeOptions):StablehloTransposeOptions {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new StablehloTransposeOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

permutation(index: number):bigint|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt64(this.bb!.__vector(this.bb_pos + offset) + index * 8) : BigInt(0);
}

permutationLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

static startStablehloTransposeOptions(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addPermutation(builder:flatbuffers.Builder, permutationOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, permutationOffset, 0);
}

static createPermutationVector(builder:flatbuffers.Builder, data:bigint[]):flatbuffers.Offset {
  builder.startVector(8, data.length, 8);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addInt64(data[i]!);
  }
  return builder.endVector();
}

static startPermutationVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(8, numElems, 8);
}

static endStablehloTransposeOptions(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createStablehloTransposeOptions(builder:flatbuffers.Builder, permutationOffset:flatbuffers.Offset):flatbuffers.Offset {
  StablehloTransposeOptions.startStablehloTransposeOptions(builder);
  StablehloTransposeOptions.addPermutation(builder, permutationOffset);
  return StablehloTransposeOptions.endStablehloTransposeOptions(builder);
}
}
