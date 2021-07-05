'use strict';

window.backend = {
  xhRequest: function (method, url, onLoad, onError, ...data) {
    const SUCCESS_CODE = 200;

    const xhr = new XMLHttpRequest();

    xhr.addEventListener('load', function () {
      if (xhr.status === SUCCESS_CODE) {
        onLoad(xhr.response);
      } else {
        onError('cтатус ответа - ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('неполадки с соединением');
    });

    xhr.addEventListener('timeout', function () {
      onError('запрос не успел выполниться');
    });

    xhr.open(method, url);
    xhr.send(data);
  }
};
