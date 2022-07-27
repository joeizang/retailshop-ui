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
/**
 * 
 * @export
 * @interface DeleteProductModel
 */
export interface DeleteProductModel {
    /**
     * 
     * @type {string}
     * @memberof DeleteProductModel
     */
    productId?: string;
}

/**
 * Check if a given object implements the DeleteProductModel interface.
 */
export function instanceOfDeleteProductModel(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DeleteProductModelFromJSON(json: any): DeleteProductModel {
    return DeleteProductModelFromJSONTyped(json, false);
}

export function DeleteProductModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteProductModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'productId': !exists(json, 'productId') ? undefined : json['productId'],
    };
}

export function DeleteProductModelToJSON(value?: DeleteProductModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'productId': value.productId,
    };
}
