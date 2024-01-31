import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/rootReducer";
import IsLoadingHOC from "../Common/IsLoadingHOC";
import { authAxios } from "../config/config";
import { toast } from "react-toastify";
import { validPhone } from "../Constants";
import { validateEmail } from "../Helper";

interface MyComponentProps {
  setLoading: (isComponentLoading: boolean) => void;
}

function Checkout(props: MyComponentProps) {
  const { setLoading } = props;
  const { cart } = useSelector((state: RootState) => state.product);

  const [billing, setBilling] = useState({
    first_name: "",
    last_name: "",
    address: "",
    email: "",
    mobile: "",
  });

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBilling((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isvalidateForm = (billing: any) => {
    if (!billing.first_name) {
      toast.error("Please fill out First Name");
      return false;
    } else if (!billing.last_name) {
      toast.error("Please fill out laste Name");
      return false;
    } else if (!billing.email) {
      toast.error("Please fill out email address");
      return false;
    } else if (!validateEmail(billing.email)) {
      toast.error("Please fill valid email address");
      return false;
    } else if (!billing.mobile) {
      toast.error("Please fill out phone number");
      return false;
    } else if (!validPhone.test(billing.mobile)) {
      toast.error("Please fill valid phone number");
      return false;
    } else if (!billing.address) {
      toast.error("Please fill out address");
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log("user", billing);
    const payload = billing;
    if (isvalidateForm(payload)) {
      setLoading(true);
      await authAxios()
        .post("/order/create-order", payload)
        .then(
          (response) => {
            setLoading(false);
            if (response.data.status === 1) {
              toast.success(response.data.message);
            } else {
              toast.error(response.data.message);
            }
          },
          (error) => {
            setLoading(false);
            toast.error(error.response.data.message);
            console.log(error);
          }
        )
        .catch((error) => {
          console.log("errorrrr", error);
        });
    }
  };

  const totalCounter = (cart: any) => {
    var result = cart.reduce(function (acc: any, item: any) {
      return acc + item.price * item.product_quantity;
    }, 0);
    return result;
  };

  console.log("cart", cart);

  return (
    <>
      <section className="checkout--table">
        <div className="grid--container">
          <div className="grid">
            <div className="grid----">
              <div className="checkout--table--wrapper">
                <div className="billing--details">
                  <div className="billing--title">
                    <h3>Billing Details</h3>
                  </div>
                  <div className="billing--details--form">
                    <form action="">
                      <div className="form--group">
                        <label htmlFor="name">
                          First Name <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          name="first_name"
                          placeholder="First Name"
                          value={billing.first_name}
                          onChange={handleChangeInput}
                          required
                        />
                      </div>
                      <div className="form--group">
                        <label htmlFor="name">
                          Last Name <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Last Name"
                          name="last_name"
                          value={billing.last_name}
                          onChange={handleChangeInput}
                          required
                        />
                      </div>
                      <div className="form--group">
                        <label htmlFor="Email">
                          Email <span className="required">*</span>
                        </label>
                        <input
                          type="email"
                          placeholder="Email"
                          name="email"
                          value={billing.email}
                          onChange={handleChangeInput}
                          required
                        />
                      </div>
                      <div className="form--group">
                        <label htmlFor="Email">
                          Phone <span className="required">*</span>
                        </label>
                        <input
                          type="number"
                          placeholder="Phone number"
                          name="mobile"
                          value={billing.mobile}
                          onChange={handleChangeInput}
                          required
                        />
                      </div>
                      <div className="form--group">
                        <label htmlFor="name">
                          Address <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Address"
                          name="address"
                          value={billing.address}
                          onChange={handleChangeInput}
                          required
                        />
                      </div>
                    </form>
                  </div>
                </div>
                <div className="cart--totals">
                  <div className="cart--total--table">
                    <h3 className="order--title">Order Summary</h3>
                    {cart &&
                      cart?.length > 0 &&
                      cart.map((item, index) => (
                        <div className="product--details">
                          <div className="product--thumbnuil">
                            <img src={item?.image} alt="" />
                          </div>
                          <div className="product--content">
                            <h3 className="pd--title">{item.productName}</h3>
                            <div className="quantity--and--price">
                              <span className="price">{item.price}</span>
                              <span className="quantity">
                                <span>QTY : </span>
                                <span>{item.product_quantity}</span>
                              </span>
                            </div>
                            <div className="type">
                              <b>Type:</b> <span>{item.planType}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    <ul>
                      <li>
                        <span>Subtotal</span>
                        <span>{totalCounter(cart)}</span>
                      </li>
                      <li>
                        <span>Tax Fee</span>
                        <span>0</span>
                      </li>
                      <li>
                        <span>Total</span>
                        <span>{totalCounter(cart)}</span>
                      </li>
                    </ul>
                    <div className="checkout--btn">
                      <button
                        onClick={handleSubmit}
                        type="button"
                        className="btn"
                      >
                        Place Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default IsLoadingHOC(Checkout);
