import React from 'react';

export default class ShopItemClass extends React.Component {

  render() {
    const {item} = this.props;
    return(
      <div className="main-content">
        <h2>{item.brand}</h2>
        <h1>{item.title}</h1>
        <h3>{item.description}</h3>
        <div className="description">
          {item.descriptionFull}
        </div>
        <div className="highlight-window mobile">
          <div className="highlight-overlay"/>
        </div>
        <div className="divider"/>
        <div className="purchase-info">
          <div className="price">{item.currency}{item.price}</div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    );
  }
}
