import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Quote } from 'lucide-react';

interface ReviewProps {
  text: string;
  author: string;
  position: string;
}

const ReviewCard: React.FC<ReviewProps> = ({ text, author, position }) => {
  return (
    <div className="card h-full flex flex-col">
      <div className="text-primary mb-6">
        <Quote size={36} />
      </div>
      <p className="text-lg flex-grow mb-6">{text}</p>
      <div>
        <h4 className="font-medium text-lg">{author}</h4>
        <p className="text-muted">{position}</p>
      </div>
    </div>
  );
};

const Reviews: React.FC = () => {
  const { t } = useTranslation();
  const swiperRef = useRef<any>(null);

  const reviews = [
    {
      text: t('reviews.review1.text'),
      author: t('reviews.review1.author'),
      position: t('reviews.review1.position')
    },
    {
      text: t('reviews.review2.text'),
      author: t('reviews.review2.author'),
      position: t('reviews.review2.position')
    },
    {
      text: t('reviews.review3.text'),
      author: t('reviews.review3.author'),
      position: t('reviews.review3.position')
    },
  ];

  return (
    <section id="reviews" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title gradient-text">{t('reviews.title')}</h2>

          <div className="mt-12">
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              className="pb-12"
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={index}>
                  <div className="h-full">
                    <ReviewCard
                      text={review.text}
                      author={review.author}
                      position={review.position}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;