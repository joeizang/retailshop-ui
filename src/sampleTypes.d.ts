declare namespace namespace {
  export interface Product {
    ProductName: string
    DateSupplied: Date
    ProductCostPrice: number
    Quantity: number
    Description: string
    RetailPrice: number
    UnitMeasure: number
    Id: string
    CreatedAt: Date
    UpdatedAt: Date
    CreatedBy: string
    UpdatedBy: string
    IsDeleted: boolean
    RowVersion: Date
  }

  export interface ShopUser {
    CreatedAt: Date
    UpdatedAt: Date
    CreatedBy: string
    UpdatedBy: string
    FirstName: string
    LastName: string
    Sales: any[]
    Id: string
    UserName?: any
    NormalizedUserName?: any
    Email?: any
    NormalizedEmail?: any
    EmailConfirmed: boolean
    PasswordHash?: any
    SecurityStamp: string
    ConcurrencyStamp: string
    PhoneNumber?: any
    PhoneNumberConfirmed: boolean
    TwoFactorEnabled: boolean
    LockoutEnd?: any
    LockoutEnabled: boolean
    AccessFailedCount: number
  }

  export interface Sale {
    Products: any[]
    SaleDate: Date
    ShopUserId: string
    ShopUser: ShopUser
    SalesPerson: string
    GrandTotal: number
    Id: string
    CreatedAt: Date
    UpdatedAt: Date
    CreatedBy: string
    UpdatedBy: string
    IsDeleted: boolean
    RowVersion: Date
  }

  export interface ProductSoldDemo {
    Name: string
    Price: number
    ProductId: string
    Product: Product
    SaleId: string
    Sale: Sale
    UnitMeasure: number
    QuantityInStock: number
    QuanityToBeSold: number
    TotalPrice: number
    Id: string
    CreatedAt: Date
    UpdatedAt: Date
    CreatedBy: string
    UpdatedBy: string
    IsDeleted: boolean
    RowVersion: Date
  }

  export interface SaleDemo {
    Products: any[]
    SaleDate: Date
    ShopUserId: string
    ShopUser: ShopUser
    SalesPerson: string
    GrandTotal: number
    Id: string
    CreatedAt: Date
    UpdatedAt: Date
    CreatedBy: string
    UpdatedBy: string
    IsDeleted: boolean
    RowVersion: Date
  }
}
