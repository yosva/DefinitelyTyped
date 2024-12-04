// Disable auto-export
export {};

type RenameToIn<T> = {
    [K in keyof T as K extends `in${Uppercase<string>}${Lowercase<string>}` ? `in` : K]: T[K];
};

export type PostgRESTEqual = "eq";
export type PostgRESTNotEqual = "neq";
export type PostgRESTNegation = "not";
export type PostgRESTOr = "or";
export type PostgRESTAnd = "and";
export type PostgRESTGreaterThan = "gt";
export type PostgRESTGreaterThanOrEqual = "gte";
export type PostgRESTLessThan = "lt";
export type PostgRESTLessThanOrEqual = "lte";

export type RulesLogic =
    | boolean
    | string
    | number
    | null
    | PostgRESTEqual
    | PostgRESTNotEqual
    | PostgRESTNegation
    | PostgRESTOr
    | PostgRESTAnd
    | PostgRESTGreaterThan
    | PostgRESTGreaterThanOrEqual
    | PostgRESTLessThan
    | PostgRESTLessThanOrEqual;

export function add_operation(name: string, code: (...args: any[]) => any): void;
export function apply(logic: RulesLogic, data?: unknown): any;
export function rm_operation(name: string): void;

// These functions are undocumented, but are exported by the real package
// so they're typed here for completeness.
export function is_logic(logic: any): logic is RulesLogic;
export function truthy(value: any): boolean;
export function get_operator(logic: Record<string, any>): string;
export function get_values(logic: Record<string, any>): any;
export function uses_data(logic: Record<string, any>): any[];
export function rule_like(rule: any, pattern: any): boolean;
