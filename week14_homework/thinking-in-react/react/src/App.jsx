import { useState } from 'react'
import logo from './logo.svg'
import React from 'react';
import ReactDOM from 'react-dom';
// import './App.css'

class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    );
  }
}

class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ?
      product.name :
      <span style={{color: 'red'}}>
        {product.name}
      </span>;

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    const rows = [];
    let lastCategory = null;
    
    this.props.products.forEach((product) => {
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name} />
      );
      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." />
        <p>
          <input type="checkbox" />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}

class FilterableProductTable extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable products={this.props.products} />
      </div>
    );
  }
}
 


export default FilterableProductTable

// function App() {
  //   const [count, setCount] = useState(0)
  
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>Hello Vite + React!</p>
  //         <p>
  //           <button type="button" onClick={() => setCount((count) => count + 1)}>
  //             count is: {count}
  //           </button>
  //         </p>
  //         <p>
  //           Edit <code>App.jsx</code> and save to test HMR updates.
  //         </p>
  //         <p>
  //           <a
  //             className="App-link"
  //             href="https://reactjs.org"
  //             target="_blank"
  //             rel="noopener noreferrer"
  //           >
  //             Learn React
  //           </a>
  //           {' | '}
  //           <a
  //             className="App-link"
  //             href="https://vitejs.dev/guide/features.html"
  //             target="_blank"
  //             rel="noopener noreferrer"
  //           >
  //             Vite Docs
  //           </a>
  //         </p>
  //       </header>
  //     </div>
  //   )
  // }