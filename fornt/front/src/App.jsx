import React from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query'; // Import QueryClient and QueryClientProvider
import './style/main.scss';
import HomePage from './pages';
import Adress from './pages/adres';
import Meal from './pages/meal';
import MealDetail from './pages/mealDetail';
import Cart from './pages/cart';
import table from './pages/table'
import Table from './pages/table';




const queryClient = new QueryClient(); // Create a new QueryClient instance

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: '/adress', element: <Adress /> },
    { path: '/meal', element: <Meal /> },
    { path: '/meal-detail/:id', element: <MealDetail /> },
    { path: '/cart', element: <Cart /> },
    {path:'/booking', element:<Table/>}
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
