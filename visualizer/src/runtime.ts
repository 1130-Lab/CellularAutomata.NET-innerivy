export interface Config {
  size: number[];
  kind: "totalistic" | "wolfram";
  neighborhood: string;
  offsets?: number[][];
  birth: number[];
  survival: number[];
  rule: number;
  wrap: boolean;
  seed: number;
  density: number;
  initial: string;
}
export interface Metadata {
  generation: number;
  population: number;
  cells: number;
  vectorWidth: number;
  neighbors: number;
}
export interface Api {
  Configure(json: string): string;
  Step(): Uint8Array;
  State(): Uint8Array;
  Reset(): Uint8Array;
  Metadata(): string;
}
let loading: Promise<Api>;
export function runtime(): Promise<Api> {
  return (loading ??= (async () => {
    const path = new URL("./wasm/_framework/dotnet.js", document.baseURI).href;
    const { dotnet } = await import(/* @vite-ignore */ path);
    const host = await dotnet.create();
    const exports = await host.getAssemblyExports(
      host.getConfig().mainAssemblyName,
    );
    return exports.Exports as Api;
  })());
}
export function preset(id: string): Config {
  const is3d = id.endsWith("3d"),
    wolfram = id.startsWith("wolfram");
  return {
    size: is3d ? [32, 32, 32] : [128, 128],
    kind: wolfram ? "wolfram" : "totalistic",
    neighborhood: is3d ? "extruded" : "moore",
    birth: [3],
    survival: [2, 3],
    rule: 30,
    wrap: !wolfram,
    seed: 42,
    density: is3d ? 0.12 : 0.25,
    initial: wolfram ? "single" : "random",
  };
}
