import { StyleSheet, Text, View } from 'react-native';
import store from './redux/store'
import { Provider } from 'react-redux'
import AppNav from './routes/AppNav';

export default function App() {
  return (
    <Provider store={store}>
      <AppNav/>
    </Provider>
  );
}


