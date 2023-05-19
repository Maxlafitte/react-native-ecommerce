import { StyleSheet } from "react-native"
import { Colors } from './Colors'

export const globalStyles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center',
    },
    text: {
        color: Colors.green,
    },
    iconeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '20%',
        alignItems: 'center',
        paddingHorizontal: 30
    },
    courseContainer: {
        backgroundColor: Colors.white,
        borderRadius: 10,
        height: 300,
        borderColor: Colors.lightGrey,
        margin: 25,
        borderWidth: 1
    },
    imageContainer: {
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    courseContainerDetails: {
        alignItems: 'center',
        height: '20%',
        padding: 10
    },
    courseTitle: {
        marginVertical: 4,
        color: Colors.green,
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    coursePrice: {
        color: Colors.darkGrey,
        fontSize: 16,
    },
    scroll: {
        backgroundColor: Colors.white,
        height: '80%'
    },
    courseImage: {
        height: 250,
        width: '100%'
    },
    courseDescription: {
        color: Colors.dimGray,
        fontSize: 17,
        marginHorizontal: 20,
        marginVertical: 10
    },
    courseDetail: {
        padding: 20,
        alignItems: 'center'
    },
    footerContainer: {
        height: '20%',
    },
    footerTop: {
        height: '40%',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    coursePriceWrapper: {
        paddingRight: 40
    },
    coursePrice: {
        fontSize: 24,
        color: Colors.green
    },
    footerBottom: {
        backgroundColor: Colors.green,
        height: '60%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30
    },
    btnAddToCart: {
        borderRadius: 6,
        paddingVertical: 9,
        paddingHorizontal: 25,
        backgroundColor: Colors.lightOragne
    },
    btnAddToCartText: {
        fontSize: 19
    },
    cartContainer: {
        margin: 20
    },
    totalContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 19
    },
    totalText: {
        fontWeight: 'bold',
        fontSize: 19
    },
    totalPrice: {
        color: Colors.green
    },
    btnAddPayament: {
        borderRadius: 6,
        paddingVertical: 9,
        paddingHorizontal: 25,
        backgroundColor: Colors.orange
    },
    btnAddPayamentText: {
        fontSize: 19
    },
    coursesContainer: {
        backgroundColor: Colors.white,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginBottom: 9
    },
    courseTitle: {
        width: '60%',
    },
    coursePrice: {
        textAlign: 'right',
        paddingRight: 9,
        width: '30%',
    },
    paidCoursesContainer: {
        backgroundColor: Colors.white,
        borderRadius: 10,
        margin: 20,
        padding: 15
    },
    paidCourses: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 15
    },
    totalPaid: {
        fontSize: 18
    },
    date: {
        fontSize: 16
    },
    iconBtn: {
        alignSelf: 'flex-end'
    },
    detailPaidCourses: {
        marginTop: 20,
        borderTopColor: Colors.lightGrey,
        borderTopWidth: 1
    },
    courseContainerOverview: {
        backgroundColor: Colors.white,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        marginTop: 9
    },
    titleOverview: {
        width: "70%"
    },
    priceOverview: {
        color: Colors.dimGray
    }

})
