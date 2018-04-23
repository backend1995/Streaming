import { Component } from '@angular/core';

import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private StreamingMedia : StreamingMedia) {

  }

  startVideo()
  {
    let options : StreamingVideoOptions = {
      successCallback: () => {(console.log())},
      errorCallback: () => {(console.log())},
      orientation: 'portrait'
    }
    this.StreamingMedia.playVideo('https://ok.ru/video/252473707201',options);
  }
}
