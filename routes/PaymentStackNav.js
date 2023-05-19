import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import customHeaderIcon from '../components/customHeaderIcon';
import Payments from '../screens/Payments';
import {Colors, globalStyles} from '../ui';

const PaymentStackNavigator = createStackNavigator();

export const PaymentNavigator = () => {
    return (
        <PaymentStackNavigator.Navigator
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
            <PaymentStackNavigator.Screen
                name="Payment"
                component={Payments}
                options={{title: 'Mes achats'}}
            />
        </PaymentStackNavigator.Navigator>
    )
}