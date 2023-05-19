import React from 'react';
import { FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Courses from '../components/Courses';
import EmptyMsg from '../components/EmptyMsg';
import addToCart from '../redux/actions/actionAddToCart';

const Landing = ({ navigation }) => {
  const existingCourses = useSelector(state => state.courses.existingCourses);
  const coursesToDisplay= existingCourses.filter(course => course.selected === false)
  const dispatch = useDispatch()

  const handleAddToCart = (course) => {
    dispatch(addToCart(course))
    alert('article ajouté')
  }
  
  if (coursesToDisplay.length) {
    return (
      <FlatList
        data={coursesToDisplay}
        renderItem={({ item }) => (
          <Courses
            image={item.image}
            title={item.title}
            price={item.price}
            viewDetails={() => navigation.navigate('Details', {
              courseId: item.id,
              title: item.title
            })}
            addToCart={() => handleAddToCart(item)}
          />
        )}
      />    
    );
  } 
  return (
    <EmptyMsg text='Pas de cours à afficher'/>
  )
}

export default Landing;
