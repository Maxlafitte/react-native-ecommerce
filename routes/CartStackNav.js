import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import customHeaderIcon from '../components/customHeaderIcon';
import Cart from '../screens/Cart';
import {globalStyles, Colors} from '../ui';

const CartStackNavigator = createStackNavigator();

export const CartNavigator = () => {
    return (
        <CartStackNavigator.Navigator
            screenOptions={({ navigation }) => (
                {
                    headerStyle: { backgroundColor: Colors.green },
                    headerTitleStyle: { fontWeight: 'bold'},
                    headerTintColor: Colors.white,
                    headerRight: () => (
                        <HeaderButtons HeaderButtonComponent={customHeaderIcon}>
                            <Item 
                                title="Panier"
                                iconName="shopping-cart"
                                onPress={() => navigation.navigate('Cart')}
                            />
                        </HeaderButtons>
                    ),
                    headerLeft: () => (
                        <HeaderButtons HeaderButtonComponent={customHeaderIcon}>
                            <Item 
                                title="Menu"
                                iconName="menu"
                                onPress={() => navigation.openDrawer()}
                            />
                        </HeaderButtons>
                    )
                }
            )}
        >
            <CartStackNavigator.Screen
                name="Cart"
                component={Cart}
                options={{title: 'Panier'}}
            />
        </CartStackNavigator.Navigator>
    )
}