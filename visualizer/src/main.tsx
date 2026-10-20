import React, { lazy, Suspense, useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  runtime,
  preset,
  type Api,
  type Config,
  type Metadata,
} from "./runtime";
import { Canvas2D } from "./Canvas2D";
import "./style.css";
const Voxels3D = lazy(() => import("./Voxels3D"));
function Counts({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number[];
  onChange: (v: number[]) => void;
}) {
  const [text, setText] = useState(value.join(","));
  const input = useRef<HTMLInputElement>(null);
  useEffect(() => {
    setText(value.join(","));
    input.current?.setCustomValidity("");
  }, [value]);
  return (
    <label>
      {label}
      <input
        ref={input}
        aria-label={label}
        value={text}
        onChange={(e) => {
          const next = e.target.value;
          setText(next);
          const valid = next === "" || /^\d+(,\d+)*$/.test(next);
          e.currentTarget.setCustomValidity(
            valid ? "" : "Use comma-separated whole numbers.",
          );
          if (valid) onChange(next === "" ? [] : next.split(",").map(Number));
        }}
      />
    </label>
  );
}
function App() {
  const [api, setApi] = useState<Api>(),
    [draft, setDraft] = useState<Config>(preset("conway2d")),
    [active, setActive] = useState<Config>(draft);
  const [state, setState] = useState(new Uint8Array()),
    [meta, setMeta] = useState<Metadata>(),
    [error, setError] = useState(""),
    [playing, setPlaying] = useState(false),
    [speed, setSpeed] = useState(8),
    [busy, setBusy] = useState(true),
    [custom, setCustom] = useState("[[-1,0],[1,0],[0,-1],[0,1]]");
  function refresh(a: Api, bytes: Uint8Array) {
    setState(new Uint8Array(bytes));
    setMeta(JSON.parse(a.Metadata()));
  }
  useEffect(() => {
    let cancelled = false;
    runtime()
      .then((a) => {
        if (cancelled) return;
        a.Configure(JSON.stringify(preset("conway2d")));
        setApi(a);
        refresh(a, a.State());
        setBusy(false);
      })
      .catch((e) => {
        setError(String(e));
        setBusy(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);
  function step() {
    if (!api) return;
    try {
      refresh(api, api.Step());
    } catch (e) {
      setError(String(e));
      setPlaying(false);
    }
  }
  useEffect(() => {
    if (!playing) return;
    const timer = setTimeout(step, 1000 / speed);
    return () => clearTimeout(timer);
  }, [playing, state, speed]);
  function apply() {
    if (!api) return;
    setPlaying(false);
    try {
      const config = {
        ...draft,
        offsets:
          draft.kind === "totalistic" && draft.neighborhood === "custom"
            ? JSON.parse(custom)
            : undefined,
      };
      api.Configure(JSON.stringify(config));
      setActive(config);
      refresh(api, api.State());
      setError("");
    } catch (e) {
      setError(String(e));
    }
  }
  function change<K extends keyof Config>(key: K, value: Config[K]) {
    setDraft((v) => ({ ...v, [key]: value }));
  }
  return (
    <>
      <header>
        <a className="brand" href="./">
          <span className="brand-icon">▦</span> CELLULAR <b>OBSERVATORY</b>
        </a>
        <span className="runtime-status">
          <i /> {api ? ".NET WASM · LOCAL RUNTIME" : "LOADING RUNTIME"}
        </span>
      </header>
      <main>
        <section className="intro">
          <div>
            <span className="eyebrow">A SMALL WORLD. SIMPLE RULES.</span>
            <h1>Watch complexity emerge.</h1>
            <p>Build a universe, set its rules, and see what happens next.</p>
          </div>
          <span className="edition">
            EXPERIMENT № 001
            <br />
            CELLULAR AUTOMATA / 2D + 3D
          </span>
        </section>
        <div className="workspace">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              apply();
            }}
          >
            <div className="panel-title">
              <h2>Setup</h2>
              <span>01 / CONFIGURE</span>
            </div>
            <label>
              Start from a preset
              <select
                aria-label="Preset"
                onChange={(e) => {
                  const next = preset(e.target.value);
                  setDraft(next);
                  setCustom(
                    next.size.length === 3
                      ? "[[-1,0,0],[1,0,0],[0,-1,0],[0,1,0],[0,0,-1],[0,0,1]]"
                      : "[[-1,0],[1,0],[0,-1],[0,1]]",
                  );
                }}
              >
                <option value="conway2d">Conway · 2D</option>
                <option value="wolfram2d">Wolfram Rule 30 · 2D</option>
                <option value="conway3d">Conway · 3D (24 neighbors)</option>
                <option value="wolfram3d">Wolfram Rule 30 · 3D</option>
              </select>
            </label>
            <div className="section-label">UNIVERSE</div>
            <label>
              Dimensions
              <select
                aria-label="Dimensions"
                value={draft.size.length}
                onChange={(e) => {
                  const d = Number(e.target.value);
                  setDraft((v) => ({
                    ...v,
                    size: d === 3 ? [32, 32, 32] : [128, 128],
                    neighborhood: "moore",
                  }));
                  setCustom(
                    d === 3
                      ? "[[-1,0,0],[1,0,0],[0,-1,0],[0,1,0],[0,0,-1],[0,0,1]]"
                      : "[[-1,0],[1,0],[0,-1],[0,1]]",
                  );
                }}
              >
                <option value="2">2D · plane</option>
                <option value="3">3D · volume</option>
              </select>
            </label>
            <div className="sizes">
              {draft.size.map((n, i) => (
                <label key={i}>
                  {["Width", "Height", "Depth"][i]}
                  <input
                    aria-label={["Width", "Height", "Depth"][i]}
                    type="number"
                    min="3"
                    max="256"
                    value={n}
                    onChange={(e) =>
                      change(
                        "size",
                        draft.size.map((v, j) =>
                          j === i ? Number(e.target.value) : v,
                        ),
                      )
                    }
                  />
                </label>
              ))}
            </div>
            <label className="check">
              <input
                type="checkbox"
                checked={draft.wrap}
                onChange={(e) => change("wrap", e.target.checked)}
              />{" "}
              Wrap universe edges
            </label>
            <div className="section-label">RULE ENGINE</div>
            <label>
              Rule family
              <select
                value={draft.kind}
                onChange={(e) =>
                  change("kind", e.target.value as Config["kind"])
                }
              >
                <option value="totalistic">Life-like · birth / survival</option>
                <option value="wolfram">Wolfram · 0–255</option>
              </select>
            </label>
            {draft.kind === "wolfram" ? (
              <label>
                Wolfram rule
                <input
                  aria-label="Wolfram rule"
                  type="number"
                  min="0"
                  max="255"
                  value={draft.rule}
                  onChange={(e) => change("rule", Number(e.target.value))}
                />
              </label>
            ) : (
              <>
                <label>
                  Neighborhood
                  <select
                    value={draft.neighborhood}
                    onChange={(e) => change("neighborhood", e.target.value)}
                  >
                    <option value="moore">
                      Moore · {draft.size.length === 3 ? 26 : 8} neighbors
                    </option>
                    <option value="vonNeumann">
                      von Neumann · {draft.size.length === 3 ? 6 : 4} neighbors
                    </option>
                    {draft.size.length === 3 && (
                      <option value="extruded">
                        Extruded Moore · 24 neighbors
                      </option>
                    )}
                    <option value="custom">Custom offsets</option>
                  </select>
                </label>
                {draft.neighborhood === "custom" && (
                  <label>
                    Neighbor offsets (JSON)
                    <textarea
                      aria-label="Neighbor offsets"
                      rows={4}
                      value={custom}
                      onChange={(e) => setCustom(e.target.value)}
                    />
                    <span className="field-note">
                      Adjacent coordinates −1 to 1. No center or duplicates.
                    </span>
                  </label>
                )}
                <div className="sizes">
                  <Counts
                    label="Birth counts"
                    value={draft.birth}
                    onChange={(v) => change("birth", v)}
                  />
                  <Counts
                    label="Survival counts"
                    value={draft.survival}
                    onChange={(v) => change("survival", v)}
                  />
                </div>
                <p className="field-note">
                  Comma-separated live-neighbor counts.
                </p>
              </>
            )}
            <div className="section-label">INITIAL STATE</div>
            <label>
              Pattern
              <select
                value={draft.initial}
                onChange={(e) => change("initial", e.target.value)}
              >
                <option value="random">Seeded random</option>
                <option value="single">Single cell</option>
              </select>
            </label>
            <div className="sizes">
              <label>
                Seed
                <input
                  type="number"
                  min="0"
                  max="4294967295"
                  value={draft.seed}
                  onChange={(e) => change("seed", Number(e.target.value))}
                />
              </label>
              <label>
                Density
                <input
                  type="number"
                  min="0"
                  max="1"
                  step="any"
                  value={draft.density}
                  onChange={(e) => change("density", Number(e.target.value))}
                />
              </label>
            </div>
            <button className="apply" type="submit" disabled={!api}>
              Apply & restart <span>↗</span>
            </button>
            <p className="field-note">
              Setup changes take effect when applied.
            </p>
          </form>
          <section className="viewer">
            <div className="viewer-top">
              <span>
                <i /> LIVE UNIVERSE
              </span>
              <span>
                {active.size.join(" × ")} / {active.size.length}D
              </span>
            </div>
            {error && (
              <div role="alert" className="error">
                {error}
              </div>
            )}
            {busy ? (
              <div className="loading">Preparing your universe…</div>
            ) : (
              <Suspense
                fallback={<div className="loading">Preparing 3D view…</div>}
              >
                {active.size.length === 3 ? (
                  <Voxels3D state={state} size={active.size} />
                ) : (
                  <Canvas2D state={state} size={active.size} />
                )}
              </Suspense>
            )}
            <div className="transport">
              <button
                className="play"
                disabled={!api}
                onClick={() => setPlaying(!playing)}
              >
                {playing ? "Ⅱ Pause" : "▶ Play"}
              </button>
              <button disabled={!api || playing} onClick={step}>
                Step →
              </button>
              <button
                disabled={!api}
                onClick={() => {
                  setPlaying(false);
                  refresh(api!, api!.Reset());
                }}
              >
                ↺ Reset
              </button>
              <label className="speed">
                Speed{" "}
                <input
                  aria-label="Speed"
                  type="range"
                  min="1"
                  max="30"
                  value={speed}
                  onChange={(e) => setSpeed(Number(e.target.value))}
                />
                <span>{speed} /s</span>
              </label>
            </div>
            <div className="metrics">
              <div>
                <span>GENERATION</span>
                <strong data-testid="generation">
                  {meta?.generation ?? 0}
                </strong>
              </div>
              <div>
                <span>LIVING CELLS</span>
                <strong>{meta?.population.toLocaleString() ?? "—"}</strong>
              </div>
              <div>
                <span>POPULATION</span>
                <strong>
                  {meta
                    ? ((meta.population / meta.cells) * 100).toFixed(1)
                    : "0"}
                  <small>%</small>
                </strong>
              </div>
              <div>
                <span>BOUNDARY</span>
                <strong className="text-metric">
                  {active.wrap ? "Wrapped" : "Fixed"}
                </strong>
              </div>
            </div>
            <div className="view-hint">
              SCROLL TO ZOOM <span>·</span>{" "}
              {active.size.length === 3
                ? "DRAG TO ORBIT · RIGHT-DRAG TO PAN"
                : "DRAG TO PAN"}{" "}
              <span>·</span> ALL COMPUTATION STAYS IN YOUR BROWSER
            </div>
          </section>
        </div>
        <footer>
          <span>Simple rules. Unexpected worlds.</span>
          <span>REACT + .NET WEBASSEMBLY</span>
        </footer>
      </main>
    </>
  );
}
createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
