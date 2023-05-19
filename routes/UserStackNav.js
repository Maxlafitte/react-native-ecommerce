import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import customHeaderIcon from '../components/customHeaderIcon';
import UserCourses from '../screens/UserCourses';
import UserEditCourse from '../screens/UserEditCourse';
import {globalStyles, Colors} from '../ui';

const UserStackNavigator = createStackNavigator();

export const UserNavigator = () => {
    return (
        <UserStackNavigator.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: Colors.green },
                headerTitleStyle: { fontWeight: 'bold'},
                headerTintColor: Colors.white,
            }}
        >
            <UserStackNavigator.Screen
                name="Courses"
                component={UserCourses}
                options={({ navigation }) => (
                    {
                        title: "Mes Cours",
                        headerRight: () => (
                            <HeaderButtons HeaderButtonComponent={customHeaderIcon}>
                                <Item 
                                    title="Editer"
                                    iconName="library-add"
                                    onPress={() => navigation.navigate('Edit', {
                                        title: "Créer un cours"
                                    })}
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
            />

            <UserStackNavigator.Screen
                name="Edit"
                component={UserEditCourse}
                options={({ route }) => ({
                    title: route.params.title ? route.params.title : 'Editer le cours'
                })}
            />
        </UserStackNavigator.Navigator>
    )
}