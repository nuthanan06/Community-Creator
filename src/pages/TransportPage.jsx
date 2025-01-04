import React from 'react'
import Question from '../components/Question'
import { useLoaderData } from 'react-router-dom';

const TransportPage = () => {
  const question = useLoaderData();
  return (
    <Question question={question} path="/housing" val="1"/>

  )
}

const jobLoader = async ({params, index}) => {
  const res = await fetch(`/api/questions/${index}`);
  const data = await res.json();
  return data;
}

const createLoaderWithIndex = (index) => {
  return (args) => jobLoader({ ...args, index });
};

export {TransportPage as default, createLoaderWithIndex};