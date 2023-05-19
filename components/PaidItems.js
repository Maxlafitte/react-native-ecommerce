import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import CoursesOverview from './CoursesOverview';
import {globalStyles, Colors} from '../ui'
import { AntDesign } from '@expo/vector-icons'; 

const PaidItems = ({ totalPrice, date, courseDetails}) => {

    const [isShowing, setIsShowing] = useState(false);

    const handleShow = () => {
        setIsShowing( prevState => !prevState )
    }

    /*

19:16
PaymentModel {
  "courses": Array [
        PaidCourse {"id": "1", "price": 99.99, "title": "Fomation JavaScript Moderne",},
        PaidCourse {"id": "2","price": 49.99,"title": "Coder facebook avec React JS",},
    ],
    "date": "05 06 2021 07:16",
    "id": "1622913396473",
    "total": 149.98,
    }

    */

    return (
        <ScrollView style={globalStyles.paidCoursesContainer}>
            <View style={globalStyles.paidCourses}>
                <Text style={globalStyles.totalPaid}>{totalPrice.toFixed(2)} €</Text>
                <Text style={globalStyles.date}>{date}</Text>
            </View>

            <TouchableOpacity
                onPress={ handleShow }
                style={globalStyles.iconBtn}
            >
                <AntDesign 
                    name={isShowing ? "minuscircleo" : "pluscircleo"} 
                    size={24} 
                    color={Colors.green}
                />
            </TouchableOpacity>

            {
                isShowing && (
                    <View style={globalStyles.detailPaidCourses}>
                        {
                            courseDetails.courses.map( course => (
                                <CoursesOverview 
                                    key={course.id}
                                    title={course.title}
                                    price={course.price}
                                />
                            ))
                        }
                    </View>
                )
            }
        </ScrollView>
    )
}

export default PaidItems