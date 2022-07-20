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
import type { UnitMeasure } from './UnitMeasure';
import {
    UnitMeasureFromJSON,
    UnitMeasureFromJSONTyped,
    UnitMeasureToJSON,
} from './UnitMeasure';

/**
 * 
 * @export
 * @interface Product
 */
export interface Product {
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    id?: string;
    /**
     * 
     * @type {Date}
     * @memberof Product
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof Product
     */
    updatedAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    createdBy?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    updatedBy?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof Product
     */
    isDeleted?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof Product
     */
    rowVersion?: Date;
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    productName?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof Product
     */
    dateSupplied?: Date;
    /**
     * 
     * @type {number}
     * @memberof Product
     */
    productCostPrice?: number;
    /**
     * 
     * @type {number}
     * @memberof Product
     */
    quantity?: number;
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    description?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Product
     */
    retailPrice?: number;
    /**
     * 
     * @type {UnitMeasure}
     * @memberof Product
     */
    unitMeasure?: UnitMeasure;
}

/**
 * Check if a given object implements the Product interface.
 */
export function instanceOfProduct(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProductFromJSON(json: any): Product {
    return ProductFromJSONTyped(json, false);
}

export function ProductFromJSONTyped(json: any, ignoreDiscriminator: boolean): Product {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'updatedAt': !exists(json, 'updatedAt') ? undefined : (new Date(json['updatedAt'])),
        'createdBy': !exists(json, 'createdBy') ? undefined : json['createdBy'],
        'updatedBy': !exists(json, 'updatedBy') ? undefined : json['updatedBy'],
        'isDeleted': !exists(json, 'isDeleted') ? undefined : json['isDeleted'],
        'rowVersion': !exists(json, 'rowVersion') ? undefined : (new Date(json['rowVersion'])),
        'productName': !exists(json, 'productName') ? undefined : json['productName'],
        'dateSupplied': !exists(json, 'dateSupplied') ? undefined : (new Date(json['dateSupplied'])),
        'productCostPrice': !exists(json, 'productCostPrice') ? undefined : json['productCostPrice'],
        'quantity': !exists(json, 'quantity') ? undefined : json['quantity'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'retailPrice': !exists(json, 'retailPrice') ? undefined : json['retailPrice'],
        'unitMeasure': !exists(json, 'unitMeasure') ? undefined : UnitMeasureFromJSON(json['unitMeasure']),
    };
}

export function ProductToJSON(value?: Product | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updatedAt': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
        'createdBy': value.createdBy,
        'updatedBy': value.updatedBy,
        'isDeleted': value.isDeleted,
        'rowVersion': value.rowVersion === undefined ? undefined : (value.rowVersion.toISOString()),
        'productName': value.productName,
        'dateSupplied': value.dateSupplied === undefined ? undefined : (value.dateSupplied.toISOString()),
        'productCostPrice': value.productCostPrice,
        'quantity': value.quantity,
        'description': value.description,
        'retailPrice': value.retailPrice,
        'unitMeasure': UnitMeasureToJSON(value.unitMeasure),
    };
}

