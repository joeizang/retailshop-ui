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
import type { Product } from './Product';
import {
    ProductFromJSON,
    ProductFromJSONTyped,
    ProductToJSON,
} from './Product';
import type { Sale } from './Sale';
import {
    SaleFromJSON,
    SaleFromJSONTyped,
    SaleToJSON,
} from './Sale';
import type { UnitMeasure } from './UnitMeasure';
import {
    UnitMeasureFromJSON,
    UnitMeasureFromJSONTyped,
    UnitMeasureToJSON,
} from './UnitMeasure';

/**
 * 
 * @export
 * @interface ProductSold
 */
export interface ProductSold {
    /**
     * 
     * @type {string}
     * @memberof ProductSold
     */
    id?: string;
    /**
     * 
     * @type {Date}
     * @memberof ProductSold
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof ProductSold
     */
    updatedAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof ProductSold
     */
    createdBy?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProductSold
     */
    updatedBy?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ProductSold
     */
    isDeleted?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof ProductSold
     */
    rowVersion?: Date;
    /**
     * 
     * @type {string}
     * @memberof ProductSold
     */
    name?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ProductSold
     */
    price?: number;
    /**
     * 
     * @type {string}
     * @memberof ProductSold
     */
    productId?: string;
    /**
     * 
     * @type {Product}
     * @memberof ProductSold
     */
    product?: Product;
    /**
     * 
     * @type {string}
     * @memberof ProductSold
     */
    saleId?: string;
    /**
     * 
     * @type {Sale}
     * @memberof ProductSold
     */
    sale?: Sale;
    /**
     * 
     * @type {UnitMeasure}
     * @memberof ProductSold
     */
    unitMeasure?: UnitMeasure;
    /**
     * 
     * @type {number}
     * @memberof ProductSold
     */
    quantityInStock?: number;
    /**
     * 
     * @type {number}
     * @memberof ProductSold
     */
    quanityToBeSold?: number;
    /**
     * 
     * @type {number}
     * @memberof ProductSold
     */
    readonly totalPrice?: number;
}

/**
 * Check if a given object implements the ProductSold interface.
 */
export function instanceOfProductSold(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProductSoldFromJSON(json: any): ProductSold {
    return ProductSoldFromJSONTyped(json, false);
}

export function ProductSoldFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductSold {
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
        'name': !exists(json, 'name') ? undefined : json['name'],
        'price': !exists(json, 'price') ? undefined : json['price'],
        'productId': !exists(json, 'productId') ? undefined : json['productId'],
        'product': !exists(json, 'product') ? undefined : ProductFromJSON(json['product']),
        'saleId': !exists(json, 'saleId') ? undefined : json['saleId'],
        'sale': !exists(json, 'sale') ? undefined : SaleFromJSON(json['sale']),
        'unitMeasure': !exists(json, 'unitMeasure') ? undefined : UnitMeasureFromJSON(json['unitMeasure']),
        'quantityInStock': !exists(json, 'quantityInStock') ? undefined : json['quantityInStock'],
        'quanityToBeSold': !exists(json, 'quanityToBeSold') ? undefined : json['quanityToBeSold'],
        'totalPrice': !exists(json, 'totalPrice') ? undefined : json['totalPrice'],
    };
}

export function ProductSoldToJSON(value?: ProductSold | null): any {
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
        'name': value.name,
        'price': value.price,
        'productId': value.productId,
        'product': ProductToJSON(value.product),
        'saleId': value.saleId,
        'sale': SaleToJSON(value.sale),
        'unitMeasure': UnitMeasureToJSON(value.unitMeasure),
        'quantityInStock': value.quantityInStock,
        'quanityToBeSold': value.quanityToBeSold,
    };
}

