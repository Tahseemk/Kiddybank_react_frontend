import React, { useEffect } from "react";
import HeroBanner from "../Common/HeroBanner";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/rootReducer";
import { useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../Redux/Reducers/productSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function CartView() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart } = useSelector((state: RootState) => state.product);

  const totalCounter = (cart: any) => {
    var result = cart.reduce(function (acc: any, item: any) {
      return acc + item.price * item.product_quantity;
    }, 0);
    return result;
  };

  const handleRemoveItem = (prdictID: string) => {
    dispatch(removeItem(prdictID));
  };

  useEffect(() => {
    if(cart && cart.length === 0){
      navigate('/')
    }
  }, [cart]);

  const handleCheckout = () => {
    navigate('/checkout')
  }

  return (
    <React.Fragment>
      {/* <HeroBanner /> */}
      <section className="cart--table">
        <div className="grid--container">
          <div className="grid">
            <div className="grid----">
              <div className="cart--table--wrapper">
                <table className="cart--table--items">
                  <thead>
                    <tr>
                      <th className="col-product-info">Product</th>
                      <th className="product-price">Price</th>
                      <th className="product-quantity">Quantity</th>
                      <th className="product-subtotal">Subtotal</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart &&
                      cart.length > 0 &&
                      cart.map((item, index) => (
                        <tr key={index + 1}>
                          <td className="product--info">
                            <div className="product-wrap">
                              <div className="product--thumbnuil">
                                <img
                                  src={item.image}
                                  alt="product-item"
                                />
                              </div>
                              <div className="product--info--data">
                                <h6 className="pd--title">{item.productName}</h6>
                                <dl>
                                  <dt>Plan Type :</dt>
                                  <dd>{item.planType}</dd>
                                </dl>
                              </div>
                            </div>
                          </td>
                          <td className="product-price">
                            <span className="hidden--desk">Price</span>
                            <span>{item.price}</span>
                          </td>
                          <td className="product-quantity">
                            <span className="hidden--desk">Price</span>
                            <div className="quantity">
                              <input
                                type="number"
                                className="qty"
                                value={item.product_quantity}
                                placeholder=""
                                onChange={() => {console.log('tkk')}}
                              />
                              <button
                                type="button"
                                onClick={() =>
                                  dispatch(decrementQuantity(item._id))
                                }
                                className="decrease"
                              >
                                -
                              </button>
                              <button
                                type="button"
                                onClick={() =>
                                  dispatch(incrementQuantity(item._id))
                                }
                                className="increase"
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td className="product-subtotal">
                            <span className="hidden--desk">Price</span>
                            <span>
                              {item.price * item.product_quantity}
                            </span>
                          </td>
                          <td className="remove--product">
                            <div
                              onClick={() => handleRemoveItem(item._id)}
                              className="delete--product"
                            >
                              <i className="fa-sharp fa-solid fa-circle-xmark"></i>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
                <div className="cart--totals">
                  <div className="cart--total--table">
                    <h3 className="order--title">Order Summary</h3>
                    <ul>
                      <li>
                        <span>Subtotal</span>
                        <span>{totalCounter(cart)}</span>
                      </li>
                      <li>
                        <span>Bank fee</span>
                        <span>0.00</span>
                      </li>
                      <li>
                        <span>Total</span>
                        <span>{totalCounter(cart)}</span>
                      </li>
                    </ul>
                    <div className="checkout--btn">
                      <button onClick={handleCheckout} type="button" className="btn">
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default CartView;
