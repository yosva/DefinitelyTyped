import type { Intrinsics } from "../GetIntrinsic";

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
type TypedProto<P> = { readonly prototype?: P | undefined } & Omit<Function, "prototype">;

declare function GetPrototypeFromConstructor<P, K extends keyof Intrinsics>(
    constructor: TypedProto<P>,
    intrinsicDefaultProto: K,
): P extends object ? P : Intrinsics[K];
declare function GetPrototypeFromConstructor<P>(
    constructor: TypedProto<P>,
    intrinsicDefaultProto: string,
): P extends object ? P : object;
export = GetPrototypeFromConstructor;
