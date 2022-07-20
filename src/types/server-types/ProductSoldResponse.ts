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
import type { ProductSold } from './ProductSold';
import {
    ProductSoldFromJSON,
    ProductSoldFromJSONTyped,
    ProductSoldToJSON,
} from './ProductSold';

/**
 * 
 * @export
 * @interface ProductSoldResponse
 */
export interface ProductSoldResponse {
    /**
     * 
     * @type {ProductSold}
     * @memberof ProductSoldResponse
     */
    data?: ProductSold;
    /**
     * 
     * @type {string}
     * @memberof ProductSoldResponse
     */
    message?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ProductSoldResponse
     */
    status?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof ProductSoldResponse
     */
    errors?: Array<string> | null;
}

/**
 * Check if a given object implements the ProductSoldResponse interface.
 */
export function instanceOfProductSoldResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProductSoldResponseFromJSON(json: any): ProductSoldResponse {
    return ProductSoldResponseFromJSONTyped(json, false);
}

export function ProductSoldResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductSoldResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ProductSoldFromJSON(json['data']),
        'message': !exists(json, 'message') ? undefined : json['message'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
    };
}

export function ProductSoldResponseToJSON(value?: ProductSoldResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ProductSoldToJSON(value.data),
        'message': value.message,
        'status': value.status,
        'errors': value.errors,
    };
}

