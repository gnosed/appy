/* tslint:disable */
/* eslint-disable */
export const memory: WebAssembly.Memory;
export function __wbg_builttx_free(a: number): void;
export function builttx_tx_bytes(a: number, b: number): void;
export function __wbg_sdk_free(a: number): void;
export function sdk_new(a: number, b: number): number;
export function sdk_has_masp_params(): number;
export function sdk_fetch_and_store_masp_params(): number;
export function sdk_load_masp_params(a: number): number;
export function sdk_add_spending_key(a: number, b: number, c: number, d: number, e: number): number;
export function sdk_sign_tx(a: number, b: number, c: number, d: number, e: number, f: number): number;
export function sdk_process_tx(a: number, b: number, c: number, d: number, e: number): number;
export function sdk_build_tx(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number): number;
export function sdk_append_signature(a: number, b: number, c: number, d: number, e: number, f: number): void;
export function sdk_build_transfer(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number): number;
export function sdk_build_ibc_transfer(a: number, b: number, c: number, d: number, e: number, f: number, g: number): number;
export function sdk_build_eth_bridge_transfer(a: number, b: number, c: number, d: number, e: number, f: number, g: number): number;
export function sdk_build_vote_proposal(a: number, b: number, c: number, d: number, e: number, f: number, g: number): number;
export function sdk_build_bond(a: number, b: number, c: number, d: number, e: number, f: number, g: number): number;
export function sdk_build_unbond(a: number, b: number, c: number, d: number, e: number, f: number, g: number): number;
export function sdk_build_withdraw(a: number, b: number, c: number, d: number, e: number, f: number, g: number): number;
export function sdk_build_reveal_pk(a: number, b: number, c: number, d: number, e: number): number;
export function sdk_reveal_pk(a: number, b: number, c: number, d: number, e: number): number;
export function sdk_sign_arbitrary(a: number, b: number, c: number, d: number, e: number): number;
export function __wbg_query_free(a: number): void;
export function query_new(a: number, b: number): number;
export function query_query_epoch(a: number): number;
export function query_query_all_validator_addresses(a: number): number;
export function query_query_total_bonds(a: number, b: number, c: number): number;
export function query_query_my_validators(a: number, b: number, c: number): number;
export function query_query_staking_positions(a: number, b: number, c: number): number;
export function query_query_balance(a: number, b: number, c: number, d: number, e: number): number;
export function query_query_public_key(a: number, b: number, c: number): number;
export function query_query_signed_bridge_pool(a: number, b: number, c: number): number;
export function query_query_proposals(a: number): number;
export function query_get_total_delegations(a: number, b: number, c: number, d: number, e: number): number;
export function query_delegators_votes(a: number, b: number): number;
export function query_query_gas_costs(a: number): number;
export function initThreadPool(a: number): number;
export function public_key_to_bech32(a: number, b: number, c: number): void;
export function __wbg_address_free(a: number): void;
export function address_new(a: number, b: number): number;
export function address_implicit(a: number, b: number): void;
export function address_public(a: number, b: number): void;
export function address_hash(a: number, b: number): void;
export function __wbg_extendedviewingkey_free(a: number): void;
export function extendedviewingkey_new(a: number, b: number, c: number): void;
export function extendedviewingkey_encode(a: number, b: number): void;
export function __wbg_extendedspendingkey_free(a: number): void;
export function extendedspendingkey_new(a: number, b: number, c: number): void;
export function extendedspendingkey_encode(a: number, b: number): void;
export function __wbg_paymentaddress_free(a: number): void;
export function paymentaddress_new(a: number, b: number, c: number): void;
export function paymentaddress_pinned(a: number, b: number): number;
export function paymentaddress_is_pinned(a: number): number;
export function paymentaddress_hash(a: number, b: number): void;
export function paymentaddress_encode(a: number, b: number): void;
export function __wbindgen_malloc(a: number, b: number): number;
export function __wbindgen_realloc(a: number, b: number, c: number, d: number): number;
export const __wbindgen_export_2: WebAssembly.Table;
export function __wbindgen_add_to_stack_pointer(a: number): number;
export function _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h4ad85e59a9848e80(a: number, b: number, c: number, d: number): void;
export function _dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h1b3bf99411c5436b(a: number, b: number): void;
export function _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h62c2f546ec44ebe7(a: number, b: number, c: number): void;
export function __wbindgen_free(a: number, b: number, c: number): void;
export function __wbindgen_exn_store(a: number): void;
export function wasm_bindgen__convert__closures__invoke2_mut__h333e072d6857f9f0(a: number, b: number, c: number, d: number): void;