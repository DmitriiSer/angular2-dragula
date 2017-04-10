import { Component } from '@angular/core';

import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Angular2-dragula';
  checkbox1State: boolean = true;
  checkbox2State: boolean = false;
  dragulaContainerName: string = 'container';

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
    { title: 'Third' },
    { title: 'Fourth' },
    { title: 'Fifth' }
  ];

  constructor(private dragulaService: DragulaService) {
    dragulaService.setOptions('container', {
      removeOnSpill: false,
      moves: function (el, container, handle) {
        // elements can be dragged only in a container with the class 'allowDragAndDrop'
        // and dragging it by the handle with the class 'fa'
        return container.classList.contains('allowDragAndDrop') && handle.classList.contains('fa');
      },
      accepts: function (el, target, source, sibling) {
        // elements can be dropped only in a container with the class 'allowDragAndDrop'
        return target.classList.contains('allowDragAndDrop');
      },
    });
  }

}
