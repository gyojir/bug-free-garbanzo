// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

export class PadOptions {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):PadOptions {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsPadOptions(bb:flatbuffers.ByteBuffer, obj?:PadOptions):PadOptions {
  return (obj || new PadOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsPadOptions(bb:flatbuffers.ByteBuffer, obj?:PadOptions):PadOptions {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new PadOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static startPadOptions(builder:flatbuffers.Builder) {
  builder.startObject(0);
}

static endPadOptions(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createPadOptions(builder:flatbuffers.Builder):flatbuffers.Offset {
  PadOptions.startPadOptions(builder);
  return PadOptions.endPadOptions(builder);
}
}
