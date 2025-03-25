export function formatCurrency(amount: number) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount)
}

export function getImagePath(imagePath: string) {
    const cloudinaryBaseUrl = 'https://res.cloudinary.com'
    if(imagePath.startsWith(cloudinaryBaseUrl)) {
        return imagePath
    } else {
        return `/partes/${imagePath}.jpg`
    }
}

export function getImagePathOrder(imagePath: string) {
    const cloudinaryBaseUrlS = 'https://res.cloudinary.com'
    if(imagePath.startsWith(cloudinaryBaseUrlS)) {
        return imagePath
    } else {
        return `/order/${imagePath}.jpg`
    }
}