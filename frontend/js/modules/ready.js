
import { acessibility } from './acessibility';
import { fontSize } from './fontSize';
import { mobile } from './mobile';
import { analytcs } from './analytcs';
import { form } from './form';
import { leaflet } from './leaflet';

/**
 * Run event after DOM is ready
 * @param {Function} fn Callback function
 */
function ready(fn) {
  // Sanity check
  if (typeof fn !== 'function') return
  // If document is already loaded, run method
  if (document.readyState === 'interactive' || document.readyState === 'complete') return fn()
  // Otherwise, wait until document is loaded
  document.addEventListener('DOMContentLoaded', fn, false)
}

ready(function () {

  fontSize()
  acessibility()
  leaflet()
  form()
  
  let mw = window.matchMedia('(max-width: 768px)')
  mobile(mw)
  mw.addListener(mobile)
  analytcs()
})
