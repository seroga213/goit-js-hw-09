!function(){function e(e,t){return new Promise((function(n,i){setTimeout((function(){Math.random()>.3?n({position:e,delay:t}):i({position:e,delay:t})}),t)}))}refs.btnCreatePromise.addEventListener("click",(function(t){t.preventDefault();for(var n=Number(refs.delay.value),i=Number(refs.step.value),o=0;o<refs.amount.value;o+=1)e(o+1,n+o*i).then((function(e){var t=e.position,n=e.delay;Notiflix.Notify.success("Fulfilled promise ".concat(t," in ").concat(n,"ms"))})).catch((function(e){var t=e.position,n=e.delay;Notiflix.Notify.failure("Rejected promise ".concat(t," in ").concat(n,"ms"))}))}))}();
//# sourceMappingURL=03-promises.5de2f33e.js.map
