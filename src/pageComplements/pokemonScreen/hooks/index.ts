const pokemonInUserCart = (cart: { _id: string }[], id: String): boolean => {

const result = cart.filter(item => { if (item._id == id) return true })
    if(result.length > 0)return true
    return false
}


export {
    pokemonInUserCart
}