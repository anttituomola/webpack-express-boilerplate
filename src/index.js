import logMessage from './js/logger'
import './css/style.css'
// Log message to console
logMessage('All is fine')
// Needed for Hot Module Replacement
if(typeof(module.hot) !== 'undefined') {
  module.hot.accept() // eslint-disable-line no-undef  
}