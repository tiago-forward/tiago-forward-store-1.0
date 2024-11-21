export interface CartItem {
    weight: number // Peso do produto (em kg)
    length: number // Comprimento do produto (em cm)
    width: number  // Largura do produto (em cm)
    height: number // Altura do produto (em cm)
    diameter?: number // Diâmetro do produto (em cm), opcional
    quantity: number // Quantidade do produto no carrinho
}

export function calculateCartDimensions(cartItems: CartItem[]) {
    let totalWeight = 0
    let maxDimensions = { length: 0, width: 0, height: 0, diameter: 0 }

    cartItems.forEach((item) => {
        totalWeight += item.weight * item.quantity

        maxDimensions.length = Math.max(maxDimensions.length, item.length)
        maxDimensions.width = Math.max(maxDimensions.width, item.width)
        maxDimensions.height = Math.max(maxDimensions.height, item.height)

        if (item.diameter) {
            maxDimensions.diameter = Math.max(maxDimensions.diameter, item.diameter)
        }
    })

    return {
        totalWeight,
        maxLength: maxDimensions.length,
        maxWidth: maxDimensions.width,
        maxHeight: maxDimensions.height,
        maxDiameter: maxDimensions.diameter,
    }
}
