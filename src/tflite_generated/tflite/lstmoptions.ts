// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { ActivationFunctionType } from '../tflite/activation-function-type.js';
import { LSTMKernelType } from '../tflite/lstmkernel-type.js';


export class LSTMOptions {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):LSTMOptions {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsLSTMOptions(bb:flatbuffers.ByteBuffer, obj?:LSTMOptions):LSTMOptions {
  return (obj || new LSTMOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsLSTMOptions(bb:flatbuffers.ByteBuffer, obj?:LSTMOptions):LSTMOptions {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new LSTMOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

fusedActivationFunction():ActivationFunctionType {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : ActivationFunctionType.NONE;
}

cellClip():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
}

projClip():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
}

kernelType():LSTMKernelType {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : LSTMKernelType.FULL;
}

asymmetricQuantizeInputs():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

static startLSTMOptions(builder:flatbuffers.Builder) {
  builder.startObject(5);
}

static addFusedActivationFunction(builder:flatbuffers.Builder, fusedActivationFunction:ActivationFunctionType) {
  builder.addFieldInt8(0, fusedActivationFunction, ActivationFunctionType.NONE);
}

static addCellClip(builder:flatbuffers.Builder, cellClip:number) {
  builder.addFieldFloat32(1, cellClip, 0.0);
}

static addProjClip(builder:flatbuffers.Builder, projClip:number) {
  builder.addFieldFloat32(2, projClip, 0.0);
}

static addKernelType(builder:flatbuffers.Builder, kernelType:LSTMKernelType) {
  builder.addFieldInt8(3, kernelType, LSTMKernelType.FULL);
}

static addAsymmetricQuantizeInputs(builder:flatbuffers.Builder, asymmetricQuantizeInputs:boolean) {
  builder.addFieldInt8(4, +asymmetricQuantizeInputs, +false);
}

static endLSTMOptions(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createLSTMOptions(builder:flatbuffers.Builder, fusedActivationFunction:ActivationFunctionType, cellClip:number, projClip:number, kernelType:LSTMKernelType, asymmetricQuantizeInputs:boolean):flatbuffers.Offset {
  LSTMOptions.startLSTMOptions(builder);
  LSTMOptions.addFusedActivationFunction(builder, fusedActivationFunction);
  LSTMOptions.addCellClip(builder, cellClip);
  LSTMOptions.addProjClip(builder, projClip);
  LSTMOptions.addKernelType(builder, kernelType);
  LSTMOptions.addAsymmetricQuantizeInputs(builder, asymmetricQuantizeInputs);
  return LSTMOptions.endLSTMOptions(builder);
}
}
