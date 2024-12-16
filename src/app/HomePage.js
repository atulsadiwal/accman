"use client";

import Courses from '@/components/Courses';
import Footer from '@/components/Footer';
import JoinUsSection from '@/components/JoinUsSection';
import NewsAndArticles from '@/components/NewsAndArticles';
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