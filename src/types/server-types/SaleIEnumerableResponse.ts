/* tslint:disable */
/* eslint-disable */
/**
 * Retail Shop API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Sale } from './Sale';
import {
    SaleFromJSON,
    SaleFromJSONTyped,
    SaleToJSON,
} from './Sale';

/**
 * 
 * @export
 * @interface SaleIEnumerableResponse
 */
export interface SaleIEnumerableResponse {
    /**
     * 
     * @type {Array<Sale>}
     * @memberof SaleIEnumerableResponse
     */
    data?: Array<Sale> | null;
    /**
     * 
     * @type {string}
     * @memberof SaleIEnumerableResponse
     */
    message?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof SaleIEnumerableResponse
     */
    status?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof SaleIEnumerableResponse
     */
    errors?: Array<string> | null;
}

/**
 * Check if a given object implements the SaleIEnumerableResponse interface.
 */
export function instanceOfSaleIEnumerableResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SaleIEnumerableResponseFromJSON(json: any): SaleIEnumerableResponse {
    return SaleIEnumerableResponseFromJSONTyped(json, false);
}

export function SaleIEnumerableResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SaleIEnumerableResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : (json['data'] === null ? null : (json['data'] as Array<any>).map(SaleFromJSON)),
        'message': !exists(json, 'message') ? undefined : json['message'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
    };
}

export function SaleIEnumerableResponseToJSON(value?: SaleIEnumerableResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : (value.data === null ? null : (value.data as Array<any>).map(SaleToJSON)),
        'message': value.message,
        'status': value.status,
        'errors': value.errors,
    };
}

