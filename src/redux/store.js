
import { legacy_createStore as createStore } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer/reducer';
/* 
    * store: sẽ có 3 tham số truyền vào (rootReducer, initeValue, enhancers)
    * rootReducer: là 1 funtion dùng để cập nhật lại các state ở kho chung 
    * initeValue: set những giá trị mặc định trong cái store
    * enhancers: là những Middleware (Thunk or Saga)
    
    ! truyền composeEnhancers vào tham số thứ 2 vì chúng ta không có initValue (nếu có thì composeEnhancers sẽ trở thành tham số thứ 3)
*/

const composeEnhancers = composeWithDevTools()

const store = createStore(reducer, composeEnhancers);

console.log('sss', store.getState());
export default store;