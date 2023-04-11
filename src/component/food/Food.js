import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../../redux/action/AddCart';
import { Loading } from '../Loading/Loading';
import {NavLink} from 'react-router-dom'
import './food.css'
import { listProduct } from '../../redux/action/Product';

const Food = ({ heading, menuFiler }) => {

  const [filter, setFilter] = useState('')
  const dispatch = useDispatch()
  
  const list = useSelector((state) => state.ProductReducer) ?? {loading: true, products: []}
  const {loading, products} = list
  
  const handleAddToCart = (food) => {
    const action = addCart(food)
    dispatch(action)
  }
  
  useEffect(() => {
    dispatch(listProduct(filter))
  }, [dispatch, filter])

  const LoadingSkeleton = () => {
    return (
      <div className='food_list'>
        <div className='food_item' >
          <div className='food_item-image'>
            <Loading style={{ height: '235px', }}></Loading>
          </div>
          <h3 className='food_item-name'>
            <Loading style={{ height: '25px' }}></Loading>
          </h3>
          <div className='food_item-price'>
            <Loading style={{ height: '46px' }}></Loading>
          </div>
          <Loading style={{ height: '37px', }}></Loading>
        </div>
        <div className='food_item' >
          <div className='food_item-image'>
            <Loading style={{ height: '235px', }}></Loading>
          </div>
          <h3 className='food_item-name'>
            <Loading style={{ height: '25px' }}></Loading>
          </h3>
          <div className='food_item-price'>
            <Loading style={{ height: '46px' }}></Loading>
          </div>
          <Loading style={{ height: '37px', }}></Loading>
        </div>
        <div className='food_item' >
          <div className='food_item-image'>
            <Loading style={{ height: '235px', }}></Loading>
          </div>
          <h3 className='food_item-name'>
            <Loading style={{ height: '25px' }}></Loading>
          </h3>
          <div className='food_item-price'>
            <Loading style={{ height: '46px' }}></Loading>
          </div>
          <Loading style={{ height: '37px', }}></Loading>
        </div>
        <div className='food_item' >
          <div className='food_item-image'>
            <Loading style={{ height: '235px', }}></Loading>
          </div>
          <h3 className='food_item-name'>
            <Loading style={{ height: '25px' }}></Loading>
          </h3>
          <div className='food_item-price'>
            <Loading style={{ height: '46px' }}></Loading>
          </div>
          <Loading style={{ height: '37px', }}></Loading>
        </div>
      </div>
    )
  }

  return (
    <div className='food'>
      <h2 className='food_heading'>{heading}</h2>
      <ul className='food_filter'>
        {menuFiler.map((item, index) => {
          return (
            <li key={index} onClick={()=> setFilter(item)} >{item}</li>
          )
        })}
      </ul>
      {loading ? <LoadingSkeleton /> : 
        <div className='food_list'>
        {products.map((food, index) => {
          return (
            <div className='food_item' key={index}>
              <div className='food_item-image'>
                <img src={food.foodImage} alt='' />
              </div>
              <h3 className='food_item-name'>{food.foodName}</h3>
              <div className='food_item-price'>{food.foodPrice}</div>
              <button className='food_item-add' onClick={() => handleAddToCart(food)}>Đặt ngay <i className="fa-solid fa-bag-shopping"></i></button>
            </div>
          )
        })}

      </div>
      }
      <button className='button_view'><NavLink to='menu' >Xem thêm</NavLink></button>
    </div>
  )
}

export default Food 