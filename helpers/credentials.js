export const URLS = {
    base_url: 'https://www.saucedemo.com',
    inventory_url: 'https://www.saucedemo.com/inventory.html',
    cart_url: 'https://www.saucedemo.com/cart.html',
    checkout_url:'https://www.saucedemo.com/checkout-step-one.html',
    checkout_overview_url: 'https://www.saucedemo.com/checkout-step-two.html',
    order_complete_url: 'https://www.saucedemo.com/checkout-complete.html'
}
export const USERS = {
    standard: { username: 'standard_user', password: 'secret_sauce' },
    locked: { username: 'locked_out_user', password: 'secret_sauce' },
    invalid: {username: 'invalid_username', password: 'invalid_password'}
}

export const MESSAGES = {
    invalidCredentials: 'Epic sadface: Username and password do not match any user in this service',
    usernameRequired: 'Epic sadface: Username is required',
    passwordRequired: 'Epic sadface: Password is required',
    lockedOut: 'Epic sadface: Sorry, this user has been locked out.',
    completeOrder: 'Thank you for your order!'
}

export const PRODUCTS = {
    backpack: {
        itemName: 'backpack',
        displayName: 'Sauce Labs Backpack',
        price: '$29.99'
    }
}

export const CUSTOMER = {
    firstName: 'John',
    lastName: 'Doe',
    postalCode: '12345'
} 

export const FILTERS = {
    nameAsc: 'az',
    nameDesc: 'za',
    priceLow: 'lohi',
    priceHigh: 'hilo'
}

export const SECURITY = {
    sqlInjection: "' OR 1=1--"
}
