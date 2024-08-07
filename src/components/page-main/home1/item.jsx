import './home.css';

function Item({title}) {
    return (
        <div className='ph'>
            {title !== "Accessories" && (
                <p>Order Online for <a className="ap" href="#">Touchless Delivery</a></p>
            )}
            <h1>{title}</h1>
        </div>

    );
}

export default Item;








