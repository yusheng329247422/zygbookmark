/* tslint:disable */
/* eslint-disable */
export function use_embedded_key(): void;
export function set_password(pass: string): void;
export function clear_key(): void;
/**
 * 验证编辑者口令，成功才允许增删改/导出加密
 */
export function verify_editor(pass: string): boolean;
/**
 * 前端把 localStorage 里取到的 cipher 交进来（只交密文），
 * WASM 内部解密成 NODES，返回 “去 URL 的节点数组（JSON 字符串）”
 */
export function load_cipher_and_get_censored(b64: string): any;
/**
 * 返回“去 URL 的节点数组（JSON 字符串）”，不改动任何东西
 */
export function get_censored_json(): any;
/**
 * 获取并“刷新”全部文件节点的临时 ID 映射：返回 JSON
 * 形如 { "nodeId1": "eph1", "nodeId2": "eph2", ... }
 */
export function get_and_refresh_eph_map(): any;
/**
 * 仅获取当前映射（不刷新）
 */
export function get_current_eph_map(): any;
/**
 * 通过 eph_id 在 WASM 内部打开真实 URL，并在成功后“自动刷新全部 eph”
 * 注意：URL 会出现在新标签的地址栏中（无法避免），但不会泄露到前端变量。
 */
export function open_by_eph(eph_id: string): void;
/**
 * 添加节点（JSON 字符串参数）：{ id?, node_type, title, url?, tag?, parent? }
 */
export function add_node(json: string): void;
/**
 * 编辑节点（按 id 修改 title/url/tag/parent），url 仅 file 支持
 */
export function edit_node(id: string, title: string, url?: string | null, tag?: string | null, parent?: string | null): void;
/**
 * 删除节点（递归删除其子）
 */
export function delete_node(id: string): void;
/**
 * 移动节点（更改 parent）
 */
export function move_node(id: string, new_parent?: string | null): void;
/**
 * 导出当前节点列表为加密 B64（用于写 localStorage）
 */
export function export_encrypted(): string;
/**
 * （可选）如果 localStorage 没有数据，你也可以从前端调用此函数初始化一个示例树
 */
export function init_sample_if_empty(): void;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly use_embedded_key: () => void;
  readonly set_password: (a: number, b: number) => void;
  readonly clear_key: () => void;
  readonly verify_editor: (a: number, b: number) => number;
  readonly load_cipher_and_get_censored: (a: number, b: number) => [number, number, number];
  readonly get_censored_json: () => [number, number, number];
  readonly get_and_refresh_eph_map: () => [number, number, number];
  readonly get_current_eph_map: () => [number, number, number];
  readonly open_by_eph: (a: number, b: number) => [number, number];
  readonly add_node: (a: number, b: number) => [number, number];
  readonly edit_node: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number) => [number, number];
  readonly delete_node: (a: number, b: number) => [number, number];
  readonly move_node: (a: number, b: number, c: number, d: number) => [number, number];
  readonly export_encrypted: () => [number, number, number, number];
  readonly init_sample_if_empty: () => void;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly __externref_table_alloc: () => number;
  readonly __wbindgen_export_2: WebAssembly.Table;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __externref_table_dealloc: (a: number) => void;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
