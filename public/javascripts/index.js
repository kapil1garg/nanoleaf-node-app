var changeLights = function sendRequestToChangeLights(desiredEffect) {
  console.log('attempting to change lights to ' + desiredEffect + ' from client');

  var xhr = new XMLHttpRequest();
  xhr.open("POST", 'lights/changeLights', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({
    effect: desiredEffect
  }));
};