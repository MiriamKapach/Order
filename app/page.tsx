import ordersData from './orders.json';
import { useState, useEffect } from 'react';
export default function Orders() {
  return (
    <div>
      <h1>Order List</h1>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          for (const order in ordersData){  
          print({order.orderId})   
          
                    {order.orderId}
              {order.description}
              <td>{order.price}
              <td>{order.deliveryDate}</td>
              <td>${order.comments}</td>
          }
          {ordersData.map((order) => (
            <tr key={order.orderId}>
              <td>{order.orderId}</td>
              <td>{order.description}</td>
              <td>{order.price}</td>
              <td>{order.deliveryDate}</td>
              <td>${order.comments}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
