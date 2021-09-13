const imageUrl = 'https://reactjs.org/logo-og.png'
const genericText = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat placeat veniam consequuntur atque!'

export function getData(amount) {
    if (isNaN(amount)) amount = 2

    const data = []

    for (let i = 1; i <= amount; i++) {
        const item = {
            image: imageUrl,
            title: `Card ${i}`,
            description: genericText
        }
        
        data.push(item)
    }

    return data
}