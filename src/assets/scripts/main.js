/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';
import * as bootstrap from 'bootstrap';
import moment from 'moment';
/**
 * Write any other JavaScript below
 */

/*+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();*/

const dateInput = document.getElementById('exampleInputdate');
const fechaFormateada = moment().format('YYYY-MM-DD');
dateInput.value = fechaFormateada;
