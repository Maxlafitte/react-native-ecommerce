import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import customHeaderIcon from '../components/customHeaderIcon';
import Landing from '../screens/Landing';
import CourseInfos from '../screens/CourseInfos';
import { Colors } from '../ui';

const CoursesStackNavigator = createStackNavigator();

export const CoursesNavigator = () => {
    return (
        <CoursesStackNavigator.Navigator
            initialRouteName='Landing'
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
            <CoursesStackNavigator.Screen
                name="Landing"
                component={Landing}
                options={{ title: 'Catalogue' }}
                
            />
            <CoursesStackNavigator.Screen
                name="Details"
                component={CourseInfos}
                options={({ route }) => (
                    {
                        title: route.params.title
                    }
                ) }
            />
        </CoursesStackNavigator.Navigator>
    )
}