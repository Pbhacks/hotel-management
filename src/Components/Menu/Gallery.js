import React, { Component } from "react";
import "./Gallery.css";

class Gallery extends Component {
  state = {
    menuItems: [
      {
        category: "Indian",
        items: [
          { id: 1, name: "Samosa", price: 50, image: "samosa.jpg" },
          { id: 2, name: "Butter Chicken", price: 350, image: "butter-chicken.jpg" },
          { id: 3, name: "Naan", price: 60, image: "naan.jpg" },
          // add more items here
        ]
      },
      {
        category: "Continental",
        items: [
          { id: 1, name: "Pizza", price: 400, image: "pizza.jpg" },
          { id: 2, name: "Pasta", price: 350, image: "pasta.jpg" },
          { id: 3, name: "Burger", price: 250, image: "burger.jpg" },
          // add more items here
        ]
      },
      {
        category: "Asian",
        items: [
          { id: 1, name: "Siomay", price: 250, image: "siomay.jpg" },
          { id: 2, name: "Pempek", price: 350, image: "pempek.jpg" },
          { id: 3, name: "Rawon", price: 450, image: "rawon.jpg" },
        ]
      },
      {
        category: "Deserts",
        items: [
          { id: 1, name: "Apple Pie", price: 350, image: "applepie.jpg" },
          { id: 2, name: "Lemon Tart", price: 300, image: "lemontart.jpg" },
          { id: 3, name: "Low Fat Tiramisu", price: 250, image: "lowfattiramisu.jpg" },
        ]
      },
      {
        category: "Beverages",
        items: [
          { id: 1, name: "Coffee", price: 150, image: "coffee.jpg" },
          { id: 2, name: "Hot Chocolate", price: 100, image: "hotchocolate.jpg" },
          { id: 3, name: "Fuzzy Navel", price: 250, image: "fuzzynavel.jpg" },
        ]
      },
      {
        category: "Starters",
        items: [
          { id: 1, name: "Aloo Tikki", price: 250, image: "alootikki.jpg" },
          { id: 2, name: "Dahi Kebab", price: 300, image: "dahikebab.jpg" },
          { id: 3, name: "Paneer Pakora", price: 250, image: "paneerpakora.jpg" },
        ]
      },
      // add more categories here
    ]
  };

  render() {
    return (
      <div className="gallery-container">
        {this.state.menuItems.map((category, index) => (
          <div key={index} className="category-container">
            <h2 className="category-title">{category.category}</h2>
            <div className="item-container">
              {category.items.map((item) => (
                <div key={item.id} className="item-box">
                  <img src={require(`./menu-images/${item.image}`)} alt={item.name} className="item-image" />
                  <h3 className="item-name">{item.name}</h3>
                  <p className="item-price">₹ {item.price}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Gallery;