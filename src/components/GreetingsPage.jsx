import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomGreeting } from '../redux/greetings/greetingsSlice';

export default function GreetingsPage() {
  const dispatch = useDispatch();
  const greetings = useSelector((state) => state.greetings.value);

  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, [dispatch]);

  return <div className="text-title">{greetings}</div>;
}
