/* tslint:disable */
/* eslint-disable */
export const memory: WebAssembly.Memory;
export const use_embedded_key: () => void;
export const set_password: (a: number, b: number) => void;
export const clear_key: () => void;
export const verify_editor: (a: number, b: number) => number;
export const load_cipher_and_get_censored: (a: number, b: number) => [number, number, number];
export const get_censored_json: () => [number, number, number];
export const get_and_refresh_eph_map: () => [number, number, number];
export const get_current_eph_map: () => [number, number, number];
export const open_by_eph: (a: number, b: number) => [number, number];
export const add_node: (a: number, b: number) => [number, number];
export const edit_node: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number) => [number, number];
export const delete_node: (a: number, b: number) => [number, number];
export const move_node: (a: number, b: number, c: number, d: number) => [number, number];
export const export_encrypted: () => [number, number, number, number];
export const init_sample_if_empty: () => void;
export const __wbindgen_exn_store: (a: number) => void;
export const __externref_table_alloc: () => number;
export const __wbindgen_export_2: WebAssembly.Table;
export const __wbindgen_malloc: (a: number, b: number) => number;
export const __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
export const __externref_table_dealloc: (a: number) => void;
export const __wbindgen_free: (a: number, b: number, c: number) => void;
export const __wbindgen_start: () => void;
