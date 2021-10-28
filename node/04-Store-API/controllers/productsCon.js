const getAllProducts = (req, res) => {
    res.json({status: 200, msg: 'success', results: []});
}       

const getAllProductsStatic = (req, res) => {
    res.json({status: 200, msg: 'static', results: []});
}       

module.exports = {getAllProducts, getAllProductsStatic}