// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import { DilateOptions } from '../tflite/dilate-options.js';
import { StablehloBroadcastInDimOptions } from '../tflite/stablehlo-broadcast-in-dim-options.js';
import { StablehloCompareOptions } from '../tflite/stablehlo-compare-options.js';
import { StablehloConcatenateOptions } from '../tflite/stablehlo-concatenate-options.js';
import { StablehloConvolutionOptions } from '../tflite/stablehlo-convolution-options.js';
import { StablehloCustomCallOptions } from '../tflite/stablehlo-custom-call-options.js';
import { StablehloDotGeneralOptions } from '../tflite/stablehlo-dot-general-options.js';
import { StablehloDynamicSliceOptions } from '../tflite/stablehlo-dynamic-slice-options.js';
import { StablehloGatherOptions } from '../tflite/stablehlo-gather-options.js';
import { StablehloIotaOptions } from '../tflite/stablehlo-iota-options.js';
import { StablehloPadOptions } from '../tflite/stablehlo-pad-options.js';
import { StablehloReduceOptions } from '../tflite/stablehlo-reduce-options.js';
import { StablehloReduceWindowOptions } from '../tflite/stablehlo-reduce-window-options.js';
import { StablehloScatterOptions } from '../tflite/stablehlo-scatter-options.js';
import { StablehloSliceOptions } from '../tflite/stablehlo-slice-options.js';
import { StablehloSortOptions } from '../tflite/stablehlo-sort-options.js';
import { StablehloTransposeOptions } from '../tflite/stablehlo-transpose-options.js';
import { StablehloWhileOptions } from '../tflite/stablehlo-while-options.js';


export enum BuiltinOptions2 {
  NONE = 0,
  StablehloConcatenateOptions = 1,
  StablehloBroadcastInDimOptions = 2,
  StablehloSliceOptions = 3,
  StablehloConvolutionOptions = 4,
  StablehloCustomCallOptions = 5,
  StablehloReduceOptions = 6,
  StablehloScatterOptions = 7,
  StablehloCompareOptions = 8,
  StablehloDynamicSliceOptions = 9,
  StablehloPadOptions = 10,
  StablehloIotaOptions = 11,
  StablehloDotGeneralOptions = 12,
  StablehloReduceWindowOptions = 13,
  StablehloSortOptions = 14,
  StablehloWhileOptions = 15,
  StablehloGatherOptions = 16,
  StablehloTransposeOptions = 17,
  DilateOptions = 18
}

export function unionToBuiltinOptions2(
  type: BuiltinOptions2,
  accessor: (obj:DilateOptions|StablehloBroadcastInDimOptions|StablehloCompareOptions|StablehloConcatenateOptions|StablehloConvolutionOptions|StablehloCustomCallOptions|StablehloDotGeneralOptions|StablehloDynamicSliceOptions|StablehloGatherOptions|StablehloIotaOptions|StablehloPadOptions|StablehloReduceOptions|StablehloReduceWindowOptions|StablehloScatterOptions|StablehloSliceOptions|StablehloSortOptions|StablehloTransposeOptions|StablehloWhileOptions) => DilateOptions|StablehloBroadcastInDimOptions|StablehloCompareOptions|StablehloConcatenateOptions|StablehloConvolutionOptions|StablehloCustomCallOptions|StablehloDotGeneralOptions|StablehloDynamicSliceOptions|StablehloGatherOptions|StablehloIotaOptions|StablehloPadOptions|StablehloReduceOptions|StablehloReduceWindowOptions|StablehloScatterOptions|StablehloSliceOptions|StablehloSortOptions|StablehloTransposeOptions|StablehloWhileOptions|null
): DilateOptions|StablehloBroadcastInDimOptions|StablehloCompareOptions|StablehloConcatenateOptions|StablehloConvolutionOptions|StablehloCustomCallOptions|StablehloDotGeneralOptions|StablehloDynamicSliceOptions|StablehloGatherOptions|StablehloIotaOptions|StablehloPadOptions|StablehloReduceOptions|StablehloReduceWindowOptions|StablehloScatterOptions|StablehloSliceOptions|StablehloSortOptions|StablehloTransposeOptions|StablehloWhileOptions|null {
  switch(BuiltinOptions2[type]) {
    case 'NONE': return null; 
    case 'StablehloConcatenateOptions': return accessor(new StablehloConcatenateOptions())! as StablehloConcatenateOptions;
    case 'StablehloBroadcastInDimOptions': return accessor(new StablehloBroadcastInDimOptions())! as StablehloBroadcastInDimOptions;
    case 'StablehloSliceOptions': return accessor(new StablehloSliceOptions())! as StablehloSliceOptions;
    case 'StablehloConvolutionOptions': return accessor(new StablehloConvolutionOptions())! as StablehloConvolutionOptions;
    case 'StablehloCustomCallOptions': return accessor(new StablehloCustomCallOptions())! as StablehloCustomCallOptions;
    case 'StablehloReduceOptions': return accessor(new StablehloReduceOptions())! as StablehloReduceOptions;
    case 'StablehloScatterOptions': return accessor(new StablehloScatterOptions())! as StablehloScatterOptions;
    case 'StablehloCompareOptions': return accessor(new StablehloCompareOptions())! as StablehloCompareOptions;
    case 'StablehloDynamicSliceOptions': return accessor(new StablehloDynamicSliceOptions())! as StablehloDynamicSliceOptions;
    case 'StablehloPadOptions': return accessor(new StablehloPadOptions())! as StablehloPadOptions;
    case 'StablehloIotaOptions': return accessor(new StablehloIotaOptions())! as StablehloIotaOptions;
    case 'StablehloDotGeneralOptions': return accessor(new StablehloDotGeneralOptions())! as StablehloDotGeneralOptions;
    case 'StablehloReduceWindowOptions': return accessor(new StablehloReduceWindowOptions())! as StablehloReduceWindowOptions;
    case 'StablehloSortOptions': return accessor(new StablehloSortOptions())! as StablehloSortOptions;
    case 'StablehloWhileOptions': return accessor(new StablehloWhileOptions())! as StablehloWhileOptions;
    case 'StablehloGatherOptions': return accessor(new StablehloGatherOptions())! as StablehloGatherOptions;
    case 'StablehloTransposeOptions': return accessor(new StablehloTransposeOptions())! as StablehloTransposeOptions;
    case 'DilateOptions': return accessor(new DilateOptions())! as DilateOptions;
    default: return null;
  }
}

