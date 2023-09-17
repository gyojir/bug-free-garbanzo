// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

export class UnpackOptions {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):UnpackOptions {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsUnpackOptions(bb:flatbuffers.ByteBuffer, obj?:UnpackOptions):UnpackOptions {
  return (obj || new UnpackOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsUnpackOptions(bb:flatbuffers.ByteBuffer, obj?:UnpackOptions):UnpackOptions {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new UnpackOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

num():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

axis():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

static startUnpackOptions(builder:flatbuffers.Builder) {
  builder.startObject(2);
}

static addNum(builder:flatbuffers.Builder, num:number) {
  builder.addFieldInt32(0, num, 0);
}

static addAxis(builder:flatbuffers.Builder, axis:number) {
  builder.addFieldInt32(1, axis, 0);
}

static endUnpackOptions(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createUnpackOptions(builder:flatbuffers.Builder, num:number, axis:number):flatbuffers.Offset {
  UnpackOptions.startUnpackOptions(builder);
  UnpackOptions.addNum(builder, num);
  UnpackOptions.addAxis(builder, axis);
  return UnpackOptions.endUnpackOptions(builder);
}
}
