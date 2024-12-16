"use client";

import Courses from '@/Components/Courses';
import Footer from '@/Components/Footer';
import JoinUsSection from '@/Components/JoinUsSection';
import NewsAndArticles from '@/Components/NewsAndArticles';
import React from 'react'

const HomePage = () => {
  return (
    <>
      <JoinUsSection />
      <Courses />
      <NewsAndArticles />
      <Footer />
    </>
  )
}

export default HomePage;