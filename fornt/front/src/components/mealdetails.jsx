import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../style/mealdetails.scss';
import { Link } from 'react-router-dom';

const MealDetail = () => {
  const { id } = useParams(); // Category ID from URL
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [notification, setNotification] = useState('');
  const [disabled, setDisabled] = useState(false); // Tugma holatini boshqarish uchun

  const fetchMeals = async () => {
    try {
      if (!id) throw new Error('Invalid category ID');
      const response = await fetch(`https://project06.onrender.com/category/${id}/meals`);
      if (!response.ok) {
        throw new Error("Ma'lumotlarni olishda muammo bo'ldi");
      }
      const data = await response.json();
      console.log('Meal Details:', data.data);
      setMeals(data.data.meals);
    } catch (error) {
      console.error('Fetch Error:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMeals();
  }, [id]);

  const addToCart = (meal) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Mahsulot ID bo'yicha savatda borligini tekshirish
    const isAlreadyInCart = cart.some((item) => item._id === meal._id);

    if (isAlreadyInCart) {
      setNotification(`${meal.en_name} savatda mavjud!`);
    } else {
      cart.push({ ...meal, quantity: 1 });
      localStorage.setItem('cart', JSON.stringify(cart));
      setNotification(`${meal.en_name} savatga qo'shildi!`);
    }

    setDisabled(true); // Tugmani faollashtirishdan oldin uni `disabled` holatiga o'tkazish

    setTimeout(() => {
      setDisabled(false); // Tugma yana faollashadi
      setNotification('');
    }, 3000);
  };

  if (loading) {
    return <p>Yuklanmoqda...</p>;
  }

  if (error) {
    return <p>Xato: {error}</p>;
  }

  return (
    <div className='containers'>
      <div className="links">
        <Link to='/'>
          <p>Home</p>
        </Link>
        <p> &gt; </p>
        <Link to='/meals'>
          <p className=''>Meals</p>
        </Link>
        <p> &gt; </p>
        <Link to=''>
          <p className='select'>product</p>
        </Link>
      </div>

      {/* Bildirish */} 
      {notification && (
        <div className="notification">
          <p>{notification}</p>
        </div>
      )}

      <div className="meal-flex">
        {meals.length > 0 ? (
          meals.map((meal) => (
            <div className="box" key={meal._id}>
              <img src={meal.image_url} alt={meal.en_name} />
              <h2>{meal.en_name}</h2>
              <p>{meal.en_description}</p>
              <p className='price'>${meal.price}</p>
              <button 
                onClick={() => addToCart(meal)} 
                className={disabled ? 'disabled' : ''}
                disabled={disabled} // Tugma faolligini boshqarish
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <div className="no-meals">
            <h2>Bu kategoriya uchun meallar mavjud emas</h2>
            <p>Bizni boshqa kategoriyalarimizni ko'rib chiqing!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MealDetail;
