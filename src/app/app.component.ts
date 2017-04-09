import { Component } from '@angular/core';

import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular2-dragula';

  container1Elements: Array<any> = [
    {
      title: 'You can move this element between these two containers',
      dragHandler: true
    }, {
      title: `Moving them anywhere else isn't quite possible`,
      dragHandler: false
    }, {
      title: `There's also the possibility of moving elements around in the same container, changing their position`,
      dragHandler: false
    }
  ];

  container2Elements: Array<any> = [
    {
      title: 'This is the default use case. You only need to specify the containers you want to use',
      dragHandler: true
    }, {
      title: `More interactive use cases lie ahead`,
      dragHandler: true
    }, {
      title: `Make sure to check out the <a href='https://github.com/bevacqua/dragula#readme'>documentation on GitHub!</a></div>`,
      dragHandler: true
    }
  ];

  collapsibleElements = [
    { title: 'First' },
    { title: 'Second' },
    { title: 'Third' }
  ];

  constructor(dragulaService: DragulaService) {
    dragulaService.setOptions('container', {
      removeOnSpill: true,
      moves: function (el, container, handle) {
        return handle.classList.contains('fa');
      }
    });
  }
}
