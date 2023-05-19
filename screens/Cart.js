import React from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeCourseCart } from '../redux/actions/actionRemoveCourseCart';
import { addPayment } from '../redux/actions/actionPayment';
import EmptyMsg from '../components/EmptyMsg';
import CoursesInCart from '../components/CourseInCart';
import { globalStyles } from '../ui';


const Cart = ({navigation}) => {

  const dispatch = useDispatch();

  const cartCourses = useSelector(state => state.cart.cartCourses);
  const total = useSelector(state => state.cart.total);
  console.log(total)

  const handlepayment = (cartCourses, total) => {
    dispatch(addPayment(cartCourses, total));
    alert('Paiement effectué');
    // navigation.navigate('Accueil')
  }

  if (!cartCourses.length) {
    // navigation.navigate('Accueil')
  }
  
  return (
    <View style={globalStyles.cartContainer}>
      {
        cartCourses.length > 0 ? (
          <View>
            <FlatList 
              data={cartCourses}
              keyExtractor={ item => item.id }
              renderItem={({item}) => (
                <CoursesInCart 
                  title={item.title}
                  price={item.price}
                  onDelete={() => dispatch(removeCourseCart(item.id))}
                />
              )}
            />
            <View style={globalStyles.totalContainer}>
              <Text style={globalStyles.totalText}>
              Total:
                <Text style={globalStyles.totalPrice}> {total.toFixed(2)} €</Text>
              </Text>

              <TouchableOpacity
                onPress={() => handlepayment(cartCourses, total)}
              >
                <View style={globalStyles.btnAddPayament}>
                  <Text style={globalStyles.btnAddPayamentText}>Payer</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
            <EmptyMsg text="Panier vide"/>
        )
      
      }
    </View>
  )
}

export default Cart