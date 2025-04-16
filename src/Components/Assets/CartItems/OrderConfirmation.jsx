import React, { useContext } from "react";
import { ShopContext } from "../../../Context/ShopContext";
import './OrderConfirmation.css';
import { FaBoxOpen, FaMoneyBillWave } from "react-icons/fa";
import CryptoJS from "crypto-js";

const OrderConfirmation = () => {
  const { cartItems, allproducts, getTotalCartAmount } = useContext(ShopContext);
  const secretKey = '8gBm/:&EnhH.1/q';

  const handleEsewaPayment = () => {
    const amount = getTotalCartAmount();
    const taxAmount = 0;
    const serviceCharge = 0;
    const deliveryCharge = 0;
    const totalAmount = amount + taxAmount + serviceCharge + deliveryCharge;
    const transactionUuid = 'TXN_' + Date.now();
    const productCode = 'EPAYTEST';

    const signatureString = `total_amount=${totalAmount},transaction_uuid=${transactionUuid},product_code=${productCode}`;
    const hash = CryptoJS.HmacSHA256(signatureString, secretKey);
    const signature = CryptoJS.enc.Base64.stringify(hash);

    const form = document.createElement("form");
    form.method = "POST";
    form.action = "https://rc-epay.esewa.com.np/api/epay/main/v2/form";

    const paymentData = {
      amount: amount,
      tax_amount: taxAmount,
      total_amount: totalAmount,
      transaction_uuid: transactionUuid,
      product_code: productCode,
      product_service_charge: serviceCharge,
      product_delivery_charge: deliveryCharge,
      success_url: "http://localhost:3000/success",
      failure_url: "http://localhost:3000/failure",
      signed_field_names: "total_amount,transaction_uuid,product_code",
      signature: signature,
    };

    for (const [key, value] of Object.entries(paymentData)) {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = value;
      form.appendChild(input);
    }

    document.body.appendChild(form);
    form.submit();
  };

  return (
    <div className="order-confirmation-wrapper">
      <div className="order-card">
        <h2 className="order-title">
          <FaBoxOpen style={{ marginRight: "10px", color: "#f59e0b" }} />
          Order Confirmation
        </h2>

        {allproducts.map((product) => {
          if (cartItems[product.id] > 0) {
            return (
              <div className="order-item" key={product.id}>
                <img src={product.image} alt={product.name} className="order-img" />
                <div className="order-details">
                  <h3>{product.name}</h3>
                  <p>
                    Price: Rs.{product.new_price} × {cartItems[product.id]} = Rs.
                    {product.new_price * cartItems[product.id]}
                  </p>
                </div>
              </div>
            );
          }
          return null;
        })}

        <hr className="divider" />

        <div className="order-total">
          <strong>Total: Rs.{getTotalCartAmount()}</strong>
        </div>

        <button className="esewa-btn" onClick={handleEsewaPayment}>
          <FaMoneyBillWave style={{ marginRight: "8px" }} />
          Pay with eSewa
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
