import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { globalStyles } from '../ui';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../ui';
import { useSelector, useDispatch } from 'react-redux';
import addToCart from '../redux/actions/actionAddToCart';

const CourseInfos = ({ navigation, route }) => {
  const courseId = route.params.courseId
  const courseTitle = route.params.title
  const selectedCourse = useSelector(state => state.courses.existingCourses
    .find((course) => course.id === courseId)
  )

  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addToCart(selectedCourse));
    navigation.goBack();
    alert('article ajouté')
  }

  return (
    <View>
      <ScrollView style={globalStyles.scroll}>
        <Image
          source={{ uri: selectedCourse.image }}
          style={globalStyles.courseImage}

        />
        <View style={globalStyles.courseDetail}>
          <Text style={globalStyles.courseDescription}>{selectedCourse.description}</Text>
          <Text style={globalStyles.courseDescription}>{selectedCourse.description}</Text>
          <Text style={globalStyles.courseDescription}>{selectedCourse.description}</Text>
          <Text style={globalStyles.courseDescription}>{selectedCourse.description}</Text>
          <Text style={globalStyles.courseDescription}>{selectedCourse.description}</Text>
        </View>
      </ScrollView>
      <View style={globalStyles.footerContainer}>
        <View style={globalStyles.footerTop}>
          <View style={globalStyles.coursePriceWrapper}>
            <Text style={globalStyles.coursePriceWrapper}>{ selectedCourse.price.toFixed(2)} €</Text>
          </View>
        </View>
        <View style={globalStyles.footerBottom}>
          <MaterialIcons
            name="arrow-back-ios"
            size={24}
            color={Colors.white}
            onPress={() => navigation.goBack()}
          />
          <TouchableOpacity
            onPress={handleAddToCart}
          >
            <View style={globalStyles.btnAddToCart}>
              <Text style={globalStyles.btnAddToCartText}>Ajouter au panier</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default CourseInfos;

