import React, { Fragment, useEffect, useState } from "react";
import './app.scss';
import productsData from '../products-db.json';

const Header = () => {
    return (
        <header>
            <h1>Ты сегодня покормил кота?</h1>
        </header>
    );
};

const ProductCard = (props) => {
    return (
        <div data-productid = {props.productId} className = {props.productCardClass} onClick = {props.cardClickHandler} onMouseDown = {props.cardMouseDownHandler} onMouseLeave = {props.cardMouseLeaveHandler}>
            <div className = 'product-card-header'>
                <div className = {props.cardHeaderCornerClass}></div>
                <p className = {props.cardTaglineClass}>{props.productTagline}</p>
            </div>
            <div className = {props.cardBodyClass}>
                <h2>{props.productName}</h2>
                <h3>{props.productSubName}</h3>
                <p dangerouslySetInnerHTML = {props.productDescription}></p>
                <img src = '../images/cat-photo.png' alt = 'cat picture' className = {props.catPhotoClass}></img>
                <div className = {props.productWeightClass}>
                    <p dangerouslySetInnerHTML = {props.productWeight}></p>
                </div>
            </div>
            <p className = 'under-card-text'>
                {props.underCardText}
                <span>купи.</span>
            </p>
        </div>
    );
}

const App = () => {
    console.log(productsData);
    let [productState, setProductState] = useState(null);

    function doubleClickHandler(event) {
        event.preventDefault();
    }

    function stateChange(event) {   
        let targetId = event.currentTarget.getAttribute('data-productid');
        console.log(event.target);
        console.log(event.currentTarget);
        console.log(targetId);
        productsData.map((product) => {
            if (targetId == product.id && product.state !== 'empty') {
                {
                    console.log(`Product state BEFORE: ${productState}`);
                    if (product.state === 'default') {
                        product.state = 'active';
                    }
                    else {
                        product.state = 'default';
                    }
                    console.log(`Product state AFTER: ${productState}`);
                }
                setProductState(productState = new Date());
            }
        });

    }

    function mouseLeaveHandler(event) {
        console.log(event.currentTarget);
        console.log(event.currentTarget.getAttribute('data-productid'));
        let targetId = event.currentTarget.getAttribute('data-productid');
        productsData.map((product) => {
            if (targetId == product.id && product.state === 'active') {
                {
                    product.state = 'active-hover';
                }
                setProductState(productState = new Date());
            }
        });
    }

    return (
        <Fragment>
            <Header />
            <main>
                {productsData.map( function (product, index) {
                    if (product.state === 'default') {
                        return (
                            <ProductCard 
                                key = {index}

                                productCardClass = 'product-card'
                                cardTaglineClass = 'product-card-tagline'
                                cardHeaderCornerClass = 'product-card-header-corner'
                                cardBodyClass = 'product-card-body'
                                productWeightClass = 'product-card-weight'
                                catPhotoClass = 'cat-photo-class'

                                productId = {product.id}
                                productTagline = {product.tagLine} 
                                productName = {product.name}
                                productSubName = {product.subName}
                                productDescription ={ { __html: product.description} }
                                productWeight = { { __html: product.weight} }
                                underCardText = {product.underCardText}
        
                                cardClickHandler = {stateChange}
                                cardMouseDownHandler = {doubleClickHandler}
                                cardMouseLeaveHandler = {undefined}
                            /> 
                        );
                    }
                    else if (product.state === 'active') {
                        return (
                            <ProductCard 
                                key = {index}

                                productCardClass = 'product-card-active'
                                cardTaglineClass = 'product-card-tagline-active'
                                cardHeaderCornerClass = 'product-card-header-corner-active'
                                cardBodyClass = 'product-card-body-active'
                                productWeightClass = 'product-card-weight product-card-weight-active'
                                catPhotoClass = 'cat-photo-class'

                                productId = {product.id}
                                productTagline = {product.tagLine} 
                                productName = {product.name}
                                productSubName = {product.subName}
                                productDescription ={ { __html: product.description} }
                                productWeight = { { __html: product.weight} }
                                underCardText = {product.underCardTextActive}
        
                                cardClickHandler = {stateChange}
                                cardMouseDownHandler = {doubleClickHandler}
                                cardMouseLeaveHandler = {mouseLeaveHandler}
                            /> 
                        );
                    }
                    else if (product.state === 'active-hover') {
                        return (
                            <ProductCard 
                                key = {index}

                                productCardClass = 'product-card-active'
                                cardTaglineClass = 'product-card-tagline-active product-card-tagline-activehover'
                                cardHeaderCornerClass = 'product-card-header-corner-active'
                                cardBodyClass = 'product-card-body-active'
                                productWeightClass = 'product-card-weight product-card-weight-active'
                                catPhotoClass = 'cat-photo-class'

                                productId = {product.id}
                                productTagline = {product.tagLineActiveHover}  
                                productName = {product.name}
                                productSubName = {product.subName}
                                productDescription ={ { __html: product.description} }
                                productWeight = { { __html: product.weight} }
                                underCardText = {product.underCardTextActive}
        
                                cardClickHandler = {stateChange}
                                cardMouseDownHandler = {doubleClickHandler}
                                cardMouseLeaveHandler = {mouseLeaveHandler}
                            /> 
                        );
                    }
                    else if (product.state === 'empty') {
                        return (
                            <ProductCard 
                                key = {index}

                                productCardClass = 'product-card-empty'
                                cardTaglineClass = 'product-card-tagline-empty'
                                cardHeaderCornerClass = 'product-card-header-corner-empty'
                                cardBodyClass = 'product-card-body-empty'
                                productWeightClass = 'product-card-weight'
                                catPhotoClass = 'cat-photo-class cat-photo-empty-class'

                                productId = {product.id}
                                productTagline = {product.tagLine} 
                                productName = {product.name}
                                productSubName = {product.subName}
                                productDescription ={ { __html: product.description} }
                                productWeight = { { __html: product.weight} }
                                underCardText = {product.underCardTextEmpty}
        
                                cardClickHandler = {undefined}
                                cardMouseDownHandler = {doubleClickHandler}
                            /> 
                        );
                    }
                }
                )}
            </main>
        </Fragment>
    );
};

export default App;