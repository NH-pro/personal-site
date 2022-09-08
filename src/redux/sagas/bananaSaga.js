// import { takeEvery } from 'redux-saga/effects';
// import { useDispatch } from 'react-redux';

// function* BananaFetch() {
//     const dispatch = useDispatch();

//     try {
//         dispatch({
//             type: 'CAUGHT_BANANA'
//         })
//     }
//     catch(err) {
//         console.log('Error in BananaFetch', err);
//     }
// }

// function* BananaSaga() {
//     yield takeEvery(`CAUGHT_BANANA`, BananaFetch);
// }

// export default BananaSaga;