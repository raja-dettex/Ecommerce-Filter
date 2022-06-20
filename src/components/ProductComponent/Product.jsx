export const Product = () => {
  return (
    <div className="card card-vertical d-flex direction-column relative shadow">
      <div className="card-image-container">
        <img className="card-image" src="/assets/shoes.jpg" alt="shoes" />
      </div>
      <div className="card-details">
        <div className="card-title">Premium Collection</div>
        <div className="card-description">
          <p className="card-des">Men Sneakers</p>
          <p className="card-price">
            Rs. 1750
            <span className="price-strike-through">Rs. 2499</span>
            <span className="discount">(30% OFF)</span>
          </p>
        </div>
        <div className="cta-btn">
          <button className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};