export function unionListToBuiltinOptions2(
  type: BuiltinOptions2, 
  accessor: (index: number, obj:DilateOptions|StablehloBroadcastInDimOptions|StablehloCompareOptions|StablehloConcatenateOptions|StablehloConvolutionOptions|StablehloCustomCallOptions|StablehloDotGeneralOptions|StablehloDynamicSliceOptions|StablehloGatherOptions|StablehloIotaOptions|StablehloPadOptions|StablehloReduceOptions|StablehloReduceWindowOptions|StablehloScatterOptions|StablehloSliceOptions|StablehloSortOptions|StablehloTransposeOptions|StablehloWhileOptions) => DilateOptions|StablehloBroadcastInDimOptions|StablehloCompareOptions|StablehloConcatenateOptions|StablehloConvolutionOptions|StablehloCustomCallOptions|StablehloDotGeneralOptions|StablehloDynamicSliceOptions|StablehloGatherOptions|StablehloIotaOptions|StablehloPadOptions|StablehloReduceOptions|StablehloReduceWindowOptions|StablehloScatterOptions|StablehloSliceOptions|StablehloSortOptions|StablehloTransposeOptions|StablehloWhileOptions|null, 
  index: number
): DilateOptions|StablehloBroadcastInDimOptions|StablehloCompareOptions|StablehloConcatenateOptions|StablehloConvolutionOptions|StablehloCustomCallOptions|StablehloDotGeneralOptions|StablehloDynamicSliceOptions|StablehloGatherOptions|StablehloIotaOptions|StablehloPadOptions|StablehloReduceOptions|StablehloReduceWindowOptions|StablehloScatterOptions|StablehloSliceOptions|StablehloSortOptions|StablehloTransposeOptions|StablehloWhileOptions|null {
  switch(BuiltinOptions2[type]) {
    case 'NONE': return null; 
    case 'StablehloConcatenateOptions': return accessor(index, new StablehloConcatenateOptions())! as StablehloConcatenateOptions;
    case 'StablehloBroadcastInDimOptions': return accessor(index, new StablehloBroadcastInDimOptions())! as StablehloBroadcastInDimOptions;
    case 'StablehloSliceOptions': return accessor(index, new StablehloSliceOptions())! as StablehloSliceOptions;
    case 'StablehloConvolutionOptions': return accessor(index, new StablehloConvolutionOptions())! as StablehloConvolutionOptions;
    case 'StablehloCustomCallOptions': return accessor(index, new StablehloCustomCallOptions())! as StablehloCustomCallOptions;
    case 'StablehloReduceOptions': return accessor(index, new StablehloReduceOptions())! as StablehloReduceOptions;
    case 'StablehloScatterOptions': return accessor(index, new StablehloScatterOptions())! as StablehloScatterOptions;
    case 'StablehloCompareOptions': return accessor(index, new StablehloCompareOptions())! as StablehloCompareOptions;
    case 'StablehloDynamicSliceOptions': return accessor(index, new StablehloDynamicSliceOptions())! as StablehloDynamicSliceOptions;
    case 'StablehloPadOptions': return accessor(index, new StablehloPadOptions())! as StablehloPadOptions;
    case 'StablehloIotaOptions': return accessor(index, new StablehloIotaOptions())! as StablehloIotaOptions;
    case 'StablehloDotGeneralOptions': return accessor(index, new StablehloDotGeneralOptions())! as StablehloDotGeneralOptions;
    case 'StablehloReduceWindowOptions': return accessor(index, new StablehloReduceWindowOptions())! as StablehloReduceWindowOptions;
    case 'StablehloSortOptions': return accessor(index, new StablehloSortOptions())! as StablehloSortOptions;
    case 'StablehloWhileOptions': return accessor(index, new StablehloWhileOptions())! as StablehloWhileOptions;
    case 'StablehloGatherOptions': return accessor(index, new StablehloGatherOptions())! as StablehloGatherOptions;
    case 'StablehloTransposeOptions': return accessor(index, new StablehloTransposeOptions())! as StablehloTransposeOptions;
    case 'DilateOptions': return accessor(index, new DilateOptions())! as DilateOptions;
    default: return null;
  }
}
