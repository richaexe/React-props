import './Product.css';
import Price from './Price.jsx'


function Product({ title, idx }) {
    let oldPrice = ['12,495', '11,900', '1,599', '599'];
    let newPrice = ['8,999', '9,199', '899', '278'];
    let discription = [
        ['80,000 DPI', '5 Programmable Button'],
        ['Intuitive touch surface', 'Designed for iPad Pro'],
        ['Intuitive touch surface', 'Designed for iPad Pro'],
        ['Wireless Mouse 2.4GHz', 'Optical orientation']]
    return (
        <div className="Product">
            <h4>{title}</h4>
            <p>{discription[idx][0]}</p>
            <p>{discription[idx][1]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
        </div>
    );
}

export default Product;