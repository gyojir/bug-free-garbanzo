// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

export class StablehloReduceWindowOptions {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):StablehloReduceWindowOptions {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsStablehloReduceWindowOptions(bb:flatbuffers.ByteBuffer, obj?:StablehloReduceWindowOptions):StablehloReduceWindowOptions {
  return (obj || new StablehloReduceWindowOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsStablehloReduceWindowOptions(bb:flatbuffers.ByteBuffer, obj?:StablehloReduceWindowOptions):StablehloReduceWindowOptions {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new StablehloReduceWindowOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

windowDimensions(index: number):bigint|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt64(this.bb!.__vector(this.bb_pos + offset) + index * 8) : BigInt(0);
}

windowDimensionsLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

windowStrides(index: number):bigint|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readInt64(this.bb!.__vector(this.bb_pos + offset) + index * 8) : BigInt(0);
}

windowStridesLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

baseDilations(index: number):bigint|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readInt64(this.bb!.__vector(this.bb_pos + offset) + index * 8) : BigInt(0);
}

baseDilationsLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

windowDilations(index: number):bigint|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.readInt64(this.bb!.__vector(this.bb_pos + offset) + index * 8) : BigInt(0);
}

windowDilationsLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

padding(index: number):bigint|null {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.readInt64(this.bb!.__vector(this.bb_pos + offset) + index * 8) : BigInt(0);
}

paddingLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

bodySubgraphIndex():number {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

static startStablehloReduceWindowOptions(builder:flatbuffers.Builder) {
  builder.startObject(6);
}

static addWindowDimensions(builder:flatbuffers.Builder, windowDimensionsOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, windowDimensionsOffset, 0);
}

static createWindowDimensionsVector(builder:flatbuffers.Builder, data:bigint[]):flatbuffers.Offset {
  builder.startVector(8, data.length, 8);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addInt64(data[i]!);
  }
  return builder.endVector();
}

static startWindowDimensionsVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(8, numElems, 8);
}

static addWindowStrides(builder:flatbuffers.Builder, windowStridesOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, windowStridesOffset, 0);
}

static createWindowStridesVector(builder:flatbuffers.Builder, data:bigint[]):flatbuffers.Offset {
  builder.startVector(8, data.length, 8);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addInt64(data[i]!);
  }
  return builder.endVector();
}

static startWindowStridesVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(8, numElems, 8);
}

static addBaseDilations(builder:flatbuffers.Builder, baseDilationsOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, baseDilationsOffset, 0);
}

static createBaseDilationsVector(builder:flatbuffers.Builder, data:bigint[]):flatbuffers.Offset {
  builder.startVector(8, data.length, 8);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addInt64(data[i]!);
  }
  return builder.endVector();
}

static startBaseDilationsVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(8, numElems, 8);
}

static addWindowDilations(builder:flatbuffers.Builder, windowDilationsOffset:flatbuffers.Offset) {
  builder.addFieldOffset(3, windowDilationsOffset, 0);
}

static createWindowDilationsVector(builder:flatbuffers.Builder, data:bigint[]):flatbuffers.Offset {
  builder.startVector(8, data.length, 8);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addInt64(data[i]!);
  }
  return builder.endVector();
}

static startWindowDilationsVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(8, numElems, 8);
}

static addPadding(builder:flatbuffers.Builder, paddingOffset:flatbuffers.Offset) {
  builder.addFieldOffset(4, paddingOffset, 0);
}

static createPaddingVector(builder:flatbuffers.Builder, data:bigint[]):flatbuffers.Offset {
  builder.startVector(8, data.length, 8);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addInt64(data[i]!);
  }
  return builder.endVector();
}

static startPaddingVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(8, numElems, 8);
}

static addBodySubgraphIndex(builder:flatbuffers.Builder, bodySubgraphIndex:number) {
  builder.addFieldInt32(5, bodySubgraphIndex, 0);
}

static endStablehloReduceWindowOptions(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createStablehloReduceWindowOptions(builder:flatbuffers.Builder, windowDimensionsOffset:flatbuffers.Offset, windowStridesOffset:flatbuffers.Offset, baseDilationsOffset:flatbuffers.Offset, windowDilationsOffset:flatbuffers.Offset, paddingOffset:flatbuffers.Offset, bodySubgraphIndex:number):flatbuffers.Offset {
  StablehloReduceWindowOptions.startStablehloReduceWindowOptions(builder);
  StablehloReduceWindowOptions.addWindowDimensions(builder, windowDimensionsOffset);
  StablehloReduceWindowOptions.addWindowStrides(builder, windowStridesOffset);
  StablehloReduceWindowOptions.addBaseDilations(builder, baseDilationsOffset);
  StablehloReduceWindowOptions.addWindowDilations(builder, windowDilationsOffset);
  StablehloReduceWindowOptions.addPadding(builder, paddingOffset);
  StablehloReduceWindowOptions.addBodySubgraphIndex(builder, bodySubgraphIndex);
  return StablehloReduceWindowOptions.endStablehloReduceWindowOptions(builder);
}
}
